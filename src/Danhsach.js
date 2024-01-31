import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AxiosInstance from './helper/AxiosInstance';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Danhsach = () => {
    const navigation = useNavigation();
    const [data, setdata] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [replay, setReplay] = useState(1);

    const addData = async () => {
        try {
            setIsLoading(true);
            console.log("aaaaaaaaaaaaaaa");

            const result = await AxiosInstance().get("/users", null);
            if (result != null) {
                setdata(JSON.parse(JSON.stringify(result)));
                setIsLoading(false);
                console.log(result);
            } else {
                Alert.alert("Lỗi", "Lấy danh sách thất bại ");
            }
        } catch (eror) {
            console.log(eror);
        }
    }

    const deleteData = async (id) => {
        setIsLoading(true);
        try {
            const body = "/users/" + id;
            const result = await AxiosInstance().delete(body,null);
            setIsLoading(false);
            setReplay(replay + 1);

        } catch (eror) {
            console.log(eror);
        }
    }


    useFocusEffect(
        useCallback(() => {
            addData();
        }, [])
    )

    useEffect(() => {
        addData();
    }, [replay])

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Thongbao',{dulieu: item})}
            style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10, padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 16 }}>{item.birthday}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Them', { dulieu: item, size: data.length })}
                        style={{ backgroundColor: 'blue', borderRadius: 10, paddingVertical: 20, paddingHorizontal: 10, marginRight: 50 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Sửa thông tin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => deleteData(item.id)}
                        style={{ backgroundColor: 'red', borderRadius: 10, paddingVertical: 20, paddingHorizontal: 30 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, padding: 10, marginBottom: 20 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Them',{dulieu: {id:1, name: '',birthday:'', avatar:'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'}, size: 1})}
                style={{ backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: 15, borderWidth: 1, borderColor: 'black', marginBottom: 30, height: 50, paddingLeft: 10 }}>
                <Text style={{ fontSize: 20, color: 'black' }}>
                    Thêm dữ liệu mới 
                </Text>
            </TouchableOpacity>

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />)
                : (<View>
                    <Text>danhsach</Text>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id} />
                </View>)}
        </View>
    )
}

export default Danhsach

const styles = StyleSheet.create({})