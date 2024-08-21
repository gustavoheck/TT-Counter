import React from "react";
import { StyleSheet } from "react-native";

export const stylesViews = StyleSheet.create ({
    topSideBackground:{
     flex: 1,
     backgroundColor: '#1945DA'},

    bottomSideBackground:{
     flex: 1,   
     backgroundColor: '#FF0000',
     bottom: '0%' },

    topLeftSide:{
        height: '50%',
        width: '50%',
        position: 'absolute'
    },

    topRightSide:{
        height: '50%',
        width: '50%',
        position: 'absolute',
        right: '0%'
    },
   
    bottomLeftSide:{
        height: '50%',
        width: '50%',
        position: 'absolute',
        bottom: '0%'
    },
    bottomRightSide:{
        height: '50%',
        width: '50%',
        position: 'absolute',
        bottom: '0%',
        right: '0%',
    }
});