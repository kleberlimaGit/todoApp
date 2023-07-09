import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerTaskToDo: {
        flexDirection:"row",
        justifyContent:'space-between',
        width:"100%",
        paddingLeft: 32,
        paddingRight: 32,
        marginBottom:20
      },
      taskContainerTodo:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap:10
      },
      taskCreated: {
        fontWeight:"bold",
        fontSize:20,
        color: "#4EA8DE"
      },
      count: {
        borderRadius:50,
        backgroundColor: "#333333",
        fontSize:16,
        color:"#D9D9D9",
        fontWeight:"bold",
        width:34,
        height:30,
        lineHeight:30,
        textAlign:"center"
      },
      taskDone: {
        fontWeight:"bold",
        fontSize:20,
        color: "#8284FA"
      }

})