import React, {useState, useEffect} from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView } from 'react-native';
import Home from "./View/Home.js";
import SignInScreen from "./View/Account/SignInScreen/SignInScreen.js";
import SignUpScreen from "./View/Account/SignUpScreen/SignUpScreen.js";
import ConfirmEmailScreen from "./View/Account/ConfirmEmailScreen/ConfirmEmailScreen.js";
import ForgotPasswordScreen from "./View/Account/ForgotPasswordScreen/ForgotPasswordScreen.js";
import NewPasswordScreen from "./View/Account/NewPasswordScreen/NewPasswordScreen.js";
import DeleteAccountScreen from "./View/Account/DeleteAccount/DeleteAccount.js";
import AddTeam from './View/AddTeam.js';
import ViewAllTeams from "./View/ViewAllTeams.js";
import EditTeam from "./View/EditTeam.js";
import Calendar from './View/pages/Calendar'
import CreateGame from "./View/AddGame.js";
import GameScoreScreen from "./View/LiveScore/GameScoreScreen.js";
import ManagerHomeScreen from "./View/Manager/ManagerHomeScreen.js";
//import DisplayTeamScreen from './View/'
import FormStyle from "./Style/Form.style";
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(  
  {  
      HomeScreen: Home,  
      SignIn: SignInScreen,
      SignUp: SignUpScreen,
      ConfirmEmail: ConfirmEmailScreen,
      ForgotPassword: ForgotPasswordScreen,
      NewPassword: NewPasswordScreen,
      DeleteAccount: DeleteAccountScreen,
      TeamReg: AddTeam,
      ViewTeams: ViewAllTeams,
      UpdateTeams: EditTeam,
      ScheduleGame: CreateGame,
      CalendarScreen: Calendar,
      GameScore: GameScoreScreen,
      ManagerHome: ManagerHomeScreen
  },  
  {  
      initialRouteName: "GameScore"  
  }  
); 
const AppContainer = createAppContainer(AppNavigator); 
export default class App extends React.Component{
  render(){
    return < AppContainer/>;
  }
}