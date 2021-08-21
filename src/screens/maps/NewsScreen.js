import axios from 'axios';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import AppSettings from '../../utils/AppSettings';

const {width} = Dimensions.get('window');

const NewsScreen = props => {
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
    } catch (err) {}
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Image source={{uri: item.urlToImage}} style={styles.image} />
        <View style={styles.texts}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={{height: 3}} />
          <Text style={styles.desc}>{item.description}</Text>
          <View style={{height: 3}} />
          <View style={styles.row}>
            <Text>{item.source?.name}</Text>
            <Text>{moment(item.publishedAt).fromNow()}</Text>
          </View>
        </View>
        <View style={{height: 3}} />
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

export default NewsScreen;

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
    elevation: 8,
    shadowColor: AppSettings.black,
    borderRadius: 10,
    shadowOpacity: 0.5,
    marginBottom: 16,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  texts: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: AppSettings.black,
  },
  description: {
    fontSize: 16,
  },
});
