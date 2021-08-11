import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppSettings from '../../../utils/AppSettings';
import RegularText from '../texts/RegularText';

const GoingButton = props => {
  return (
    <View style={styles.btn}>
      <CircularPin />
      <RegularText title="Where are you going?" size={14} height={16} />
    </View>
  );
};

export default GoingButton;

export const CircularPin = ({color}) => {
  return (
    <View
      style={[
        styles.outer,
        {
          backgroundColor: color ? color : AppSettings.primaryColor,
        },
      ]}>
      <View style={styles.inner} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  outer: {
    height: 15,
    width: 15,
    borderRadius: 8,
    backgroundColor: AppSettings.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  inner: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: AppSettings.white,
  },
});
