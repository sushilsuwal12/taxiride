import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppSettings from '../../utils/AppSettings';
import {CircularPin} from '../common/button/GoingButton';
import RegularText from '../common/texts/RegularText';

const SearchBox = props => {
  return (
    <View style={styles.box}>
      <View style={styles.left}>
        <View style={styles.item}>
          <CircularPin />
          <View>
            <RegularText
              title="Start"
              size={12}
              height={18}
              color={AppSettings.textColor}
            />
            <RegularText
              title="Current Location"
              size={14}
              height={20}
              color={AppSettings.black}
            />
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.item}>
          <CircularPin color={AppSettings.black} />
          <View>
            <RegularText
              title="Destination"
              size={14}
              height={20}
              color={AppSettings.black}
            />
          </View>
        </View>
      </View>
      <Icon name="add" size={20} color={AppSettings.black} />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 1,
  },
  item: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#f2f2f2',
  },
});
