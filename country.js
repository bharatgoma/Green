import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




const Country = ({ navigation }) => {



  return (
    <>
      <View style={styles.container}>


        <View>
          <View>
            <Text style={styles.selectCountry}>Select your country</Text>
          </View>


          <View style={styles.searchCountry}>
            <View >
              <Text style={styles.icon}> <Icon name='search' size={25} /> </Text>
            </View>

            <View style={styles.textarea}>
              <TextInput style={styles.placeholdersize} placeholder='Search by country name...'></TextInput>
            </View>

          </View>

        </View>


        <View>
          <View style={styles.countryheader}>
            <View>
              <Text style={styles.countryheadertext}>Country</Text>
            </View>

            <View>
              <Text style={styles.countryheadertext}>Dial Code</Text>
            </View>

          </View>

          <View>

          </View>


        </View>






      </View>

      <View >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}
            onPress={() => navigation.navigate("About")}
          >PROCEED</Text>
        </TouchableOpacity>
      </View>

    </>
  )
}

export default Country;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 80,

    flexDirection: 'row',
    flexWrap: 'wrap',


  },

  selectCountry: {
    fontSize: 20,
    fontWeight: 'bold',

  },

  searchCountry: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  textarea: {
    marginTop: 15,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    marginLeft: 5,
    width: '90%',

  },

  icon: {
    marginBottom: 5
  },

  placeholdersize: {
    fontSize: 18
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#38A25D',
    padding: 20,
  },


  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },

  countryheader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 40,


  },

  countryheadertext: {
    fontSize: 18,
    fontWeight: 'bold',


  },


});

