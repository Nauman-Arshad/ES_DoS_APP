import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,
    Image, TouchableWithoutFeedback } from 'react-native';
import globoCatalog from './CatalogDB';

export default function Catalogpage ({navigation}){
    const [catalogData, setCatalogData] = useState(globoCatalog);
    const catalogItem = ({item}) => {
        return(
            <TouchableWithoutFeedback
                onPress={() =>navigation.navigate('CatalogDetail', {id:item.modelNumber})}
            >
                <View style={styles.products}>
                    <View style={styles.productimage}>
                        <Image
                            style={styles.thumbnail}
                            source={item.image}
                        />
                    </View>
                    <View style={styles.producttext}>
                        <Text style={styles.title}>{item.model}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={catalogData}
                renderItem={catalogItem}
                keyExtractor={(item) =>item.modelNumber}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingTop: 25
    },
    products:{
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 20,
        justifyContent: 'center'
    },
    productimage:{
        flex: 1
    },
    thumbnail: {
        height: 260,
        width: '100%'
    },
    producttext:{
        alignItems: 'flex-start',
        paddingLeft: 15,
        flex: 1
    },
    title:{
        paddingBottom:10,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 12,
        textAlign: 'left'
    }
})