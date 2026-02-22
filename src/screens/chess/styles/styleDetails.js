import { StyleSheet } from "react-native";

export const styleDetails = StyleSheet.create({
    titleImage: {
        position: 'absolute',
        alignSelf: 'center',
        transform: [{ scale: 0.6 }],
    },
    horizontalDivider: {
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        top: '47.5%',
        width: '100%',
    },
});