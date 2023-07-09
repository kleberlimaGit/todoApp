import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor:"#262626",
        height:85,
        borderRadius:8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        gap:7
    },
    pad: {
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 10
    },
    text: {
        flex: 1,
        fontSize:18,
        color:"#F2F2F2"
    },
    textActive: {
        flex: 1,
        fontSize:18,
        color:"#F2F2F2",
        textDecorationLine: 'line-through'
    },
    icon:{
        width:34,
        height:34
    },
    iconTrash: {
        width:50,
        height:50
    }
})