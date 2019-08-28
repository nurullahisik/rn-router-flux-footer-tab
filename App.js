/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import ScarletScreen from './app/ScarletScreen';
import GrayScreen from './app/GrayScreen';
import BlackScreen from './app/BlackScreen';
import BlueScreen from './app/BlueScreen';
import GoldScreen from './app/GoldScreen';
import MaizeScreen from './app/MaizeScreen';

import { Router, Scene } from 'react-native-router-flux';
import ModalScreen from './app/ModalScreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  )
}

const App = () => {
  
    return (
      <Router>
        <Scene key="root">

          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#ffffff'}}
            hideNavBar
          >
              <Scene key="osu" title="OSU" icon={TabIcon}>
                    <Scene 
                      key="scarlet"
                      component={ScarletScreen}
                      title="Scarlet"
                      initial
                    />
                    <Scene 
                      key="gray"
                      component={GrayScreen}
                      title="Gray"
                    />
              </Scene>


              <Scene key="um" title="UM" icon={TabIcon}>
                    <Scene 
                      key="blue"
                      component={BlueScreen}
                      title="Blue"
                      initial
                    />
                    <Scene 
                      key="maize"
                      component={MaizeScreen}
                      title="Maize"
                    />
              </Scene>


              <Scene key="vu" title="VU" icon={TabIcon}>
                    <Scene 
                      key="black"
                      component={BlackScreen}
                      title="Black"
                      initial
                    />
                    <Scene 
                      key="gold"
                      component={GoldScreen}
                      title="Gold"
                    />
              </Scene>

          </Scene>


          <Scene

            key="modal"
            component={ModalScreen}
            title="Modal"
            direction="vertical"
            hideNavBar
          />
            


          
        </Scene>
      </Router>
    );
  
}


export default App;