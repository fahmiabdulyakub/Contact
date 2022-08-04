import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'themes/index';
import {Contact, ContactDetails} from 'screens';
import {StackParams} from 'types/navigationType';
import {Provider} from 'react-redux';
import store from 'store';

const Stack = createNativeStackNavigator<StackParams>();

export const Routes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar
            backgroundColor={Colors.background}
            barStyle="dark-content"
          />
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
    </Provider>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
