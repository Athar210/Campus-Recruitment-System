import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState,useLayoutEffect } from 'react';
import {ScrollView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import {auth} from './firebase';

const RegisterScreen = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    
// useLayoutEffect(()=>{
// NavigationPreloadManager.setOptions({headerBackTitle:'abdj'})
// },[navigation])
    
    const register=()=>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(authUser =>{
            authUser.user.updateProfile({
                displayName:name,
                
            })
        })
        .catch((error)=> alert(error.message));
    }
    
    return (
        /* <KeyboardAvoidingView behavior='padding' style={StyleSheet.container}>
            <Text style={{marginTop:35}}>Create an account</Text>
        
        </KeyboardAvoidingView> */
        <ScrollView style={{backgroundColor:'#5e9ea0'}}>
        <View style={styles.container}>
            <ImageBackground style={{ width: "100%", height: "100%", }} source={{ uri: 'https://i.pinimg.com/736x/50/b6/ea/50b6ea3cd344b170fbd2c069418ad8c9.jpg' }}>
                <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 100, color: 'white' }}>{"Create an account"}</Text>
                <StatusBar style="auto" />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: 'white', borderRadius: 12 }} type='text' value={name} onChangeText={(text) => setName(text)} placeholder={"   Enter Name"} />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: 'white', borderRadius: 12 }} type='text'  value={email} onChangeText={(text) => setEmail(text)} placeholder={"   Enter Email"} />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: 'white', borderRadius: 12 }} type='password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} placeholder={"   Enter Password"} />
                <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign: 'center', marginLeft: 50, backgroundColor: 'white', borderRadius: 12 }} type='text' value={city} onChangeText={(text) => setCity(text)} placeholder={"   Enter City"} onSubmitEditing={register} />

                <TouchableOpacity>
                    <Text style={styles.btn} onPress={register}>Register</Text>
                </TouchableOpacity>

                
            </ImageBackground>
        </View></ScrollView>

    );
};

export default RegisterScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:
    {
        fontSize: 20,
        marginTop: 25, marginLeft: 100,
        backgroundColor: '#94e3bb',
        height: 30,
        width: 150,
        textAlign: 'center', color: '#3f6e5c',
        borderRadius: 11,
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
});
