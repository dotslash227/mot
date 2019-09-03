import React from 'react';
import firebase from 'react-native-firebase';

export async function createUser(email, password){
    try{
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return response
    }
    catch(e){
        console.log(e);
        return e;
    }
}

export async function updateUser(user, data){
    try{        
        const response = await user.updateProfile({
            displayName: data.name
        })              
        return response;
    }
    catch(e){
        console.log(e);
        return e;
    }
}

export async function createProfile(user, data){
    try{
        record = {
            uid: user.uid,
            businessName: data.businessName,
            mobile: data.phone,
            tags: data.tags,
            businessAddress: data.businessAddress,
            businessDescription: data.businessDescription
        }
        const response = await firebase.firestore().collection("userProfile").add(record)
        return response;
    }
    catch(e){
        console.log(e);
        return e;
    }
}

export async function loginUser(email, password){
    try{
        const response = await firebase.auth().signInWithEmailAndPassword(email, password)
        return response;
    }
    catch(e){
        console.log(e);
        return e;
    }
}