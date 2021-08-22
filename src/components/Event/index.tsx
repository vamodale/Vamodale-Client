import React from 'react';
import {View, Text, Image} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export const Event:React.FC = ({children}) => {
  return (
    <View style={styles.container} >
      <View>
        <Text style={styles.title}>
          Futebas na Cancha da ACDC
        </Text>
        <Text>
          <Text style={styles.date}>
            Sábado, 10/07
          </Text>
          <Text style={styles.hour}>
           - às 16H00
          </Text>
        </Text>
      </View>
      <View style={styles.attributes}>
        <Text>
          <Text style={styles.attributeLabel}>Organizador: </Text>
          <Text style={styles.attribute}>Jonas</Text>
        </Text>
        <Text>
          <Text style={styles.attributeLabel}>Local: </Text>
          <Text style={styles.attribute}>Campo ACDC, Bairro Das Towers, 1337</Text>
        </Text>
      </View>
      <View style={styles.subscribers}>
        <View style={styles.subscriberWraper}>
          <Image style={styles.subscriber} source={{uri:"https://bit.ly/dan-abramov"}}/>
        </View>
        <View style={styles.subscriberWraper}>
          <Image style={styles.subscriber} source={{uri:"https://bit.ly/dan-abramov"}}/>
        </View>
        <View style={styles.subscriberWraper}>
          <Image style={styles.subscriber} source={{uri:"https://bit.ly/dan-abramov"}}/>
        </View>
      </View>
      <>
        <View style={[styles.infoAdornmentWrapper, styles.infoAdornmentLeftWrapper]}>
          <View style={styles.infoAdornment}/>
        </View>
        <View style={styles.info}>
          <MaterialIcons name="info" size={20} color={theme.colors.purple}/>
        </View>
        <View style={[styles.infoAdornmentWrapper, styles.infoAdornmentTopWrapper]}>
          <View style={styles.infoAdornment}/>
        </View>
      </>
    </View>
  )
}