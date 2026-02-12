
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, ClipboardList, Clock, User } from 'lucide-react-native';
import { theme } from '../theme';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import ServicesScreen from '../screens/Services/ServicesScreen';
import QueueScreen from '../screens/Queue/QueueScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.tabBarContainer}>
            <BlurView intensity={80} tint="dark" style={styles.tabBar}>
                {state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const getIcon = (focused: boolean) => {
                        const iconProps = {
                            size: 24,
                            color: focused ? theme.colors.primary : theme.colors.textMuted,
                            fill: focused ? 'rgba(255, 175, 46, 0.2)' : 'none'
                        };
                        switch (route.name) {
                            case 'Home': return <Home {...iconProps} />;
                            case 'Bookings': return <ClipboardList {...iconProps} />;
                            case 'Queue': return <Clock {...iconProps} />;
                            case 'Profile': return <User {...iconProps} />;
                            default: return null;
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={onPress}
                            style={[
                                styles.tabItem,
                                isFocused && styles.tabItemFocused
                            ]}
                        >
                            {getIcon(isFocused)}
                            <Text style={[
                                styles.tabLabel,
                                { color: isFocused ? theme.colors.primary : theme.colors.textMuted }
                            ]}>
                                {route.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </BlurView>
        </View>
    );
};

const MainTabs = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home" component={ServicesScreen} />
            <Tab.Screen name="Bookings" component={View} />
            <Tab.Screen name="Queue" component={QueueScreen} />
            <Tab.Screen name="Profile" component={View} />
        </Tab.Navigator>
    );
};

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Main" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        position: 'absolute',
        bottom: 30,
        left: 24,
        right: 24,
        height: 80,
        borderRadius: 32,
        overflow: 'hidden',
        backgroundColor: 'rgba(42, 37, 49, 0.5)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.05)',
    },
    tabBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 16,
        flex: 1,
    },
    tabItemFocused: {
        backgroundColor: 'rgba(255, 175, 46, 0.08)',
    },
    tabLabel: {
        fontSize: 10,
        fontWeight: '700',
        marginTop: 4,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});
