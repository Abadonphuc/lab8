import { StyleSheet, Text, View, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AxiosInstance from './helper/AxiosInstance';

const Them = ({ route }) => {
    const navigation = useNavigation();
    const { dulieu, size } = route.params;

    const [name, setname] = useState(dulieu.name);
    const [birthday, setbirthday] = useState(dulieu.birthday);
    const [img, setimg] = useState(dulieu.avatar);


    const updateData = async () => {
        if(dulieu.name !== ''){
            try {
                const url = "/users/" + dulieu.id;
                const body = {
                    name: name,
                    birthday: birthday,
                    avatar: img
                };
                const result = await AxiosInstance().put(url, body);
                navigation.navigate('Danhsach');
    
            } catch (eror) {
                console.log(eror);
            }
        }else{
            console.log('88157');
            try {
                const body = {
                    name: name,
                    birthday: birthday,
                    avatar: img
                };
                const result = await AxiosInstance().post("/users", body);
                navigation.navigate('Danhsach');
    
            } catch (eror) {
                console.log(eror);
            }
        }
        
    }

    return (
        <View style={{ padding: 20, flex: 1 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'orange', marginBottom: 20, textAlign: 'center' }}>Tạo tài khoản mới</Text>
            <TextInput
                placeholder='Nhập họ tên'
                style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}
                value={name}
                onChangeText={(text) => setname(text)} />
            <TextInput
                placeholder='Nhập năm sinh  '
                style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}
                value={birthday}
                onChangeText={(text) => setbirthday(text)} />
            <TextInput
                placeholder='Ảnh avatar'
                style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}
                value={img}
                onChangeText={(text) => setimg(text)} />
            <Image style={{ width: 300, height: 300, borderRadius: 360,  alignSelf: 'center' }} source={{ uri: img }} />

            <TouchableOpacity
                onPress={() => updateData()}
                style={{ backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}>
                <Text style={{ fontSize: 20, color: 'black' }}>
                    Cập nhật
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}>
                <Text style={{ fontSize: 20, color: 'black' }}>
                    Quay lại
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Them

const styles = StyleSheet.create({})