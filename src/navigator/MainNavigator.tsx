import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from '../screens/SignUp';
import DashboardBottomNavigator from './DashboardBottomNavigator';
import BookInformation from '../screens/Dashboard/BookInformation';
import Profile from '../screens/Dashboard/Profile';
import EditProfile from '../screens/Dashboard/EditProfile';
import ChangePassword from '../screens/Dashboard/ChangePassword';
import AboutMe from '../screens/Dashboard/AboutMe';
import Search from '../screens/Dashboard/Search';
import { useAppDispatch, useAppSelector } from '../redux/app/hook';
import { checkAuthenticated } from '../redux/slices/authenticationSlice';
import { searchBook } from '../redux/slices/searchSlice';
import { search } from '../redux/slices/bookSlice';


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const nav = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const selectBookInput = useAppSelector(state => state.search)

  useEffect(() => {
    async function hasAuth() {
      const { payload } = await dispatch(checkAuthenticated());
      payload.success === 1 && nav.navigate('DashboardBottomNav');
      payload.success === 0 && nav.navigate('Home');
    }
    hasAuth();
  }, [])

  return (
    <Stack.Navigator>

      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F7A600',
          },
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => nav.navigate('SignUp')}
              style={style.signInTouchableOpacity}
            >
              <Text style={style.signInText}>Register</Text>
            </TouchableOpacity>
          ),
          animation: 'slide_from_bottom'
        }}
      />

      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F7A600',
          },
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => nav.navigate('SignIn')}
              style={style.signInTouchableOpacity}
            >
              <Text style={style.signInText}>Login</Text>
            </TouchableOpacity>
          ),
          animation: 'slide_from_bottom'
        }}
      />

      {/* Start Dashboard Navigation  */}
      <Stack.Screen
        name='DashboardBottomNav'
        component={DashboardBottomNavigator}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />

      <Stack.Screen
        name='BookInformation'
        component={BookInformation}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons name="bookmark-plus-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
          animation: 'slide_from_right'
        }}
      />

      <Stack.Screen
        name='Search'
        component={Search}
        options={{
          animation: 'slide_from_right',
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(search(selectBookInput))}
            >
              <Text style={{
                fontFamily: 'PoppinsMedium',
                fontSize: 14,
                color: '#F7A600'
              }}>Search</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <>
              <TouchableOpacity onPress={() => nav.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                paddingVertical: 3,
                backgroundColor: '#F3F3F3',
                borderRadius: 12,
                left: 10
              }}>
                <FontAwesome name="search" size={15} color="black" />
                <TextInput
                  placeholder='search book'
                  onChangeText={text => dispatch(searchBook(text))}
                  style={{
                    fontSize: 14,
                    paddingLeft: 10,
                    width: 200,
                    fontFamily: 'PoppinsRegular',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              </View>
            </>
          )
        }}
      />

      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShadowVisible: false,
          headerTitle: 'My Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemiBold',
            fontSize: 18
          },
          animation: 'slide_from_left'
        }}
      />

      <Stack.Screen
        name='EditProfile'
        component={EditProfile}
        options={{
          headerShadowVisible: false,
          headerTitle: 'Edit Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemiBold',
            fontSize: 18
          },
          animation: 'slide_from_right'
        }}
      />

      <Stack.Screen
        name='ChangePassword'
        component={ChangePassword}
        options={{
          headerShadowVisible: false,
          headerTitle: 'Change Password',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemiBold',
            fontSize: 18
          },
          animation: 'slide_from_right'
        }}
      />

      <Stack.Screen
        name='AboutMe'
        component={AboutMe}
        options={{
          headerShadowVisible: false,
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemiBold',
            fontSize: 18
          },
          animation: 'slide_from_right'
        }}
      />

      {/* End Dashboard Navigation  */}


    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  signInTouchableOpacity: {
    marginRight: 10
  },
  signInText: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'PoppinsBold'
  }
})