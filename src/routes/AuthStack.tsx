/* eslint-disable prettier/prettier */
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    LoginScreen,
} from '@screens';

export type AuthStackParamList = {
    LoginScreen: undefined;
    OnboardingScreen: undefined;
  };

export function AuthStack() {
  const { Navigator, Screen } =
    createNativeStackNavigator<AuthStackParamList>();

  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="OnboardingScreen" component={() => null} />
    </Navigator>
  );
}