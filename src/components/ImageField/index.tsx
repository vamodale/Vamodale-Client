import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import { styles } from './styles';

const ImagePickerComponent = (props) => {

    const pickImage = () => {

        const options = {
            mediaType: 'photo',
            quality: 0.5,
            maxWidth: 500,
            maxHeight: 500,
        };

        const handleImagePickerResponse = (response) => {
            if (response.didCancel) {
                console.log('Usuário cancelou a seleção de imagem');
            } else if (response.error) {
                console.error('Erro na seleção de imagem:', response.error);
            } else {
                // Atualizar o estado com a imagem selecionada
                props.props.setPicture({ uri: response.assets[0].uri });
            }
        };

        ImagePicker.launchImageLibrary(options, handleImagePickerResponse);
    };

    return (
        <>
            <Pressable onPress={pickImage}>
                <Text style={styles.attributeLabel}>Choose your Image</Text>
            </Pressable>
            {props.props.picture && (
                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <Image source={{ uri: props.props.picture.uri }} style={styles.image} />
                </View>
            )}
        </>
    );
};

export default ImagePickerComponent;