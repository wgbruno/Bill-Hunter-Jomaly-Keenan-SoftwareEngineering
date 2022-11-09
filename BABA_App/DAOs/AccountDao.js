import React from "react";
import { Alert } from "react-native";
import Realm from "realm";

class AccountSchema extends Realm.Object {}
AccountSchema.schema = {
    name: 'Account',
    primaryKey: 'userName',
    properties:{
        userName: 'string',
        email: 'string',
        password: 'string',
        accountType: 'string?',
        verifyCode: 'int'
    }
};

//Creates account in DB, returns 0 on success, 1 on failure or duplicate username
export function createAccount(_userName, _email, _password){
    if(!(findAccount(_userName, false))){
        realm.write(() => {
            const account = realm.create('Account', {
                primaryKey: _userName,
                userName: _userName,
                email: _email,
                password: _password,
                verifyCode: 0
            });
        });
        return 0;
    }
    else{
        return 1;
    }
}

export function findAccount(_userName, verify){
    var account = realm.objectForPrimaryKey("Account", _userName);
    if(verify){
        if(account == undefined){
            return 1;
        }
        else{
            console.log("Found matching account");
            return 0;
        }
    }
    else{
        if(account != undefined){
            return 1;
        }
        else{
            console.log("Unique Username");
            return 0;
        }
    }
}

export function checkPassword(_userName, _password){
    var correctLogin = realm.objectForPrimaryKey('Account', _userName);
    if(correctLogin['password'] == _password){
        return 0
    }
    else{
        return 1;
    }
}

export function addCode(_userName, _code){
    realm.write(() => {
        var acc = realm.objectForPrimaryKey('Account',_userName);
        acc['verifyCode'] = _code;
    })
}

export function checkCode(_userName, _code){
    var acc = realm.objectForPrimaryKey('Account', _userName);
    if(acc['verifyCode'] == _code){
        return 0;
    }
    return 1;
}

export function changePassword(_userName, _password, _newPassword){
    if(!(findAccount(_userName, false))){
        return 1;
    }
    if(checkPassword(_userName, _password)){
        return 2;
    }
    realm.write(() => {
        var account = realm.objectForPrimaryKey('Account',_userName);
        account['password'] = _newPassword;
        return 0;
    })
}


let realm = new Realm({schema: [AccountSchema], schemaVersion: 2});

export default realm;