import { TouchableOpacity, Text, StyleSheet, Touchable } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from '../screens/SignUp';

// User Dashboard Nav & Screen
import DashboardBottomNavigator from './DashboardBottomNavigator';
import BookInformation from '../screens/Dashboard/BookInformation';
import Profile from '../screens/Dashboard/Profile';
import EditProfile from '../screens/Dashboard/EditProfile';
import ChangePassword from '../screens/Dashboard/ChangePassword';
import AboutMe from '../screens/Dashboard/AboutMe';


const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const nav = useNavigation<NavigationProp<ParamListBase>>();

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
        }}
      />

      {/* Start Dashboard Navigation  */}
      <Stack.Screen
        name='DashboardBottomNav'
        component={DashboardBottomNavigator}
        options={{
          headerShown: false
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
          }
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
          }
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
          }
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
          }
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