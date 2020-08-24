// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text,Alert } from 'react-native'
import { SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import contact from '../Contacts/dataContacts'
import ItemContact from './ItemContact'
import NativeForms from 'native-forms'

class Search extends React.Component {

    refresh = () => {
        this.setState({ refreshing: true, items: [] });
        setTimeout(() => this.setState({ refreshing: false, items: this.genItems() }), 1500);
      };

      renderItem = ({ item }) => {
        const text = `${item}`;
        return (
          <TouchableOpacity onPress={() => alert("pressed!")}>
            <Text style={{ width: "100%", height: 48, backgroundColor: "white" }}>
              {text}
            </Text>
            <View style={{ width: "100%", height: 1, backgroundColor: "gray" }} />
          </TouchableOpacity>
        );
      };
    data = [
        {
           id:181808,
           name:"Mayewoue teguia",
           email:"elisemayewouedoree@gmail.com", 
           number:6585647888,
         
        },
        {
          id:181801,
          name:"Mayewoue teguia",
          email:"elisemayewouedoree@gmail.com",
          number:6585647888,
        
       },
       {
          id:181848,
          name:"Mayewoue teguia",
          email:"elisemayewouedoree@gmail.com",
          number:6585647888,
        
       },
       {
          id:181818,
          name:"Mayewoue teguia",
          email:"elisemayewouedoree@gmail.com",
          number:6585647888,
        
       },
       {
          id:181805,
          name:"Mayewoue teguia",
          email:"elisemayewouedoree@gmail.com",
          number:658564788,
        
       },
       {
        id:181845,
        name:"Mayewoue teguia",
        email:"elisemayewouedoree@gmail.com",
        number:6585647888,
      
     },
     {
        id:181878,
        name:"Mayewoue teguia",
        email:"elisemayewouedoree@gmail.com",
        number:6585647888,
      
     }
     ]
     
    state= {showForm: false}


 InscriptionScreen = () => {
        const { register, handleSubmit, setValue } = useForm();
        const onSubmit = useCallback(formData => {
          console.log(formData);
        }, []);
        const onChangeField = useCallback(
          name => text => {
            setValue(name, text);
          },
          []
        );
      
        useEffect(() => {
          register('email');
          register('password');
        }, [register]);
      
        return (
          <View>
            <TextInput
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="Email"
              onChangeText={onChangeField('email')}
            />
            <TextInput
              secureTextEntry
              autoCompleteType="password"
              placeholder="Password"
              onChangeText={onChangeField('password')}
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </View>
        );
      };
  renderSeparator = () => {  
    return (  
        <View  
            style={{  
                height: 10,  
                width: "100%",  
                backgroundColor: "#ff0010",  
            }}  
        />  
    );  
};  
//handling onPress action  
getListViewItem = (item) => {  
    Alert.alert(item.name);  
   
}  

render() {  
    return ( 
         
        <View style={styles.container}>  
            <FlatList style={{ flex: 1, backgroundColor: "#1dqa", borderColor: "red", borderWidth: 5 }} 
                data={this.data}  
                renderItem={({item}) => <ItemContact contactD={item}/>}
                ItemSeparatorComponent={this.renderSeparator}
                 
            />  
        <TouchableOpacity onPress = {() => { this.setState({showForm: true})}}>
    <View style = {{backgroundColor: 'red', alignItems: 'center', 
                    justifyContent: 'center', borderRadius:15,width:100,height: 50, 
                    marginBottom:20,marginLeft:300}}
           >
             
        <Text style = {{color: 'white'}}>Add</Text>
    </View>
</TouchableOpacity>
<View style={styles.container}>
      <Text>Email:</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
        </View>  
    );  
}  
}  

const styles = StyleSheet.create({  
container: {  
    flex: 1,  
},  
item: {  
    marginTop:10,
    marginLeft:15,
    padding: 10,  
    fontSize: 18,  
    height: 44,  
},  
})  



export default Search