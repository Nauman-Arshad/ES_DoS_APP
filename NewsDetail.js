import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator,
    Image, ScrollView } from 'react-native';

export default function NewsDetail({route, navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setAllPostData] = useState([]);
    const { url } = route.params;
    const selectedPost = allPostData.find(post => post.url === url);

    useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tech&apiKey=19a7ea97e11f410ca4ed04268ce938f4')
        .then((response) => response.json())
        .then((json) => setAllPostData(json.articles))
        .catch((error) => console.error(error))
        .finally(() => finishLoading(false));
    }, []);

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttontext}>Go back</Text>
            </TouchableOpacity>
            {dataLoading ? <ActivityIndicator/> : (
                <ScrollView >
                    <Text style={styles.title}>{selectedPost.title}</Text>
                    <Image
                        style={styles.storyimage}
                        source={{ uri: selectedPost.urlToImage}}
                    />
                    <Text style={styles.blurb}>{selectedPost.description}</Text>
                    <Text style={styles.content}>{selectedPost.content}</Text>
                </ScrollView>
            )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttontext: {
        fontWeight: 'bold'
    },
    storyimage: {
        height:300,
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize:  20,
        padding: 20
    },
    blurb: {
        fontSize:  14,
        padding: 20,
        fontStyle: 'italic',
    },
    content: {
        flex: 1,
        fontSize:  16,
        paddingTop: 30,
        paddingBottom: 100,
        paddingLeft: 20,
        paddingRight:20
    }
});