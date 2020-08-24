import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;
const ModeleContact = t.struct({
  name: t.String,
  email: t.maybe(t.String),
  phone: t.Number,
});

const processForm = () => {
    
}

const Formulaire = () => {
  return (
    <View style={styles.container}>
      <Form type={ModeleContact} />
      <Button
        style={{backgroundColor: "#394263"}}
          title="Save Contact"
          onPress={processForm}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
  });

export default Formulaire;
