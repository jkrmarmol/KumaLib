import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, useWindowDimensions, Image, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { AntDesign, Foundation, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { information, save, unsave, download } from '../../redux/slices/bookSlice';


export default function BookInformation({ route, navigation }: any) {
  const { id, title, hash } = route.params;
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  const dispatch = useAppDispatch();
  const selectBookInformation = useAppSelector(state => state.book.information);
  const [bookmark, setBookmark] = useState(selectBookInformation.status === 'ok' && selectBookInformation.response?.book._isUserSavedBook);

  const onPressSave = async () => {
    try {
      setBookmark(!bookmark)
      bookmark ? await dispatch(unsave({ id })) : await dispatch(save({ id }))
    } catch (err) {
      console.log(err)
    }
  }

  const downloadFile = async () => {
    try {
      if (selectBookInformation.status === 'ok' && selectBookInformation.response?.success === 1) {
        const { title, extension } = selectBookInformation.response.book;
        await dispatch(download({ title, extension, id, hash }))
      }
    } catch (err) {
      console.log(err)
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerTitleStyle: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 16
      },
      headerRight: () => (
        <TouchableOpacity onPress={onPressSave}>
          {bookmark ? <MaterialCommunityIcons name="bookmark-minus" size={30} color="#F7A600" /> : <MaterialCommunityIcons name="bookmark-plus-outline" size={30} color="black" />}
        </TouchableOpacity>
      ),
    });
  }, [navigation, title, id, bookmark, selectBookInformation, setBookmark]);

  useEffect(() => {
    dispatch(information({ id, hash }));
  }, [id])

  return (
    <View style={style.container}>

      {selectBookInformation.status === 'ok' && selectBookInformation.response?.success === 1
        ? (<ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: WIDTH, flex: 1 }}>

          <View style={style.bookImageTextContainer}>

            <Image
              source={{ uri: selectBookInformation.response.book.cover }}
              style={style.bookImage}
            />

            <View style={style.bookInfoRightContainer}>

              <View style={style.ratingContainer}>
                <View style={style.ratingChildContainer}>
                  <AntDesign name="staro" size={20} color="black" />
                  <Text style={style.ratingText}>{selectBookInformation.response.book.interestScore} / {selectBookInformation.response.book.qualityScore}</Text>
                </View>
                <Text style={style.ratingDescription}>Book Rating / Book Quality</Text>
              </View>

              <View style={style.pagesContainer}>
                <View style={style.pagesChildContainer}>
                  <Foundation name="page-copy" size={20} color="black" />
                  <Text style={style.pagesText}>{selectBookInformation.response.book.pages}</Text>
                </View>
                <Text style={style.pagesDescription}>Pages</Text>
              </View>

              <View style={style.publishedContainer}>
                <View style={style.publishedChildContainer}>
                  <MaterialIcons name="publish" size={20} color="black" />
                  <Text style={style.publishedText}>{selectBookInformation.response.book.year}</Text>
                </View>
                <Text style={style.publishedDescription}>Year Published</Text>
              </View>

            </View>

          </View>

          <View style={style.bookInfoContainer}>
            <View style={style.bookTitleAuthorContainer}>
              <Text style={style.bookTitleText}>{selectBookInformation.response.book.title}</Text>
              <Text style={style.bookAuthorText}>{selectBookInformation.response.book.author}</Text>
            </View>

            <View style={style.bookDescriptionContainer}>
              <Text style={style.bookDescriptionTitle}>Description</Text>
              <Text style={style.bookDescriptionText}>{selectBookInformation.response.book.description}</Text>
            </View>

            <View style={style.bookMoreInfoContainer}>
              <Text style={style.bookMoreInfoTitle}>More Information</Text>

              <View style={style.bookMoreInfoFlex}>
                <Text style={style.bookMoreInfoKey}>Publisher: </Text>
                <Text style={style.bookMoreInfoValue}>{selectBookInformation.response.book.publisher}</Text>
              </View>

              <View style={style.bookMoreInfoFlex}>
                <Text style={style.bookMoreInfoKey}>Language: </Text>
                <Text style={style.bookMoreInfoValue}>{selectBookInformation.response.book.language}</Text>
              </View>

              <View style={style.bookMoreInfoFlex}>
                <Text style={style.bookMoreInfoKey}>ISBN 10: </Text>
                <Text style={style.bookMoreInfoValue}>{selectBookInformation.response.book.identifier.split(',')[1]}</Text>
              </View>

              <View style={style.bookMoreInfoFlex}>
                <Text style={style.bookMoreInfoKey}>ISBN 13: </Text>
                <Text style={style.bookMoreInfoValue}>{selectBookInformation.response.book.identifier.split(',')[0]}</Text>
              </View>

              <View style={style.bookMoreInfoFlex}>
                <Text style={style.bookMoreInfoKey}>File: </Text>
                <Text style={style.bookMoreInfoValue}>{selectBookInformation.response.book.extension.toUpperCase() + ' ' + selectBookInformation.response.book.filesizeString}</Text>
              </View>

            </View>

          </View>

          <TouchableOpacity
            onPress={downloadFile}
            style={style.bookButtonEffect}
          >
            <LinearGradient
              colors={['#F7A600', '#F70000']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={style.bookButtonContainer}
            >
              <Text style={style.bookButtonText}>Download {selectBookInformation.response.book.extension.toUpperCase() + ' ' + selectBookInformation.response.book.filesizeString}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>) : <View style={style.bookActivityIndicator}>
          <ActivityIndicator size="large" color="#F7A600" />
        </View>}





    </View >
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  bookImageTextContainer: {
    flexDirection: 'row',
    marginVertical: 10
  },
  bookImage: {
    resizeMode: 'contain',
    height: 310,
    flex: 1,
    borderRadius: 12
  },
  bookInfoRightContainer: {
    justifyContent: 'center',
  },
  ratingContainer: {
    justifyContent: 'center',
    padding: 7,
  },
  ratingChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ratingText: {
    fontFamily: 'PoppinsSemiBold',
    left: 5
  },
  ratingDescription: {
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 10,
    opacity: 0.7
  },
  pagesContainer: {
    justifyContent: 'center',
    padding: 7,
  },
  pagesChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pagesText: {
    fontFamily: 'PoppinsSemiBold',
    left: 5
  },
  pagesDescription: {
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 10,
    opacity: 0.7
  },
  publishedContainer: {
    justifyContent: 'center',
    padding: 7,
  },
  publishedChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  publishedText: {
    fontFamily: 'PoppinsSemiBold',
    left: 5
  },
  publishedDescription: {
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 10,
    opacity: 0.7
  },
  bookInfoContainer: {
    marginVertical: 5
  },
  bookTitleAuthorContainer: {
    marginVertical: 10
  },
  bookTitleText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 22
  },
  bookAuthorText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    opacity: 0.5
  },
  bookDescriptionContainer: {
    marginVertical: 10
  },
  bookDescriptionTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16
  },
  bookDescriptionText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14
  },
  bookMoreInfoContainer: {
    marginVertical: 10
  },
  bookMoreInfoTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16
  },
  bookMoreInfoFlex: {
    flexDirection: 'row'
  },
  bookMoreInfoKey: {
    fontFamily: 'PoppinsMedium',
  },
  bookMoreInfoValue: {
    fontFamily: 'PoppinsRegular',
  },
  bookButtonEffect: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    borderRadius: 16,
    marginVertical: 20
  },
  bookButtonContainer: {
    borderRadius: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookButtonText: {
    fontFamily: 'PoppinsSemiBold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 14
  },
  bookActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})