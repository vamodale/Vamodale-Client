import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

import { useAuth } from '../../hooks/auth'
import { TextInput } from 'react-native-gesture-handler';

export const ProfileEditContent: React.FC = ({ children }) => {

    const { user } = useAuth()

    return (
        <View style={styles.container} >
            <View style={styles.head}>
                <Image style={styles.profilePicture} source={{ uri: user.photo }} />
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
                <View style={[styles.atributeWrapper, {
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }]}>
                    <View style={{width: '70%'}}>
                        <Text style={styles.attributeLabel}>surname</Text>
                        <TextInput style={[styles.inputText]} value={user.nickname} placeholder='type your surname'></TextInput>
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.attributeLabel}>age</Text>
                        <TextInput style={[styles.inputText, {
                            width: '100%',
                        }]} value={user.age} placeholder='age' keyboardType='numeric'></TextInput>
                    </View>

                </View>
                <View style={styles.atributeWrapper}>
                    <Text style={styles.attributeLabel}>city</Text>
                    <TextInput style={styles.inputText} value={user.city} placeholder='type your city'></TextInput>
                </View>
            </View>
        </View>
    )
}