
import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { Check } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    name: string;
    image: string;
    isSelected: boolean;
    onSelect: () => void;
}

const StyleOption: React.FC<Props> = ({ name, image, isSelected, onSelect }) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                isSelected && styles.selectedContainer
            ]}
            onPress={onSelect}
            activeOpacity={0.9}
        >
            <Image source={{ uri: image }} style={styles.image} />

            <LinearGradient
                colors={['transparent', 'rgba(26, 22, 31, 1)']}
                style={styles.gradient}
            />

            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
            </View>

            {isSelected && (
                <View style={styles.checkContainer}>
                    <Check color={theme.colors.background} size={14} strokeWidth={4} />
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        aspectRatio: 3 / 4,
        borderRadius: theme.borderRadius.xl,
        overflow: 'hidden',
        backgroundColor: theme.colors.surface,
    },
    selectedContainer: {
        borderWidth: 3,
        borderColor: theme.colors.primary,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '60%',
    },
    content: {
        position: 'absolute',
        bottom: 12,
        left: 12,
    },
    name: {
        color: theme.colors.text,
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    checkContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: theme.colors.primary,
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    }
});

export default StyleOption;
