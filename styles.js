import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "flex-start", 
    borderWidth: 10,
    borderStyle: "ridge",
    borderColor: "blue",
    ...Platform.select({
      ios: {paddingTop: 20} ,
      android: {paddingTop: StatusBar.currentHeight}
    })
  },

  
  box: {
    width: 200,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hotpink",
    margin: 10,
    borderWidth: 5,
    borderStyle: "dotted",
    borderColor: "white"
  },


  anotherbox: {
    width: 150,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    margin: 10,
    borderWidth: 5,
    borderStyle: "dotted",
    borderColor: "white",
  },

});
