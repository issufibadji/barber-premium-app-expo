
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { theme } from '../../theme';
import { Menu, Bell } from 'lucide-react-native';
import QueueTimer from '../../components/QueueTimer';
import StyleOption from '../../components/StyleOption';
import { StyleOption as StyleType } from '../../types';

const STYLES: StyleType[] = [
    { id: '1', name: 'Buzz Cut', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=400&h=500&auto=format&fit=crop' },
    { id: '2', name: 'Pompadour', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=400&h=500&auto=format&fit=crop' },
    { id: '3', name: 'Beard Full', image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=400&h=500&auto=format&fit=crop' },
    { id: '4', name: 'Fade Cut', image: 'https://images.unsplash.com/photo-1621605815841-2cd61169a193?q=80&w=400&h=500&auto=format&fit=crop' },
    { id: '5', name: 'Long Hair', image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=400&h=500&auto=format&fit=crop' },
    { id: '6', name: 'Mustache', image: 'https://images.unsplash.com/photo-1503910368127-b459c72b45ce?q=80&w=400&h=500&auto=format&fit=crop' },
];

const QueueScreen: React.FC = () => {
    const [selectedStyle, setSelectedStyle] = useState('2');
    const [waitTime, setWaitTime] = useState(12);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <header style={styles.header}>
                    <TouchableOpacity><Menu color={theme.colors.textMuted} /></TouchableOpacity>
                    <TouchableOpacity style={styles.bellButton}>
                        <Bell color={theme.colors.textMuted} />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </header>

                <View style={styles.titleSection}>
                    <Text style={styles.title}>Your Status</Text>
                    <View style={styles.underline} />
                </View>

                <QueueTimer waitTime={waitTime} />

                <View style={styles.selectionHeader}>
                    <View style={styles.checkIcon}>
                        <Text style={{ color: theme.colors.primary, fontWeight: '900' }}>✓</Text>
                    </View>
                    <Text style={styles.selectionTitle}>Confirm your style</Text>
                </View>

                <View style={styles.grid}>
                    {STYLES.map((style) => (
                        <View key={style.id} style={styles.gridItem}>
                            <StyleOption
                                {...style}
                                isSelected={selectedStyle === style.id}
                                onSelect={() => setSelectedStyle(style.id)}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    scrollContent: {
        padding: theme.spacing.lg,
        paddingBottom: 120,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    bellButton: {
        position: 'relative',
    },
    notificationDot: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.primary,
        borderWidth: 2,
        borderColor: theme.colors.background,
    },
    titleSection: {
        marginBottom: 24,
    },
    title: {
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
    selectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    checkIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 175, 46, 0.15)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.text,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -8,
    },
    gridItem: {
        width: '50%',
        padding: 8,
    }
});

export default QueueScreen;
