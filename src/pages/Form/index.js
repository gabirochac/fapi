import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function Form() {    
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [aage, setAage] = useState('');
    const [testDate, setTestDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const colorScheme = useColorScheme();  // Detecta o tema atual (claro ou escuro)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setTestDate(date.toLocaleDateString());
        hideDatePicker();
    };

    const handleSubmit = () => {
        if (!aage || !email || !name || !age || !testDate) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        // Aqui você pode adicionar a lógica para salvar os dados do formulário
        Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
        // Navega de volta para a tela Home após o envio
        navigation.navigate("Home");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite um email válido"
                    value={email}
                    onChangeText={setEmail}
                />
                
                <Text style={styles.h2}>IDENTIFICAÇÃO DA CRIANÇA</Text>

                <Text style={styles.label}>Iniciais do Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.label}>Data de nascimento</Text>
                <TouchableOpacity onPress={showDatePicker} style={styles.input}>
                    <Text style={styles.placeholder}>{testDate || "Selecione a data de nascimento"}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    themeVariant={colorScheme}  // Define o tema (claro ou escuro) do seletor de data
                />

                <Text style={styles.label}>Idade:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a idade (anos e meses)"
                    value={age}
                    onChangeText={setAge}
                />

                <Text style={styles.label}>Idade auditiva</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a idade auditiva (anos e meses)"
                    value={aage}
                    onChangeText={setAage}
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
        </TouchableWithoutFeedback>
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
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
        color: "#29235C",
        textDecorationLine: 'underline',
    },
    h3: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
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
    },
    placeholder: {
        color: '#C3C3C3',
    },
});
