import React from "react";
import { Text, View, TouchableOpacity, Image, Alert, StyleSheet } from "react-native";
import { useState } from "react";

import coroa1 from '../images/coroa1.png'
import coroa2 from '../images/coroa2.png'
import coroa3 from '../images/coroa3.png'

import { stylesBlue } from "../styles/blue";
import { stylesGreen } from "../styles/green";
import { stylesRed } from "../styles/red";
import { stylesYellow } from "../styles/yellow";

import { stylesViews } from "../styles/views";
import { otherDetails } from "../styles/otherDetails";

export default function FourPlayers (){

    const [points, setPoints] = useState({
        Blue: [0, 0, 0],
        Green: [0, 0, 0],
        Red: [0, 0, 0],
        Yellow: [0, 0, 0],
      });

      const incrementPoints = (color, index) => {
        setPoints((prevPoints) => {
          const newPoints = { ...prevPoints };
          newPoints[color] = [...newPoints[color]];
          newPoints[color][index] += 1;
          return newPoints;
        });
      };

      const resetWins = () =>
        Alert.alert('Reset Wins', 'You really want to reset all the wins?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
                {text: 'Reset', onPress: () => setPoints({
                Blue: [0, 0, 0],
                Green: [0, 0, 0],
                Red: [0, 0, 0],
                Yellow: [0, 0, 0],
          })
        },
    ]);

    return <>
    <Background/>

  <View style={stylesViews.blue}>

    <TouchableOpacity style={stylesBlue.blue1rbutton} onPress={() => incrementPoints("Blue", 0)}>
        <Image 
        source={coroa1}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesBlue.points}>{points.Blue[0]}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stylesBlue.blue2rbutton}onPress={() => incrementPoints("Blue", 1)}>
        <Image 
        source={coroa2}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesBlue.points2r}>{points.Blue[1]}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stylesBlue.blue3rbutton}  onPress={() => incrementPoints("Blue", 2)}>
        <Image 
        source={coroa3}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesBlue.points3r}>{points.Blue[2]}</Text>
    </TouchableOpacity>
  </View>

  <View style={stylesViews.green}>

    <TouchableOpacity style={stylesGreen.green1rbutton}  onPress={() => incrementPoints("Green", 0)}>
        
        <Image 
        source={coroa1}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesGreen.points}>{points.Green[0]}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stylesGreen.green2rbutton}  onPress={() => incrementPoints("Green", 1)}>
        <Image 
        source={coroa2}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesGreen.points2r}>{points.Green[1]}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stylesGreen.green3rbutton}  onPress={() => incrementPoints("Green", 2)}>
        <Image 
        source={coroa3}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesGreen.points3r}>{points.Green[2]}</Text>
    </TouchableOpacity>
  </View>

  <View style={stylesViews.red}>

    <TouchableOpacity style={stylesRed.red1rbutton}  onPress={() => incrementPoints("Red", 0)}>
        <Image 
        source={coroa1}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesRed.points}>{points.Red[0]}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stylesRed.red2rbutton}  onPress={() => incrementPoints("Red", 1)}>
        <Image 
        source={coroa2}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesRed.points2r}>{points.Red[1]}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stylesRed.red3rbutton}  onPress={() => incrementPoints("Red", 2)}>
        <Image 
        source={coroa3}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesRed.points3r}>{points.Red[2]}</Text>
    </TouchableOpacity>
  </View>

  <View style={stylesViews.yellow}>

    <TouchableOpacity style={stylesYellow.yellow1rbutton}  onPress={() => incrementPoints("Yellow", 0)}>
        <Image 
        source={coroa1}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesYellow.points}>{points.Yellow[0]}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stylesYellow.yellow2rbutton}  onPress={() => incrementPoints("Yellow", 1)}>
        <Image 
        source={coroa2}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesYellow.points2r}>{points.Yellow[1]}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stylesYellow.yellow3rbutton}  onPress={() => incrementPoints("Yellow", 2)}>
        <Image 
        source={coroa3}
        style={{width: 100, height: 100,}}
        />
        <Text style={stylesYellow.points3r}>{points.Yellow[2]}</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={resetWins} style={otherDetails.resetButton}><Text style={otherDetails.resetText}>Reset Wins</Text></TouchableOpacity>
    </View>
    </>
};

export function Background (){
    return <>
<View style= {{flex: 1, flexDirection: 'row'}}>
    <View style= {{flex: 1, flexDirection: 'collumn'}}>
        <View style={{flex: 1, backgroundColor: '#1945DA'}}>
        </View>
    
        <View style={{flex: 1, backgroundColor: '#FF0000'}}>
    </View>
    </View>

    <View style= {{flex: 1, flexDirection: 'collumn'}}>
        <View style={{flex: 1, backgroundColor: '#3EBA00'}}>
    </View>

        <View style={{flex: 1, backgroundColor: '#F3EF18'}}>
    </View>
    </View>
</View>
    </>
};
