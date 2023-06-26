import React from 'react'
import { View, Text, ScrollView, useWindowDimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import type { ITeamMember } from '../../typings/interfaces';
import { AntDesign } from '@expo/vector-icons';
import TeamMember from '../../components/TeamMember';
import ByteDevsLogo from '../../assets/images/bytedevs.png';
import teamMember from '../../constant/ourTeam';


export default function OurTeam() {
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  return (
    <View style={style.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: WIDTH }}>

        <View style={style.teamContainer}>
          <Image
            source={ByteDevsLogo}
            style={style.byteDevsImages}
          />
          <View style={style.byteDevContainer}>
            <Text style={style.byteDevsText}>ByteDevs Technologies.</Text>
            <View style={style.byteDevsSocMed}>
              <TouchableOpacity>
                <AntDesign name="instagram" size={22} color="#F70000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="facebook-square" size={22} color="#F70000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="github" size={22} color="#F70000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={style.teamMemberContainer}>
          {teamMember.map((info: ITeamMember, index: number) => (
            <TeamMember
              key={index}
              {...info}
            />
          ))}
        </View>

      </ScrollView>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  byteDevContainer: {
    flex: 1,
    marginTop: 20
  },
  byteDevsText: {
    fontSize: 20,
    fontFamily: 'PoppinsBold'
  },
  byteDevsSocMed: {
    flexDirection: 'row',
    gap: 10
  },
  teamMemberContainer: {
    marginTop: 20
  },
  byteDevsImages: {
    resizeMode: 'contain',
    height: 100,
    width: 100
  }
})