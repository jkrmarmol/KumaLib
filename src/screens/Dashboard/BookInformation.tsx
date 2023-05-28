import { View, Text, useWindowDimensions, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, Foundation, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import bookInformationSampleData from '../../constant/bookInformationSampleData.json';

export default function BookInformation({ route, navigation }: any) {
  const { book } = bookInformationSampleData;
  const { id, title } = route.params;
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerTitleStyle: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 16
      }
    });
  }, [navigation, title, id]);

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: WIDTH,
          flex: 1
        }}>

        <View style={{
          flexDirection: 'row',
          marginVertical: 10
        }}>

          <Image
            source={{ uri: book.cover }}
            style={{
              resizeMode: 'contain',
              height: 310,
              flex: 1,
              borderRadius: 12
            }}
          />

          <View style={{
            justifyContent: 'center',
          }}>

            <View style={{
              justifyContent: 'center',
              padding: 7,
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <AntDesign name="staro" size={20} color="black" />
                <Text style={{
                  fontFamily: 'PoppinsSemiBold',
                  left: 5
                }}>5.0 / 5.0</Text>
              </View>
              <Text style={{
                textAlign: 'center',
                fontFamily: 'PoppinsSemiBold',
                fontSize: 10,
                opacity: 0.7
              }}>Book Rating / Book Quality</Text>
            </View>

            <View style={{
              justifyContent: 'center',
              padding: 7,
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Foundation name="page-copy" size={20} color="black" />
                <Text style={{
                  fontFamily: 'PoppinsSemiBold',
                  left: 5
                }}>123</Text>
              </View>
              <Text style={{
                textAlign: 'center',
                fontFamily: 'PoppinsSemiBold',
                fontSize: 10,
                opacity: 0.7
              }}>Pages</Text>
            </View>

            <View style={{
              justifyContent: 'center',
              padding: 7,
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MaterialIcons name="publish" size={20} color="black" />
                <Text style={{
                  fontFamily: 'PoppinsSemiBold',
                  left: 5
                }}>2002</Text>
              </View>
              <Text style={{
                textAlign: 'center',
                fontFamily: 'PoppinsSemiBold',
                fontSize: 10,
                opacity: 0.7
              }}>Year Published</Text>
            </View>

          </View>

        </View>

        <View style={{
          marginVertical: 5
        }}>
          <View style={{
            marginVertical: 10
          }}>
            <Text style={{
              fontFamily: 'PoppinsSemiBold',
              fontSize: 22
            }}>{book.title}</Text>
            <Text style={{
              fontFamily: 'PoppinsSemiBold',
              fontSize: 14,
              opacity: 0.5
            }}>{book.author}</Text>
          </View>

          <View style={{
            marginVertical: 10
          }}>
            <Text style={{
              fontFamily: 'PoppinsSemiBold',
              fontSize: 16
            }}>Description</Text>
            <Text style={{
              fontFamily: 'PoppinsRegular',
              fontSize: 14
            }}>{book.description}</Text>
          </View>

          <View style={{
            marginVertical: 10
          }}>
            <Text style={{
              fontFamily: 'PoppinsSemiBold',
              fontSize: 16
            }}>More Information</Text>

            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                fontFamily: 'PoppinsMedium',
              }}>Publisher: </Text>
              <Text style={{
                fontFamily: 'PoppinsRegular',
              }}>{book.publisher}</Text>
            </View>

            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                fontFamily: 'PoppinsMedium',
              }}>Language: </Text>
              <Text style={{
                fontFamily: 'PoppinsRegular',
              }}>{book.language}</Text>
            </View>

            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                fontFamily: 'PoppinsMedium',
              }}>ISBN 10: </Text>
              <Text style={{
                fontFamily: 'PoppinsRegular',
              }}>{book.identifier.split(',')[1]}</Text>
            </View>

            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                fontFamily: 'PoppinsMedium',
              }}>ISBN 13: </Text>
              <Text style={{
                fontFamily: 'PoppinsRegular',
              }}>{book.identifier.split(',')[0]}</Text>
            </View>

            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                fontFamily: 'PoppinsMedium',
              }}>File: </Text>
              <Text style={{
                fontFamily: 'PoppinsRegular',
              }}>{book.extension.toUpperCase() + ' ' + book.filesizeString}</Text>
            </View>

          </View>

        </View>

        <TouchableOpacity
          style={{
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.25,
            shadowRadius: 1,
            borderRadius: 16,
            marginVertical: 20
          }}
        >
          <LinearGradient
            colors={['#F7A600', '#F70000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 16,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{
              fontFamily: 'PoppinsSemiBold',
              textAlign: 'center',
              color: '#fff',
              fontSize: 14
            }}>Download {book.extension.toUpperCase() + ' ' + book.filesizeString}</Text>
          </LinearGradient>
        </TouchableOpacity>


      </ScrollView>

    </View>
  )
}

const style = StyleSheet.create({

})