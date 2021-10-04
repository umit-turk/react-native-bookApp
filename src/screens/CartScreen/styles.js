import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECE8E4"
    },
    image: {
        height: 100,
        width: 100,
    },
    username:{
        marginLeft:20,
        marginTop: 10,
    },
    minusbtn:{
        width: 30,
        height: 30,
        textAlign:"center"
    },
    positivebtn:{
        width: 30,
        height: 30,
        textAlign:"center"
    },
    genel:{
        flexDirection: "row",
        alignItems:"center",
        marginLeft:10,
        marginRight:10,
        marginTop:10,
    },
    nameandbtn:{
        marginLeft:10,
        justifyContent:"space-between"
    },
    book_name:{
        paddingBottom:15,
        fontSize:16,
        fontWeight:"bold"
    },
    removebtn:{
        backgroundColor: "#FFC7A0",
        width:50,
        borderRadius:5,
    },
    textbtn:{
        textAlign:"center",
        color:"white"
    },
    positivetext:{fontSize: 30, textAlign:"center"},
    minustext:{fontSize: 30, textAlign:"center"},
    btngroup:{
        marginLeft:"auto",
        alignItems:"center",
    },
    positivebtn:{
        backgroundColor:"#FFC7A0",
        textAlignVertical:"center",
        width:60,
        borderRadius:10,
    },
    minusbtn:{
        backgroundColor:"#FFC7A0",
        width:60,
        borderRadius:10,
    },
    adettext:{
        fontSize:16,
        fontWeight:"bold"
    }
})
