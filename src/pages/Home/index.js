import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";    

import { useNavigation } from "@react-navigation/native";

export function Home() {    
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <Text style={styles.subtitle}>
                Para criar um novo teste, clique no botão abaixo.
            </Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate("Form")}
            >
                <Text style={styles.buttonText}>Iniciar novo teste</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,  
    },
    subtitle: {
        fontSize: 20,
        color: "#888",
        textAlign: "center",
        margin: 20,
        fontStyle: "italic",
      },
      button: {
        backgroundColor: "#29235C",
        padding: 10,
        width: 200,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        textAlign: "center",
    }
});