import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Avatar from '../../assets/svg/avatar.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppSettings from '../../utils/AppSettings';
import RegularText from '../../components/common/texts/RegularText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Car from '../../assets/svg/directions.svg';
import {RectButton} from 'react-native-gesture-handler';

const stars = [1, 2, 3, 4, 5];
const SideMenu = props => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.top}>
        <View style={{height: 60, width: 60}}>
          <Avatar height={60} width={60} />
          <View style={styles.circle}>
            <Icon name="add" size={13} color={AppSettings.white} />
          </View>
        </View>
        <View style={{height: 10}} />
        <RegularText title="Lagnar Lathbrok" size={18} />
        <View style={styles.rating}>
          {stars.map(item => {
            return (
              <Ionicons
                name="star"
                color={AppSettings.primaryColor}
                size={20}
                key={item}
                style={{marginRight: 2}}
              />
            );
          })}
        </View>
        <RegularText title="View Profile" size={12} color={'#aaa'} />
      </View>
      <View style={{flex: 1, padding: 16}}>
        <RectButton style={styles.item}>
          <Car height={24} width={24} />
          <View style={{width: 10}} />
          <RegularText title="Get a Ride" size={16} height={20} />
        </RectButton>
        <RectButton style={styles.item}>
          <Car height={24} width={24} />
          <View style={{width: 10}} />
          <RegularText title="Current Ride" size={16} height={20} />
        </RectButton>
        <RectButton style={styles.item}>
          <Entypo name="log-out" size={24} color={AppSettings.primaryColor} />
          <View style={{width: 10}} />
          <RegularText title="Log out" size={16} height={20} />
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppSettings.white,
  },
  top: {
    padding: 16,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  circle: {
    position: 'absolute',
    right: -5,
    bottom: 0,
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppSettings.primaryColor,
  },
  rating: {
    flexDirection: 'row',
  },
  item: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
