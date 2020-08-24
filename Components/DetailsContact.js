import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import data from "../Contacts/dataContacts";

const DetailsContact = (props) => {
  const monContact = data.find((c) => c.id === props.route.params.id);
  console.log({ monContact });
  return (
    <View style={styles.main_container}>
      <View>
        <Image style={styles.image} source={require("../assets/stock_contact.jpg")} />
      </View>

      <View style={styles.content_container}>
        <View style={styles.header_container}>
          <Text style={styles.title_text}>{monContact.name}</Text>
        </View>
        <View style={styles.header_container}>
          <Text style={styles.vote_text}>{monContact.email}</Text>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>
            {monContact.number}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "#394263",
    height: 400,
    borderStyle: "solid",
    borderColor: "#ddd",
  },
  image: {
    width: 200,
    height: 160,
    margin: 15,
    backgroundColor: "gray",
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: "row",
    paddingBottom: 6,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 7,
    textAlign: "center",
    flexWrap: "wrap",
    paddingRight: 5,
    color: "#fff"
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    color: "#fff"
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: "italic",
    color: "#fff",
    textAlign: "center",
  },
  date_container: { flex: 1 },
  date_text: {
    textAlign: "right",
    fontSize: 10,
  },
});

export default DetailsContact;
