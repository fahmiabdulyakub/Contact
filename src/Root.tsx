import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'themes/index';
import {Contact, ContactDetails} from 'screens';
import {StackParams} from 'types/navigationType';

const Stack = createNativeStackNavigator<StackParams>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.SafeAreaView}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Contact">
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ContactDetails"
            component={ContactDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.blue,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
});
