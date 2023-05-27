import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from '../screens/SignUp';
import DashboardNavigator from './DashboardNavigator';


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

      <Stack.Screen
        name='DashboardNav'
        component={DashboardNavigator}
        options={{
          headerShown: false
        }}
      />

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