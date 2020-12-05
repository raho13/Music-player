import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native'
import TextTicker from 'react-native-text-ticker'
import Entypo from 'react-native-vector-icons/Entypo'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
import { Audio, Video } from 'expo-av'

//     url: require('../list/Saybu Swag - Gecələr(MP3_160K).mp3'),

const Player = () => {
  const playbackObject =  Audio.Sound.createAsync(
    { uri: 'http://foo/bar.mp3' },
    { shouldPlay: true }
  );
  const [plying, setplying] = useState(true)
  const [liked, setliked] = useState(false)
  const [loop, setloop] = useState(0)

  const loopicon = () => {
    if (loop === 0) {
      return (
        <View style={{ alignSelf: 'center' }}>
          <Foundation
            onPress={() => {
              if (loop === 2) {
                setloop(0)
              } else {
                setloop(loop + 1)
              }
            }}
            name="loop"
            color="#1D212C"
            size={40}
            style={{}}
          />
        </View>
      )
    } else if (loop === 1) {
      return (
        <View style={{ alignSelf: 'center' }}>
          <Entypo
            onPress={() => {
              if (loop === 2) {
                setloop(0)
              } else {
                setloop(loop + 1)
              }
            }}
            name="shuffle"
            color="#1D212C"
            size={30}
            style={{}}
          />
        </View>
      )
    } else {
      return (
        <View style={{ alignSelf: 'center' }}>
          <Foundation
            onPress={() => {
              if (loop === 2) {
                setloop(0)
              } else {
                setloop(loop + 1)
              }
            }}
            name="loop"
            color="#1D212C"
            size={40}
            style={{}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: '#1D212C',
              fontSize: 13,
              position: 'absolute',
              left: 9,
              top: 11,
            }}
          >
            1
          </Text>
        </View>
      )
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.flat}>
        <View style={styles.textarea}>
          <TextTicker
            style={styles.trackheader}
            duration={7000}
            repeatSpacer={50}
          >
            North West 2
          </TextTicker>
        </View>
        <View style={styles.textarea1}>
          <TextTicker
            style={styles.trackname}
            duration={9000}
            repeatSpacer={50}
          >
            xpert x hvchewfu wejkcvewbbi
          </TextTicker>
        </View>
      </View>

      <View style={{ height: dimensions.height - 550 }}>
        <AnimatedCircularProgress
          style={{
            alignSelf: 'center',
            top: -230,
            transform: [{ scaleX: -1 }],
          }}
          size={270}
          width={8}
          arcSweepAngle={170}
          rotation={95}
          backgroundWidth={4}
          fill={89}
          lineCap="round"
          tintColor="#1D212C"
          backgroundColor="#BBBAC0"
        />
      </View>

      <View style={styles.CtrlBtns}>
        <View
          onPress={() => {
            if (loop === 2) {
              setloop(0)
            } else {
              setloop(loop + 1)
            }
          }}
          style={{ width: '15%', alignSelf: 'center' }}
        >
          {loopicon()}
        </View>
        <View style={styles.playingBtns}>
          <AntDesign
            name="banckward"
            color="black"
            size={25}
            style={{ alignSelf: 'center' }}
          />
          <View style={styles.playbtn}>
            {plying ? (
              <Entypo
                onPress={() => {
                  setplying(!plying)
                }}
                name="controller-play"
                color="white"
                size={60}
                style={{ marginLeft: 8, marginTop: 4 }}
              />
            ) : (
              <Entypo
                onPress={() => {
                  setplying(!plying)
                }}
                name="controller-paus"
                color="white"
                size={60}
                style={{ alignSelf: 'center', marginTop: 4 }}
              />
            )}
          </View>
          <AntDesign
            name="forward"
            color="black"
            size={25}
            style={{ alignSelf: 'center' }}
          />
        </View>
        <View style={{ width: '15%', alignSelf: 'center' }}>
          {liked ? (
            <Entypo
              onPress={() => {
                setliked(!liked)
              }}
              name="heart"
              color="#1D212C"
              size={30}
              style={{ alignSelf: 'center' }}
            />
          ) : (
            <Entypo
              onPress={() => {
                setliked(!liked)
              }}
              name="heart-outlined"
              color="#1D212C"
              size={30}
              style={{ alignSelf: 'center' }}
            />
          )}
        </View>
      </View>
    </View>
  )
}
const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#DDD8DA',
    //#1D212C
    height: dimensions.height,
  },

  brogressbar: {
    alignSelf: 'center',
    marginTop: 0,
    top: -180,
  },
  playbtn: {
    width: 70,
    height: 70,
    backgroundColor: '#1D212C',
    alignSelf: 'center',
    borderRadius: 100,
  },
  CtrlBtns: {
    width: dimensions.width,
    height: 100,
    // backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playingBtns: {
    width: '60%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 100,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  trackheader: {
    textAlign: 'center',
    paddingLeft: 30,
    color: 'white',
    fontSize: 20,
  },
  textarea: {
    width: 170,
    alignSelf: 'center',
    bottom: -300,
  },
  textarea1: {
    width: 150,
    alignSelf: 'center',
    textAlign: 'center',
    bottom: -300,
  },
  trackname: {
    paddingLeft: 30,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  flat: {
    width: 220,
    height: 450,
    backgroundColor: '#1D212C',
    alignSelf: 'center',
    borderBottomLeftRadius: 10000,
    borderBottomRightRadius: 10000,
  },
})
export default Player
