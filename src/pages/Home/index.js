import { StyleSheet, Text, View } from "react-native";    

import { useNavigation } from "@react-navigation/native";

export function Home() {    
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate("Form")}>
            Go to Form
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});