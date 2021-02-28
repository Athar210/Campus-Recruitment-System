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
<Image
        source={{
          uri: 'https://wallpaperaccess.com/full/557179.jpg',
          height:200,width:"100%"
        }}
      />
      

            <Text style={styles.heading}>
            Welcome to Campus Recruitment System
            </Text>
            <Text></Text>
           <TouchableOpacity onPress={() => navigation.navigate('adminLogin')}  >
               <Text style={styles.btn}>Admin Login
               
               </Text>
           </TouchableOpacity>
            <Text></Text>

            <TouchableOpacity onPress={() => navigation.navigate('companyLogin')}  >
               <Text style={styles.btn}>
               Campany Login          
               </Text>
           </TouchableOpacity>

            <Text></Text>


            <TouchableOpacity onPress={() => navigation.navigate('studentLogin')}  >
               <Text style={styles.btn}>
               Student Login            
               </Text>
           </TouchableOpacity>
     
           <Text style={styles.footer}>Developed by Athar Rasool</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#447379",
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
    footer:
    {
        textAlign:'center',
        color:'#fff',
        marginTop:100,
        
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,  
            elevation: 5
       
    },
    heading:{
        fontSize:28,
        color:'#fff',
        textAlign:'center'
    }
});
