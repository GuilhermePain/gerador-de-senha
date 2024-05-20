import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import useStorage from '../../hooks/useStorage';

export function Passwords(){

    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem } = useStorage();

    useEffect(() => {
        const loadPasswords = async () => {
            const passwords = await getItem("@pass");
            console.log(passwords);
        }

        loadPasswords();

    }, [focused]);

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Minhas senhas
                </Text>
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
    }
});