import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export function RedLargeButton({ title, ...rest }: Props) {
    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                {...rest}
            >

                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}