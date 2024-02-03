import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { Background } from '../../components/Header/Background';
import { ProfileContent } from '../../components/ProfileContent';
import { GreenLargeButton } from '../../components/GreenLargeButton';
import { NotificationCard as Card } from '../../components/NotificationCard';

import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { globalStyles } from '../../global/styles/globals';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { get_notifications } from '../../services/get_notifications';



export function Notification() {
    const navegation = useNavigation();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        get_notifications().then(notifications => {
            setNotifications(notifications)
        })
    }, [])

    console.log(notifications)

    return (
        <View style={[globalStyles.lightBackground]}>
            <Background>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <MaterialIcons
                            //@ts-ignore
                            onPress={() => navegation.navigate("Home")}
                            style={globalStyles.headerLeftIcon}
                            name="chevron-left"
                            size={24}
                            color={theme.colors.white}
                        />
                        <Text style={globalStyles.headerTitle}>Notifications</Text>
                    </View>
                </View>
            </Background>
            <ScrollView style={{ paddingHorizontal: 24, marginVertical: 20 }}>
                {notifications !== undefined ?
                    notifications.map(notification => {
                        return <Card props={notification} />
                    }) : null
                }
            </ScrollView>
        </View>
    );
}