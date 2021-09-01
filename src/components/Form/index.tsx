import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { Text, TextInput, View, TouchableOpacity, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Yup from 'yup';
import { GreenLargeButton } from '../GreenLargeButton';
import { useNavigation } from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';
import { globalStyles } from '../../global/styles/globals';

function Form() {
  const appointmentName = useRef(null);

  const [selectedSport, setSelectedSport] = useState();

  const slots = useRef(null);
  const cep = useRef(null);
  const district = useRef(null);
  const number = useRef(null);
  const street = useRef(null);
  const complement = useRef(null);
  const date = useRef(null);
  const hour = useRef(null);

  const sports = [
    { value: "basquete" },
    { value: "futebol" },
    { value: "handebol" },
    { value: "vôlei" },
    { value: "outros" }
  ]

  const navegation = useNavigation();

  function handleAppointmentCreate() {
    //@ts-ignore
    navegation.navigate('AppointmentCreate');
  }

  const FormSchema = Yup.object().shape({
    appointmentName: Yup.string().required(''),
    slots: Yup.number().min(2, 'valor mínimo ${min} vagas').max(30, 'valor máximo ${max} vagas').required(''),
    cep: Yup.string().required(''),
    district: Yup.string().required(''),
    number: Yup.number().required(''),
    street: Yup.string().required(''),
    complement: Yup.string(),
    date: Yup.date().required(''),
    hour: Yup.string().required(''),
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const var_switch = isEnabled ? 'Competitivo' : 'Casual'

  return (
    <View style={globalStyles.purpleBackGround}>
      <Formik
        initialValues={{
          appointmentName: '',
          sport: 'futebol',
          slots: '',
          cep: '',
          district: '',
          number: '',
          street: '',
          complement: '',
          date: '',
          hour: '',
        }}
        onSubmit={values => {
          alert(values);
        }}
        validationSchema={FormSchema}>
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
        }) => (
          <View style={{ width: '95%' }}>
            <View>
              <Text style={styles.labelName}>nome do evento</Text>
              <TextInput
                ref={appointmentName}
                value={values.appointmentName}
                onChangeText={handleChange('appointmentName')}
                onBlur={() => setFieldTouched('appointmentName', true)}
                style={styles.inputName}
                placeholder="Rodrigo e companhia"
              />
              {errors.appointmentName && touched.appointmentName && <Text>{errors.appointmentName}</Text>}
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.labelSport}>esporte</Text>
              <Text style={styles.labelSlots}>vagas</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Picker
                mode="dropdown"
                selectedValue={selectedSport}
                style={styles.pickerSport}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedSport(itemValue)
                }>
                {sports.map((item) => {
                  return (<Picker.Item
                    label={item.value.toString()}
                    value={item.value.toString()}
                    key={item.value.toString()} />)
                })}
              </Picker>

              <TextInput
                keyboardType='number-pad'
                ref={slots}
                value={values.slots}
                style={styles.inputSlots}
                placeholder="mín: 2, max: 30"
                onChangeText={handleChange('slots')}
                onBlur={() => setFieldTouched('slots', true)}
              />
              {errors.slots && touched.slots && <Text>{errors.slots}</Text>}
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.labelHour}>hora</Text>
              <Text style={styles.labelDate}>data</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TextInput
                keyboardType='number-pad'
                ref={hour}
                value={values.hour}
                style={styles.inputHour}
                placeholder="10:30"
                onChangeText={handleChange('hour')}
                onBlur={() => setFieldTouched('hour', true)}
              />
              {errors.hour && touched.hour && <Text>{errors.hour}</Text>}


              <TextInput
                keyboardType='number-pad'
                ref={date}
                value={values.date}
                style={styles.inputDate}
                placeholder="20/07/2017"
                onChangeText={handleChange('date')}
                onBlur={() => setFieldTouched('date', true)}
              />
              {errors.date && touched.date && <Text>{errors.date}</Text>}
            </View>

            <View style={styles.button_off_on}>
              <Text style={styles.switch}>{var_switch}</Text>
              <Switch
                trackColor={{ false: '#F8FFE5', true: '#2EBFA5' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View>
              <Text style={styles.labelCep}>cep</Text>
              <TextInput
                keyboardType='number-pad'
                ref={cep}
                value={values.cep}
                style={styles.inputCep}
                placeholder="85660-000"
                onChangeText={handleChange('cep')}
                onBlur={() => setFieldTouched('cep', true)}
              />
              {errors.cep && touched.cep && (
                <Text>{errors.cep}</Text>
              )}
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.labelDistrict}>bairro</Text>
              <Text style={styles.labelNumber}>número</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TextInput
                ref={district}
                value={values.district}
                style={styles.inputDistrict}
                placeholder="Altas Torres"
                onChangeText={handleChange('district')}
                onBlur={() => setFieldTouched('district', true)}
              />
              {errors.district && touched.district && <Text>{errors.district}</Text>}

              <TextInput
                keyboardType='number-pad'
                ref={number}
                value={values.number}
                style={styles.inputNumber}
                placeholder="251"
                onChangeText={handleChange('number')}
                onBlur={() => setFieldTouched('number', true)}
              />
              {errors.number && touched.number && <Text>{errors.number}</Text>}
            </View>

            <View>
              <Text style={styles.labelRua}>rua</Text>
              <TextInput
                ref={street}
                value={values.street}
                style={styles.inputRua}
                placeholder="Avenida México"
                onChangeText={handleChange('street')}
                onBlur={() => setFieldTouched('street', true)}
              />
              {errors.street && touched.street && <Text>{errors.street}</Text>}
            </View>

            <View>
              <Text style={styles.labelComplement}>complemento</Text>
              <TextInput
                ref={complement}
                value={values.complement}
                style={styles.inputComplement}
                placeholder="Sobrado"
                onChangeText={handleChange('complement')}
                onBlur={() => setFieldTouched('complement', true)}
              />
              {errors.complement && touched.complement && <Text>{errors.complement}</Text>}
            </View>

            <View style={styles.footer}>
              <GreenLargeButton onPress={handleAppointmentCreate} title="confirmar" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Form;