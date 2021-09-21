import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    header: {
        textAlign: "center",
        marginVertical: 10,
        fontSize: 20,
    },
    userinput: {
        height: 30,
        marginHorizontal: 30,
        backgroundColor: "lightblue",
        borderRadius: 10,
        marginVertical: 20,
        color: "black",
        paddingLeft: 10
    },
    passwordinput: {
        height: 30,
        marginHorizontal: 30,
        backgroundColor: "lightblue",
        borderRadius: 10,
        color: "black",
        paddingLeft: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        marginHorizontal: 30,
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    register: {
        height: 30,
        width: 70,
        backgroundColor: "lightblue",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    login: {
        height: 30,
        width: 70,
        backgroundColor: "lightblue",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    uyeText: {
        fontSize: 16,
    },
    giristext: {
        fontSize: 16,
    }
})