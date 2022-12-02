import React, { useEffect, useState } from "react";
import { NavigationContainer } from 'react-native';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, FlatList } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'
import { getFreeAgents } from "../../DAOs/PlayerDao";


export default function FreeAgentScreen({navigation}){
    const {height} = useWindowDimensions();
    const [players, setPlayers] = useState(getFreeAgents());
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
        console.log(players);
        if(players != undefined){
            setEmpty(false);
        }
    })

    const noFreeAgents = () => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 25, textAlign: 'center', color: 'darkblue'}}>
                    There are no available free agents.
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.root}>
        <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
        />
        <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkblue', fontSize: 20}}>Free Agents</Text>
        {empty ? noFreeAgents():
            <FlatList
                data={players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('SendTeamRequest', {
                                paramFirstName: item.firstName,
                                paramLastName: item.lastName,
                                paramAge: item.age,
                                paramNumber: item.number,
                                paramHeight: item.height
                            });}}>
                            <Text>{item.firstName}      {item.lastName}</Text>
                            <Text>{item.height}      {item.age}</Text>
                        </TouchableOpacity>
                    </View>
                } />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 10,
    },
    logo: {
      width: '3000%',
      maxWidth: 200,
      maxHeight: 150,
    },
  });