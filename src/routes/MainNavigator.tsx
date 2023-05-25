import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from '../views/SignUp';



const Stack = createNativeStackNavigator();

export default function MainNavigator() {
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
            <TouchableOpacity style={style.signInTouchableOpacity}>
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
            <TouchableOpacity style={style.signInTouchableOpacity}>
              <Text style={style.signInText}>Login</Text>
            </TouchableOpacity>
          ),
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