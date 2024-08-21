import React from "react";
import { View, Text } from "react-native";

import { stylesViews } from "../styles/views";
import { styleDetails } from "../styles/details";

export default function Details (){
return <>
    <Text style={styleDetails.Title}>Uno</Text>

    <View style= {styleDetails.MidVerticalLine}
    />

    <View style= {{
        borderBottomWidth: 4,
        borderBottomColor: 'black',
        position: "absolute",
        alignSelf: 'center',
        top: '5.5%',
        width: '100%',
    }}
    />
    <View style= {{
        borderBottomWidth: 4,
        borderBottomColor: 'black',
        position: "absolute",
        alignSelf: 'center',
        top: '46.5%',
        width: '100%',
    }}
    />
    <View style= {{
        borderBottomWidth: 4,
        borderBottomColor: 'black',
        position: "absolute",
        alignSelf: 'center',
        top: '53.5%',
        width: '100%',
    }}
    />

    <View style={stylesViews.topRightSide}>
        <Text style={styleDetails.Texts}>Wins</Text>
    </View>

    <View style={stylesViews.topLeftSide}>
    <Text style={styleDetails.Texts}>Wins</Text>
    </View>

    <View style={stylesViews.bottomRightSide}>
        <Text style={styleDetails.Texts}>Loses</Text>
    </View>

    <View style={stylesViews.bottomLeftSide}>
    <Text style={styleDetails.Texts}>Loses</Text>
    </View>

</>
};