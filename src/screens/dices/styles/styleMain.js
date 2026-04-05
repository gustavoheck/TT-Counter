import { StyleSheet } from "react-native";

export const styleMain = StyleSheet.create ({
    mainContainer: {
        backgroundColor: "grey", 
        height: "100%"
    },
    centralizerContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    dicesContainer: {
        flexDirection: "column",
        justifyContent: "space-between", 
        height: "90%",
    },
    topDicesContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    },
    d6Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    bottomDicesContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    }
});
