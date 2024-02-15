import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import BG from '@assets/imgs/Onboarding-3.png'

import { Box, CustomButton, PasswordInput, TextInput } from '@components'

export function LoginScreen() {
  return (
    <Box>
      <ImageBackground
        source={BG}
        style={StyleSheet.absoluteFillObject}
        imageStyle={{ resizeMode: 'cover' }}
        className="flex-1 justify-center px-5 py-10"
      >
        <View className="flex-grow justify-center">
          <Text className="text-3xl font-700 text-white text-left mb-3">
            Faça login e aproveite seu treino
          </Text>

          <Text className="text-base font-regular text-white text-left mb-8">
            Acesse sua conta
          </Text>

          <TextInput placeholder="Nome" />

          <View className="h-5" />

          <PasswordInput placeholder="Senha" />
        </View>

        <View className="pb-7" />

        <CustomButton title="Entrar" />
      </ImageBackground>
    </Box>
  )
}
