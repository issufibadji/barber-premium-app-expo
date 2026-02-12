
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { theme } from '../../theme';
import { Menu, Search, Scissors } from 'lucide-react-native';
import ServiceItem from '../../components/ServiceItem';
import { Service } from '../../types';
import { useNavigation } from '@react-navigation/native';

const SERVICES: Service[] = [
    { id: '1', name: 'Classic Shaving', icon: 'User', duration: '20 min' },
    { id: '2', name: 'Hair Washing', icon: 'Droplets', duration: '15 min' },
    { id: '3', name: 'Hair Care', icon: 'FlaskConical', duration: '30 min' },
    { id: '4', name: 'Beard Trimming', icon: 'Scissors', duration: '25 min' },
];

const ServicesScreen: React.FC = () => {
    const navigation = useNavigation<any>();

    const renderHeader = () => (
        <View>
            <header style={styles.header}>
                <TouchableOpacity><Menu color={theme.colors.textMuted} /></TouchableOpacity>
                <TouchableOpacity><Search color={theme.colors.textMuted} /></TouchableOpacity>
            </header>

            <View style={styles.userSection}>
                <View>
                    <Text style={styles.greeting}>Hey, Aaron</Text>
                    <View style={styles.underline} />
                </View>
                <TouchableOpacity style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'https://picsum.photos/seed/aaron/100/100' }}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.sectionTitleContainer}>
                <Scissors color={theme.colors.primary} size={24} />
                <Text style={styles.sectionTitle}>SERVICES</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={SERVICES}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ServiceItem
                        {...item}
                        onPress={() => navigation.navigate('Queue', { serviceId: item.id })}
                    />
                )}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
                ListFooterComponent={() => (
                    <Text style={styles.footerText}>© CRACKS STUDIO</Text>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    listContent: {
        padding: theme.spacing.lg,
        paddingBottom: 100, // Space for custom tab bar
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    userSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    greeting: {
        fontSize: 32,
        fontWeight: '700',
        color: theme.colors.text,
    },
    underline: {
        height: 3,
        backgroundColor: theme.colors.primary,
        width: 60,
        marginTop: 4,
        borderRadius: 2,
    },
    profileContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: 'rgba(255, 175, 46, 0.4)',
        padding: 2,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 22,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: theme.colors.primary,
        letterSpacing: 3,
        marginLeft: 12,
    },
    footerText: {
        textAlign: 'center',
        color: theme.colors.surfaceLighter,
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 2,
        marginTop: 40,
    }
});

export default ServicesScreen;
