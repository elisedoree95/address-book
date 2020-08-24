import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class ItemContact extends React.Component {
  render() {
    const contactD = this.props.contactD
    console.log(this.props)
    return (
      <View style={styles.main_container}>
        <Image
        style={styles.image}
        source={require('../assets/splash.png')}
        />
     
      <View style={styles.content_container}>
        <View style={styles.header_container}>
          <Text style={styles.title_text}>Name: {contactD.name}</Text>
        </View>
        <View style={styles.header_container}>
          <Text style={styles.vote_text}>Email: {contactD.email}</Text>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>Phone: {contactD.number}</Text>
        </View>
      
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 80,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
    
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 7,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 14
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {  flex: 1
},
date_text: {
  textAlign: 'right',
  fontSize: 10
}
})

export default ItemContact