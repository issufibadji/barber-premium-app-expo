
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { Clock } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

interface Props {
    waitTime: number;
}

const QueueTimer: React.FC<Props> = ({ waitTime }) => {
    return (
        <View style={styles.outerContainer}>
            {/* Decorative pulse ring would be here, but let's keep it simple for now */}
            <View style={styles.borderRing}>
                <BlurView intensity={20} tint="dark" style={styles.innerContainer}>
                    <Clock color="rgba(255, 175, 46, 0.4)" size={32} />
                    <View style={styles.timeWrapper}>
                        <Text style={styles.timeText}>{waitTime}</Text>
                        <Text style={styles.unitText}>min</Text>
                    </View>
                    <Text style={styles.label}>Estimated wait</Text>
                </BlurView>
            </View>

            <View style={styles.badge}>
                <Text style={styles.badgeText}>In Line</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        width: 280,
        height: 280,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: theme.spacing.xl,
    },
    borderRing: {
        width: '100%',
        height: '100%',
        borderRadius: 140,
        borderWidth: 8,
        borderColor: theme.colors.surfaceLighter,
        padding: 4,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 140,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(42, 37, 49, 0.4)',
        overflow: 'hidden',
    },
    timeWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    timeText: {
        fontSize: 80,
        fontWeight: '900',
        color: theme.colors.primary,
        letterSpacing: -4,
    },
    unitText: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.textMuted,
        marginLeft: 4,
    },
    label: {
        fontSize: 10,
        fontWeight: '600',
        color: theme.colors.textMuted,
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginTop: 4,
    },
    badge: {
        position: 'absolute',
        top: 40,
        right: 30,
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    badgeText: {
        color: theme.colors.background,
        fontSize: 10,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 1,
    }
});

export default QueueTimer;
