import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

import { useAuth } from '../../hooks/auth'

export const ProfileContent: React.FC = ({ children }) => {

    const { user } = useAuth()

    return (
        <View style={styles.container} >
            <View style={styles.head}>
                <Image style={styles.profilePicture} source={{ uri: user.profile_picture }} />
                <View style={styles.names}>
                    <Text style={styles.name}>
                        {user.name}
                    </Text>
                    <Text style={styles.nickname}>
                        {user.nickname}
                    </Text>
                </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.attributes}>
                <View style={styles.atributeWrapper}>
                    <Text style={styles.attributeLabel}>city</Text>
                    <Text style={styles.attribute}>{user.city}</Text>
                </View>
            </View>
        </View>
    )
}