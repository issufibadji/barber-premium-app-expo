
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { Menu, Search, Scissors, Sparkles } from 'lucide-react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const WelcomeScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            {/* Background with Gradient/Image would be ideal, but for now manual colored views to mock artifacts if image fails */}
            <View style={styles.backgroundOrb1} />
            <View style={styles.backgroundOrb2} />

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>
                    <header style={styles.header}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Menu color={theme.colors.primary} size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Search color={theme.colors.primary} size={24} />
                        </TouchableOpacity>
                    </header>

                    <View style={styles.mainContent}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleRegular}>BARBER</Text>
                            <Text style={styles.titleAccent}>SHOP</Text>
                            <Text style={styles.subtitle}>OLD SCHOOL STYLE</Text>
                        </View>

                        <View style={styles.illustrationContainer}>
                            <View style={styles.illustrationCircle}>
                                {/* Mock image - in real app, use local asset */}
                                <ImageBackground
                                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArjhJrkTYrty5HSLViqGrIgUbHZ3FN9g3eAAMd1BgzJfK8PSZK9xQaDEInQDbpj5r4pJ4iceNWFWFVEzu3V3J-8QmMRwLDit_CCd6xb4FjCvzH3qpf8a8YDkaRExrQbeYCnrgjzfTRx7FqZQUuDYduRuXYMfoTEJCahQkDKNXdaB2M9M_mXD51YeVOutw4IXQXr75cyecLLnn3-dxyzXYW6H7kPBTmYAqhBHe0QCdl5vwu1kzrgERm3VKMcLA5wqLywR8HGKBb9g' }}
                                    style={styles.illustrationImage}
                                    imageStyle={{ borderRadius: 150 }}
                                />
                            </View>

                            <View style={styles.floatingIcon1}>
                                <Scissors color={theme.colors.background} size={28} />
                            </View>
                            <View style={styles.floatingIcon2}>
                                <Sparkles color={theme.colors.primary} size={32} />
                            </View>
                        </View>

                        <View style={styles.bottomDescription}>
                            <Text style={styles.descriptionText}>
                                Experience the ultimate grooming ritual in a space where tradition meets modern luxury.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <PrimaryButton
                            title="Get a stylist now"
                            onPress={() => navigation.navigate('Main')}
                        />
                        <View style={styles.homeIndicator} />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    safeArea: {
        flex: 1,
    },
    backgroundOrb1: {
        position: 'absolute',
        bottom: -80,
        right: -80,
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: 'rgba(255, 175, 46, 0.05)',
    },
    backgroundOrb2: {
        position: 'absolute',
        top: 80,
        left: -80,
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgba(255, 175, 46, 0.03)',
    },
    content: {
        flex: 1,
        padding: theme.spacing.lg,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    iconButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    titleRegular: {
        fontSize: 54,
        fontWeight: '900',
        color: theme.colors.text,
        lineHeight: 54,
    },
    titleAccent: {
        fontSize: 54,
        fontWeight: '900',
        color: theme.colors.primary,
        fontStyle: 'italic',
        lineHeight: 54,
    },
    subtitle: {
        marginTop: 8,
        color: theme.colors.primary,
        opacity: 0.8,
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 4,
        textTransform: 'uppercase',
    },
    illustrationContainer: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    illustrationCircle: {
        width: 260,
        height: 260,
        borderRadius: 130,
        borderWidth: 10,
        borderColor: 'rgba(255, 175, 46, 0.1)',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        elevation: 20,
    },
    illustrationImage: {
        width: '100%',
        height: '100%',
    },
    floatingIcon1: {
        position: 'absolute',
        top: 0,
        right: 20,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: theme.colors.background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    floatingIcon2: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 175, 46, 0.3)',
    },
    bottomDescription: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    descriptionText: {
        color: theme.colors.textMuted,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 22,
        fontWeight: '500',
    },
    footer: {
        marginTop: 'auto',
    },
    homeIndicator: {
        width: 130,
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 3,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 10,
    }
});

export default WelcomeScreen;
