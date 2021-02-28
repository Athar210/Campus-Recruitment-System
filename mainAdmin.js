import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import RegisterScreen from './RegisterScreen';
import adminLogin from './adminLogin';
import { auth } from "./firebase";
import mainAdminStudents from './mainAdminStudents'
import mainAdminCompany from './mainAdminCompany'
export default function Login({ navigation }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

   


    return (
        <View style={styles.container}>
           
<StatusBar />
<Text></Text>
<Text></Text>
<Image
        source={{
          uri: 'https://wallpaperaccess.com/full/10042.jpg',
          height:300,width:"100%"
        }}
      />
      
            <Text style={styles.heading}>
                Welcome to Admin Panel
            </Text>
            <Text></Text>
           <TouchableOpacity onPress={() => navigation.navigate('mainAdminStudents')} >
               <Text style={styles.btn}>View Companies Data
               
               </Text>
           </TouchableOpacity>
            <Text></Text>

            <TouchableOpacity onPress={() => navigation.navigate('mainAdminCompany')} >
               <Text style={styles.btn}>
                   View Students Data               
               </Text>
           </TouchableOpacity>

            <Text></Text>


            <TouchableOpacity onPress={() => navigation.navigate('Start')} >
               <Text style={styles.btn}>
               Log Out               
               </Text>
           </TouchableOpacity>
     

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:"#1A3842",
        color:'#fff',
        
    },
    btn:
    {
        fontSize:20,
        backgroundColor:'#fff',
        height:40,
        borderRadius:12,
        width:230,
        textAlign:'center',
        alignItems:"center",
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        textAlignVertical:'center'
    },
    btn2:
    {
        fontSize: 20,
        marginTop: 25, marginLeft: 100,
        backgroundColor: '#94e3bb',
        height: 30,
        width: 150,
        textAlign: 'center', color: '#3f6e5c',
        borderRadius: 11,
    },
    heading:{
        fontSize:28,
        color:'#fff'
    }
});
