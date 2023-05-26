import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Home from '../screens/Dashboard/Home';
import Search from '../screens/Dashboard/Search';
import Bookmark from '../screens/Dashboard/Bookmark';
import Recently from '../screens/Dashboard/Recently';

const Tab = createBottomTabNavigator();

export default function DashboardNavigator() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign name="home" size={24} color="black" />
          )
        }}
      />

      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign name="search1" size={24} color="black" />
          )
        }}
      />

      <Tab.Screen
        name='Bookmark'
        component={Bookmark}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <FontAwesome name="bookmark-o" size={24} color="black" />
          )
        }}
      />

      <Tab.Screen
        name='Recently'
        component={Recently}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign name="clockcircleo" size={24} color="black" />
          )
        }}
      />

    </Tab.Navigator>
  )
}