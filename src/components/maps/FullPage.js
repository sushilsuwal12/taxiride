import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import places from '../../constants/places';
import AppSettings from '../../utils/AppSettings';
import {CircularPin} from '../common/button/GoingButton';
import RegularText from '../common/texts/RegularText';
import SearchBox from './SearchBox';
import SetOn from '../../assets/svg/setonmap.svg';

const FullPage = ({animate}) => {
  return (
    <View style={styles.page}>
      <View style={styles.toolbar}>
        <View style={styles.left}>
          <BorderlessButton style={{padding: 6}} onPress={() => animate()}>
            <Icon name="cross" size={24} color={AppSettings.textColor} />
          </BorderlessButton>
          <RegularText
            title="Trip"
            size={16}
            color={AppSettings.black}
            weight="700"
            height={18}
          />
        </View>
        <RegularText
          title="Done"
          size={16}
          color={AppSettings.black}
          weight="700"
          height={18}
        />
      </View>
      <View style={{flex: 1, padding: 16}}>
        <SearchBox />
        <View style={{height: 30}} />
        {places.map(item => {
          return (
            <View style={styles.item} key={item.id}>
              <CircularPin />
              <RegularText
                title={item.name}
                size={14}
                height={18}
                color={AppSettings.textColor}
              />
            </View>
          );
        })}
        <View style={styles.item}>
          <SetOn height={15} width={15} />
          <View style={{width: 10}} />
          <RegularText
            title={'Set on Map'}
            size={14}
            height={18}
            color={AppSettings.textColor}
          />
        </View>
      </View>
    </View>
  );
};

export default FullPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 25,
  },
  toolbar: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
