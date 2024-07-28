import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export function Form() {    
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [testDate, setTestDate] = useState('');

    const handleSubmit = () => {
        if (!name || !age || !testDate) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        // Aqui você pode adicionar a lógica para salvar os dados do formulário
        Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
        // Navega de volta para a tela Home após o envio
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome do Paciente:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Idade:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite a idade"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Data do Teste:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite a data do teste"
                value={testDate}
                onChangeText={setTestDate}
            />

            <TouchableOpacity 
                style={styles.button} 
                onPress={handleSubmit}
            >
                <Icon name="check" size={20} color="#FFF" style={styles.icon} />
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.navigate("Home")}
            >
                <Icon name="arrow-left" size={20} color="#FFF" style={styles.icon} />
                <Text style={styles.buttonText}>Voltar para a página principal</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    button: {
        flexDirection: 'row',  // Para alinhar o texto e o ícone horizontalmente
        backgroundColor: "#29235C",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',  // Para alinhar o texto e o ícone verticalmente
    },
    backButton: {
        flexDirection: 'row',  // Para alinhar o texto e o ícone horizontalmente
        backgroundColor: "#888",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',  // Para alinhar o texto e o ícone verticalmente
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        textAlign: "center",
        marginLeft: 10,  // Espaço entre o ícone e o texto
    },
    icon: {
        marginRight: 10,  // Espaço entre o ícone e o texto
    }
});
