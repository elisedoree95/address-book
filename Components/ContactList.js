import React from 'react'
import { StyleSheet, TouchableOpacity, FlatList, View, Text, Image } from "react-native";
import Contact from './Contact';
import data from "../Contacts/dataContacts";

const contacts = data
const ContactList = ({navigation}) => {
    
    const goToForm = () => navigation.navigate('formulaire')
    return (
        <>
        <FlatList
            data={contacts}
            renderItem={({item}) => <Contact key={item.id.toString()} contactD={item} navigation={navigation} />}
        />
        <TouchableOpacity onPress = {goToForm}>
            <View style = {{backgroundColor: "#394263", alignItems: 'center', 
                    justifyContent: 'center', borderRadius:15,width:100,height: 50, 
                    marginBottom:20,marginLeft:300}}
            >
             
            <Text style = {{color: 'white'}}>New Contact</Text>
            </View>
        </TouchableOpacity>
        </>
        
    )
}

export default ContactList
