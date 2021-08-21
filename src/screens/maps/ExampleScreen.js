import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import AppSettings from '../../utils/AppSettings';

const {width} = Dimensions.get('window');

const ExampleScreen = props => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url =
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca74113326f847d5afa3f5196283429b';
      const response = await axios.get(url);
      setNews(response.data.articles);
    } catch (err) {
      console.log('the err is ', err);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.urlToImage}} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.row}>
          <Text>{item.source?.name}</Text>
          <Text>{item.publishedAt}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.body}>
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{padding: 16}}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExampleScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppSettings.white,
  },
  image: {
    height: 200,
    width: width - 32,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card: {
    backgroundColor: AppSettings.white,
    elevation: 3,
    shadowColor: AppSettings.black,
    shadowOpacity: 0.4,
    borderRadius: 10,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
