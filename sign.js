import React from "react";
import { Text, View ,TouchableOpacity,StyleSheet,Card} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getModeForUsageLocation } from "typescript";


const Sign = () => {



  return (
    <>
      <View style={styles.container}>
              <View>
                  <Text style={styles.greenbox}>Enter your details</Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>*Mandatory fields</Text>

                <View >
                  <TextInput style={styles.form} placeholder="First Name same as valid Gov't ID *"></TextInput>
                  <TextInput style={styles.form} placeholder="Last Name same as valid Gov't ID *"></TextInput>
               
                  <TextInput style={styles.form} placeholder="Email"></TextInput>
                  <TextInput style={styles.form} placeholder="Source of Information*"></TextInput>
                  <TextInput style={styles.form} placeholder="Advisor Type *"></TextInput>
                  <TextInput style={styles.form} placeholder="Address1 *"></TextInput>

                </View>

              </View>

              <View >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}
            onPress={() => navigation.navigate("Sign")}
          >PROCEED</Text>
        </TouchableOpacity>
      </View>
      </View>

     


     
         
    </>
  )
}

export default Sign;

const styles = StyleSheet.create({

  container: {
      width: '100%',
      height: '100%',
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

  greenbox:{
    backgroundColor: '#38A25D',
    padding: 20,
    height: 200,
    color: 'white',
    fontSize: 22,
    fontWeight: '600'
    
  },

  card:{
    borderRadius: 8,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingLeft: 20,
    height: '81.5%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: -100,

  
    
    
  },

  cardTitle:{
    fontStyle: 'italic',
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 30,
    marginLeft: 10,
    color: 'black'
  },

  form:{
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
      width: '90%',
      paddingBottom: 2,
      marginBottom: 10,
      marginLeft: 10,
      fontSize: 18
  },


})