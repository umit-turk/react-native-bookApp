import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECE8E4"
    },
    image: {
        width: 70,
        height: 70,
        marginLeft: 10,

    },
    nameimage: {
        flexDirection: "row",
        marginTop:10,
    },
    namebuton:{
        justifyContent:"space-around",
        marginLeft: 10,
        
    },
    book_name:{
        fontSize:16,
        fontWeight:"bold"
    },
    butongroup: {
    },
    ekle:{
        backgroundColor: "#FFC7A0",
        width:100,
        borderRadius:5,
    },
    favbtn:{
        backgroundColor: "#FFC7A0",
        marginBottom:10,
        width:150,
        borderRadius:5
    },
    textfavori:{
        textAlign:"center",
        color:"white"
    },
    textsepet:{
        textAlign:"center",
        color:"white"
    },
})