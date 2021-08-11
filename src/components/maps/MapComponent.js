import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {BorderlessButton} from 'react-native-gesture-handler';

const MapComponent = props => {
  return (
    <View style={styles.main}>
      <View>
        <Icon name="notifications" size={22} color={'#000'} />
        <View style={styles.circle} />
      </View>
    </View>
  );
};

export default MapComponent;

export const MenuComponent = props => {
  const openDrawer = () => {
    Navigation.mergeOptions(props.componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };
  return (
    <View style={styles.menu}>
      <View>
        <BorderlessButton onPress={openDrawer}>
          <Icon name="menu" size={25} color={'#000'} />
        </BorderlessButton>
        <View style={styles.circle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 60,
    right: 16,
    zIndex: 9999,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    backgroundColor: 'transparent',
  },
  circle: {
    position: 'absolute',
    top: 0,
    left: 14,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    zIndex: 9999,
  },
  menu: {
    position: 'absolute',
    top: 200,
    left: 16,
    zIndex: 9999,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    backgroundColor: 'transparent',
  },
});
