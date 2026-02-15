import { StyleSheet } from "react-native";

export const DiceButtonStyles = StyleSheet.create ({
    image: {
        height: '100%',
        width: '100%', 
        transform: [{ scale: 1}],
        alignItems: 'center',
        flex: 1,
        
    },
    number: {
        position: 'absolute',
        textAlign: 'center',
        textAlignVertical: 'center',
        top: '40%',
        fontSize: 55,
        color: 'black',
        fontFamily: "04B_30__"
    }
});
