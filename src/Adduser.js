import { StyleSheet, Text, View, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Adduser = ({route}) => {

    const navigation = useNavigation();
    const {size} = route.params;

    const [name, setname] = useState('');
    const [birthday, setbirthday] = useState('');
    const [img, setimg] = useState('');

  return (
    <View style={{ padding: 20, flex: 1 }}>
    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'orange', marginBottom: 20, textAlign: 'center' }}>Tạo tài khoản mới</Text>
    <TextInput
        style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}
        value={name}
        onChangeText={(text) => setname(text)} />
    <TextInput
        style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}
        value={birthday}
        onChangeText={(text) => setbirthday(text)} />
    <TextInput
        style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}
        value={img}
        onChangeText={(text) => setimg(text)} />
    <Image style={{width: 300, height: 300, borderRadius: 360, backgroundColor: 'white', alignSelf: 'center'}} source={{uri: img}}/>
    
    <TouchableOpacity
    onPress={()=>updateData()}
    style={{ backgroundColor: 'orange',justifyContent:'center', alignItems: 'center', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}>
        <Text style={{fontSize: 20, color: 'black'}}>
            Chỉnh sửa 
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=>navigation.goBack()}
    style={{ backgroundColor: 'orange',justifyContent:'center', alignItems: 'center', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}>
        <Text style={{fontSize: 20, color: 'black'}}>
            Quay lại 
        </Text>
    </TouchableOpacity>
</View>
  )
}

export default Adduser