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

export function GreenLargeButton({ title, ...rest }: Props) {
    return (
        <View style={{paddingHorizontal: 24}}>
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