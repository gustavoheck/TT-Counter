import React from 'react'
import {StyleSheet ,TouchableOpacity,Image,} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import arrow from '../../assets/arrow.png'

    export default function Return() {

        const navigation = useNavigation()

        return <>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
            <Image
            source={arrow}
            style={styles.image}
            />
        </TouchableOpacity>
        </>
    };
    const styles = StyleSheet.create ({

        image: {
           width: '100%',  
           height: '95%',
           resizeMode: 'contain'
        },

        button: {
            width: '15%',
            height: '5%',
            position: 'absolute',
            right: '87.5%'
            
        }
    });