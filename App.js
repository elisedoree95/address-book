import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ContactList from "./Components/ContactList";

import DetailsContact from "./Components/DetailsContact";
import { createStackNavigator } from "@react-navigation/stack";
import Formulaire from "./Components/Formulaire";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={ContactList}
            name="liste"
            options={{ title: "Address Book" }}
          />

          <Stack.Screen
            component={DetailsContact}
            name="details"
            options={{ title: "Contact Details" }}
          />
          <Stack.Screen name="formulaire" component={Formulaire} options={{ title: "Contact Form" }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
