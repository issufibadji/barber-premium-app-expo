
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../theme';
import { MoveRight } from 'lucide-react-native';

interface Props {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    icon?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ title, onPress, style, textStyle, icon = true }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.button, style]}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
            {icon && <MoveRight color={theme.colors.background} size={24} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: theme.spacing.md + 4,
        borderRadius: theme.borderRadius.full,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        shadowColor: theme.colors.accent,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 8,
    },
    text: {
        color: theme.colors.background,
        fontSize: theme.typography.body.fontSize + 2,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginRight: theme.spacing.sm,
    }
});

export default PrimaryButton;
