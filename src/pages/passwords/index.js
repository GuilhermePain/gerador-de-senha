import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/useStorage.js';
import { PasswordItem } from './components/passwordItem.js';

export function Passwords(){

    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        const loadPasswords = async () => {
            const passwords = await getItem("@pass");
            setListPasswords(passwords);
        }

        loadPasswords();

    }, [focused]);

    const handleDeletePassword = async (item) => {
        const passwords = await removeItem("@pass", item);
        alert("Senha excluída!");
        setListPasswords(passwords);
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Minhas senhas
                </Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPasswords}
                    keyExtractor={ (item) => String(item) }
                    renderItem={ ({ item }) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item) } />}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392DE9",
        paddingTop: 58,
        paddingRight: 14,
        paddingBottom: 14,
        paddingLeft: 14
    },
    title: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

    }
});