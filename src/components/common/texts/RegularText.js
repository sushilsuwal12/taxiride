import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import AppSettings from '../../../utils/AppSettings';

const RegularText = props => {
  return (
    <Text
      style={[
        styles.title,
        {
          color: props.color ? props.color : AppSettings.textColor,
          fontSize: props.size ? props.size : 16,
          lineHeight: props.height ? props.height : 24,
          textAlign: props.align ? props.align : 'left',
          fontWeight: props.weight ? props.weight : '400',
          letterSpacing: props.spacing ? props.spacing : 0.4,
        },
      ]}
      {...props}>
      {props.title}
    </Text>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  title: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
    fontWeight: '500',
  },
});
