import React from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import DetailsContact from './DetailsContact'
import { CommonActions } from '@react-navigation/native';

const Contact = ({contactD, navigation}) => {
  
  const goToDetails = () => {
    navigation.navigate('details', {id: contactD.id})

  }
  return (
    <TouchableOpacity
      onPress={goToDetails}
    >
      <View style={styles.main_container}>
        <Image style={styles.image} source={require("../assets/stock_contact.jpg")} />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{contactD.name}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.vote_text}>{contactD.email}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>
              {contactD.number}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#394263",
  },
  image: {
    width: 100,
    height: 80,
    margin: 5,
    backgroundColor: "gray",
  },
  content_container: {
    
    flexDirection: "column",
    margin: 5,
  },
  header_container: {
   
    flexDirection: "row",
    paddingBottom: 6,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 16,
    
    flexWrap: "wrap",
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 14,
  },
  description_container: {
    
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
  },
  date_container: { flex: 1 },
  date_text: {
    textAlign: "right",
    fontSize: 10,
  },
});

export default Contact;
