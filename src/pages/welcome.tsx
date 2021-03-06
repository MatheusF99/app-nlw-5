import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

import wateringImg from '../../assets/watering.png'

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome() {

  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>

        <Text style={styles.title}>
          Gerencie{'\n'}suas plantas de{'\n'}forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle} >
          Não esqueça mais de regar suas{'\n'}plantas. Nós cuidamos de lembrar você{'\n'}sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
        >
          <Feather
            name={"chevron-right"}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 70

  },

  title: {
    fontSize: 28,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 56,
    height: 56,
  },

  image: {
    height: Dimensions.get("window").width * .7,
  },

  buttonIcon: {
    fontSize: 28,
    color: colors.white
  }
})