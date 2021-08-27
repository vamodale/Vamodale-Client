import React, {useRef, useState} from 'react';
import {Formik} from 'formik';
import {Text, TextInput, View, TouchableOpacity,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as Yup from 'yup';

import DateTimePicker from '@react-native-community/datetimepicker';

function Form() {
  const appointmentName = useRef(null);
  
  const [selectedSport, setSelectedSport] = useState();

  const slots = useRef(null);
  const cep = useRef(null);
  const district = useRef(null);
  const number = useRef(null);
  const street = useRef(null);
  const complement = useRef(null);


  const sports = [
    {value:"basquete"},
    {value:"futebol"},
    {value:"handebol"},
    {value:"volei"},
    {value:"outros"}
  ]


  const FormSchema = Yup.object().shape({
    appointmentName: Yup.string().required('Campo obrigatório'),
    slots: Yup.number().min(2, 'valor mínimo ${min} vagas').max(30, 'valor máximo ${max} vagas').required('Campo obrigatório'),
    cep: Yup.string().required('Campo obrigatório'),
    district: Yup.string().required('Campo obrigatório'),
    number: Yup.number().required('Campo obrigatório'),
    street: Yup.string().required('Campo obrigatório'),
    complement: Yup.string(),
  });

  return (
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
        <View>
          <Text>nome do evento</Text>
          <TextInput
            ref={appointmentName}
            value={values.appointmentName}
            onChangeText={handleChange('appointmentName')}
            onBlur={() => setFieldTouched('appointmentName', true)}
          />
          {errors.appointmentName && touched.appointmentName && <Text>{errors.appointmentName}</Text>}

          <Picker
            mode="dropdown"
            selectedValue={selectedSport}
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

          <Text>vagas</Text>
          <TextInput
            keyboardType='number-pad'
            ref={slots}
            value={values.slots}
            onChangeText={handleChange('slots')}
            onBlur={() => setFieldTouched('slots', true)}
          />
          {errors.slots && touched.slots && (
            <Text>{errors.slots}</Text>
          )}

         <Text>cep</Text>
          <TextInput
            keyboardType='number-pad'
            ref={slots}
            value={values.slots}
            onChangeText={handleChange('slots')}
            onBlur={() => setFieldTouched('slots', true)}
          />
          {errors.slots && touched.slots && (
            <Text>{errors.slots}</Text>
          )}



          <TouchableOpacity onPress={() => handleSubmit}>
            <Text>Botão</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

export default Form;