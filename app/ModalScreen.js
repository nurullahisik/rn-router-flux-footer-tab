import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Actions } from 'react-native-router-flux';


const ModalScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}
            
            onPress={() => Actions.pop()}
            >
                Modal
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff8200'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    }
});

export default ModalScreen;