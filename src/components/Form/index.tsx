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
        { value: "basketball" },
        { value: "football" },
        { value: "handball" },
        { value: "volleyball" },
        { value: "other" }
    ]

    const navegation = useNavigation();

    function handleAppointmentCreate(values) {
        //@ts-ignore
        values.data = values.date + values.hour
        setEvent(values)
        navegation.navigate('AppointmentInfo', { event: event });
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

    const [event, setEvent] = useState({})

    const var_switch = isEnabled ? 'competitive' : 'casual'

    return (
        <View style={[globalStyles.purpleBackground, {
            marginHorizontal: 24
        }]}>
            <Formik
                initialValues={{
                    appointmentName: '',
                    sport: 'soccer',
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
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    setFieldTouched,
                }) => (
                    <View style={{ width: '100%', marginTop: 20 }}>
                        <View>
                            <Text style={styles.attributeLabel}>event name</Text>
                            <TextInput
                                onChangeText={handleChange('appointmentName')}
                                style={styles.inputText}
                                value={values.appointmentName}
                                placeholder="Rodrigo & cia"
                            />
                            {errors.appointmentName && touched.appointmentName ? <Text>{errors.appointmentName}</Text> : null}
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 7 }}>
                            <View style={{ flexDirection: 'column', width: '55%' }}>
                                <Text style={styles.attributeLabel}>sports</Text>
                                <View style={[styles.inputText, { overflow: 'hidden', flex: 1 }]}>
                                    <Picker
                                        mode="dropdown"
                                        selectedValue={selectedSport}
                                        style={{ marginTop: -14 }}
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
                                </View>

                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.attributeLabel}>slots</Text>
                                <TextInput
                                    keyboardType='number-pad'
                                    ref={slots}
                                    value={values.slots}
                                    style={styles.inputText}
                                    placeholder="mín: 2, max: 30"
                                    onChangeText={handleChange('slots')}
                                    onBlur={() => setFieldTouched('slots', true)}
                                />
                                {errors.slots && touched.slots ? <Text>{errors.slots}</Text> : null}
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column', width: '30%' }}>
                                <Text style={styles.attributeLabel}>hour</Text>
                                <TextInput
                                    keyboardType='number-pad'
                                    ref={hour}
                                    value={values.hour}
                                    style={[styles.inputText, { textAlign: 'center' }]}
                                    placeholder="10:30"
                                    onChangeText={handleChange('hour')}
                                    onBlur={() => setFieldTouched('hour', true)}
                                />
                                {errors.hour && touched.hour ? <Text>{errors.hour}</Text> : null}
                            </View>

                            <View style={{ flexDirection: 'column', width: '50%' }}>
                                <Text style={styles.attributeLabel}>data</Text>
                                <TextInput
                                    keyboardType='number-pad'
                                    ref={date}
                                    value={values.date}
                                    style={[styles.inputText]}
                                    placeholder="20/07/2017"
                                    onChangeText={handleChange('date')}
                                    onBlur={() => setFieldTouched('date', true)}
                                />
                                {errors.date && touched.date ? <Text>{errors.date}</Text> : null}
                            </View>
                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 7 }}>
                            <View style={{ width: '50%' }}>
                                <Text style={styles.attributeLabel}>zip code</Text>
                                <TextInput
                                    keyboardType='number-pad'
                                    ref={cep}
                                    value={values.cep}
                                    style={[styles.inputText, { textAlign: 'center' }]}
                                    placeholder="85660-000"
                                    onChangeText={handleChange('cep')}
                                    onBlur={() => setFieldTouched('cep', true)}
                                />
                                {errors.cep && touched.cep && (
                                    <Text>{errors.cep}</Text>
                                )}
                            </View>

                            <View style={styles.button_off_on}>
                                <Text style={styles.attributeLabel}>{var_switch}</Text>
                                <Switch
                                    trackColor={{ false: '#F8FFE5', true: '#2EBFA5' }}
                                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column', width: '70%' }}>
                                <Text style={styles.attributeLabel}>district</Text>
                                <TextInput
                                    ref={district}
                                    value={values.district}
                                    style={styles.inputText}
                                    placeholder="Altas Torres"
                                    onChangeText={handleChange('district')}
                                    onBlur={() => setFieldTouched('district', true)}
                                />
                                {errors.district && touched.district ? <Text>{errors.district}</Text> : null}
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.attributeLabel}>number</Text>
                                <TextInput
                                    keyboardType='number-pad'
                                    ref={number}
                                    value={values.number}
                                    style={styles.inputText}
                                    placeholder="251"
                                    onChangeText={handleChange('number')}
                                    onBlur={() => setFieldTouched('number', true)}
                                />
                                {errors.number && touched.number ? <Text>{errors.number}</Text> : null}
                            </View>
                        </View>



                        <View>
                            <Text style={styles.attributeLabel}>street</Text>
                            <TextInput
                                ref={street}
                                value={values.street}
                                style={styles.inputText}
                                placeholder="Avenida México"
                                onChangeText={handleChange('street')}
                                onBlur={() => setFieldTouched('street', true)}
                            />
                            {errors.street && touched.street ? <Text>{errors.street}</Text> : null}
                        </View>

                        <View style={{ marginTop: 7 }}>
                            <Text style={styles.attributeLabel}>complement</Text>
                            <TextInput
                                ref={complement}
                                value={values.complement}
                                style={styles.inputText}
                                placeholder="Sobrado"
                                onChangeText={handleChange('complement')}
                                onBlur={() => setFieldTouched('complement', true)}
                            />
                            {errors.complement && touched.complement ? <Text>{errors.complement}</Text> : null}
                        </View>

                        <View style={styles.footer}>
                            <GreenLargeButton onPress={(values) => handleAppointmentCreate(values)} title="confirm" />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default Form;