import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Home from '../screens/Dashboard/Home';
import Search from '../screens/Dashboard/Search';
import Bookmark from '../screens/Dashboard/Bookmark';
import Recently from '../screens/Dashboard/Recently';


const Tab = createBottomTabNavigator();

export default function DashboardNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerLeft: () => (
          <TouchableOpacity
            style={{
              position: 'relative',
              left: 20,
            }}>
            <MaterialCommunityIcons name="account-outline" size={27} color="black" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{
              position: 'relative',
              right: 20,
            }}>
            <Octicons name="search" size={24} color="black" />
          </TouchableOpacity>
        ),
        tabBarStyle: {
          position: 'absolute',
          height: 55,
          bottom: 24,
          left: 15,
          right: 15,
          borderRadius: 12,
        }
      }}
    >

      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: '',
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign
              name="home"
              size={focused ? 28 : size}
              color={focused ? '#F7A600' : '#000'}
            />
          )
        }}
      />

      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          headerTitle: '',
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign
              name="search1"
              size={focused ? 28 : size}
              color={focused ? '#F7A600' : '#000'}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Bookmark'
        component={Bookmark}
        options={{
          headerTitle: '',
          tabBarIcon: ({ size, color, focused }) => (
            <FontAwesome
              name="bookmark-o"
              size={focused ? 28 : size}
              color={focused ? '#F7A600' : '#000'}
            />
          )
        }}
      />

      <Tab.Screen
        name='Recently'
        component={Recently}
        options={{
          headerTitle: '',
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign
              name="clockcircleo"
              size={focused ? 28 : size}
              color={focused ? '#F7A600' : '#000'}
            />
          )
        }}
      />

    </Tab.Navigator >
  )
}