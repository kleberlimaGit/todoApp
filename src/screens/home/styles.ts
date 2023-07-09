import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  imgContainer: {
    width: "100%",
    backgroundColor: "#0D0D0D",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: -28,
  },
  taskButtonAdd: {
    backgroundColor: "#1E6F9F",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  inputTask: {
    flex: 1,
    borderColor: "#0D0D0D",
    height: 70,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#262626",
    color: "#808080",
    paddingLeft: 20,
  },
  taskContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35
  },
  scroll: {
    width:'100%',
    paddingLeft:0,
    paddingRight:0
  },
  imgPlus: {
    width: 20,
    height: 20,
  },
});
