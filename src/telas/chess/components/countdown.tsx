import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image} from "react-native";


export class CountDown{
    Secs:number;
    setSecs: any;

    Mins:number;
    setMins: any;

    CustomInterval:number;
    setCustomInterval:any;
        
    setDisabled:any;
    setDisabled2:any;

     StopTimer = () => {
        if (this.CustomInterval) {
            clearInterval(this.CustomInterval)
        }
    }

     startTimer =  () => {
        this.setDisabled(true)
        this.setDisabled2(false)
        this.setCustomInterval(
            setInterval(() => {this.changeTime()
            }, 1000)
        );
    };

     changeTime = () => {
        this.setSecs((prevState:number) => { if (this.Secs - 1 == 0 || prevState === 0) {
            this.setMins((prevState:number) => {
                return prevState - 1;
        });
        return 59
    }
        return prevState - 1
    });
  };    

  constructor(Secs:number, setSecs:any, Mins:number, setMins:any, CustomInterval:number, setCustomInterval:any, setDisabled:any, setDisabled2:any){
    this.Secs = Secs
    this.Mins = Mins
    this.CustomInterval = CustomInterval

    this.setMins = setMins
    this.setSecs= setSecs
    this.setCustomInterval = setCustomInterval

    this.setDisabled = setDisabled
    this.setDisabled2 = setDisabled2
  }
};
   