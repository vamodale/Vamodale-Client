import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

import GoogleImg from '../../assets/GoogleLogo.png';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <View>
                <Image source={GoogleImg} style={styles.icon} />
            </View>

            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}