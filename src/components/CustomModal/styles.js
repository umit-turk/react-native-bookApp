import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    icon: {
      fontSize: 50,
      color: 'green',
    },
    iconField: {
      alignItems: 'center',
      width: 80,
      height: 80,
      backgroundColor: 'blue',
      justifyContent: 'center',
      borderRadius: 40,
      marginTop: 60,
    },
    logoArrange: {
      alignItems: 'center',
    },
    header: {
      marginTop: 20,
      fontSize: 20,
      textAlign: 'center',
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
    },
    hizligiris: {
        height: 50,
        backgroundColor:"#FFC7A0",
        justifyContent: "center",
        marginBottom: 20,
        marginHorizontal:15,
        borderRadius: 10,
    },
    hizlitext:{
  color:"#F6906C",
  fontSize: 16,
  textAlign: "center",
    },
    kayittext:{
        color:"white",
        fontSize: 16,
        textAlign: "center"
    },
    kayitol:{
        height: 50,
        backgroundColor: "#F6906C",
        justifyContent:"center",
        marginHorizontal: 15,
        borderRadius: 10,
    }
  });