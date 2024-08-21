import React from 'react'
import {StyleSheet ,TouchableOpacity,Image,} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import arrowWhite from '../../assets/arrowWhite.png'

    export default function WhiteReturn() {

        const navigation = useNavigation()

        return <>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
            <Image
            source={arrowWhite}
            style={styles.image}
            />
        </TouchableOpacity>
        </>
    };
    const styles = StyleSheet.create ({

        image: {
           width: '100%',  
           height: '80%',
           resizeMode: 'contain'
        },

        button: {
            width: '15%',
            height: '5%',
            position: 'absolute',
            right: '87.5%'
            
        }
    });