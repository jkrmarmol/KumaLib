import { TouchableOpacity, TextInput, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { AntDesign, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Home from '../screens/Dashboard/Home';
import Search from '../screens/Dashboard/Search';
import Bookmark from '../screens/Dashboard/Bookmark';
import Recently from '../screens/Dashboard/Recently';


const Tab = createBottomTabNavigator();

export default function DashboardBottomNavigator() {
  const nav = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarTransitionPreset: 'fade',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => nav.navigate('Profile')}
              style={{
                position: 'relative',
                left: 20,
              }}>
              <MaterialCommunityIcons name="account-outline" size={27} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => {
            return route.name === 'Search' ? (
              <View
                onTouchStart={() => nav.navigate('Search')}
                style={{
                  right: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >

                <TextInput
                  style={{
                    backgroundColor: '#FBFBFB',
                    borderRadius: 12,
                    elevation: 4,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.25,
                    shadowRadius: 1,
                    width: 200,
                    paddingLeft: 20,
                    paddingRight: 30
                  }}
                />
                <Octicons name="search" size={20} color="black" style={{
                  opacity: 0.5,
                  position: 'absolute',
                  right: 10
                }} />

              </View>
            ) : (
              <TouchableOpacity
                onPress={() => nav.navigate('Search')}
              >
                <Octicons
                  name="search"
                  size={20}
                  color="black"
                  style={{
                    right: 20
                  }}
                />
              </TouchableOpacity>
            )
          },
          tabBarStyle: {
            position: 'absolute',
            height: 55,
            bottom: 24,
            left: 15,
            right: 15,
            borderRadius: 12,
            // backgroundColor: '#F7A600'
          }
        })}
      >

        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: '',
            // headerShadowVisible: false,
            tabBarIcon: ({ size, color, focused }) => (
              <AntDesign
                name="home"
                size={focused ? 28 : size}
                color={focused ? '#F7A600' : '#000'}
              />
            )
          }}
        />

        {/* <Tab.Screen
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
        /> */}

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
            ),
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

      </Tab.Navigator>
    </>
  )
}