
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { ChevronRight, User, Droplets, FlaskConical, Scissors } from 'lucide-react-native';

interface Props {
    name: string;
    duration: string;
    icon: string;
    onPress: () => void;
}

const ServiceItem: React.FC<Props> = ({ name, duration, icon, onPress }) => {
    const getIcon = () => {
        const iconProps = { color: theme.colors.primary, size: 24 };
        switch (icon) {
            case 'User': return <User {...iconProps} />;
            case 'Droplets': return <Droplets {...iconProps} />;
            case 'FlaskConical': return <FlaskConical {...iconProps} />;
            case 'Scissors': return <Scissors {...iconProps} />;
            default: return null;
        }
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.leftContent}>
                <View style={styles.iconContainer}>
                    {getIcon()}
                </View>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.duration}>{duration} session</Text>
                </View>
            </View>
            <ChevronRight color={theme.colors.textMuted} size={20} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.lg + 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'rgba(255, 175, 46, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: theme.spacing.md,
    },
    name: {
        color: theme.colors.text,
        fontSize: 18,
        fontWeight: '600',
    },
    duration: {
        color: theme.colors.textMuted,
        fontSize: 12,
        marginTop: 2,
    }
});

export default ServiceItem;
