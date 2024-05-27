import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../hooks/useStorage.js";
import { Ionicons } from '@expo/vector-icons';

export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

    const handleCopyPassword = async () => {
        await Clipboard.setStringAsync(password);
        alert("Senha copiada!");
    }

    const handleSavePassword = async () => {
        await saveItem("@pass", password);
        alert("Senha salva!");
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                    <Ionicons name="copy" size={20} color="#FFF" />
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity onPress={handleClose} style={[styles.button, styles.buttonBack]}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSavePassword} style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: "#0E0E0E",
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 14,
        borderRadius: 8
    },
    text: {
        color: "#FFF",
        textAlign: "center",
        flex: 1,
    },
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
    }, 
    button: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    }, 
    buttonSave: {
        backgroundColor: "#392DE9",
        borderRadius: 8,
    },
    buttonSaveText: {
        color: "#FFF",
        fontWeight: "bold"
    },
    buttonBack: {
        borderColor: "#392DE9",
        borderWidth: 1,
        borderRadius: 8
    },
    buttonText: {
        color: "#392DE9",
        fontWeight: "bold"
    }
});
