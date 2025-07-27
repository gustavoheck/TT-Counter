import { StyleSheet } from "react-native";

export const DSeisStyles = StyleSheet.create ({
    button: {
        overflow: 'hidden',
        position: 'absolute',
        height: '35%',
        width: '70%',
        alignSelf: 'center'
    },
    image: {
        height: '80%',
        width: '100%',
        transform: [{ scale: 1}],
        flex: 1,
        alignSelf: 'center'
    }
});