import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Thongbao = ({route}) => {
  
  const { dulieu} = route.params;
  const navigation = useNavigation();
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'orange', marginBottom: 20, textAlign: 'center' }}>Tạo tài khoản mới</Text>
      <Image style={{ width: 300, height: 300, borderRadius: 360, backgroundColor: 'white', alignSelf: 'center' }} source={{ uri: dulieu.avatar }} />

      <Text
        style={{  textAlign: 'center',borderColor: 'black', marginBottom: 10,color: 'orange', height: 50,lineHeight: 50, paddingLeft: 10, fontSize: 20}}>
          {dulieu.name}
        </Text>
      <Text
        style={{  borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10,lineHeight: 50,textAlign: 'center',fontSize: 16, color: 'black' }} >
          {dulieu.birthday}
        </Text>


      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center',alignSelf: 'center', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, width: '60%' }}>
        <Text style={{ fontSize: 20, color: 'black' }}>
          Trở lại
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Thongbao