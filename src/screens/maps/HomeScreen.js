import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Location from '../../assets/svg/location.svg';
import Taxi from '../../assets/svg/taxi.svg';
import BottomSheet from '../../components/maps/BottomSheet';
import MapComponent, {MenuComponent} from '../../components/maps/MapComponent';

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.main}>
      <MapView
        initialRegion={{
          latitude: 27.7172,
          longitude: 85.324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}>
        <Marker coordinate={{latitude: 27.7172, longitude: 85.324}}>
          <Location height={30} width={24} />
        </Marker>
        <Marker coordinate={{latitude: 27.7352, longitude: 85.3181}}>
          <Taxi height={33} width={24} />
        </Marker>
        <Marker coordinate={{latitude: 27.7176, longitude: 85.328}}>
          <Taxi height={33} width={33} />
        </Marker>
      </MapView>
      <MapComponent />
      <MenuComponent componentId={props.componentId} />
      <BottomSheet />
    </SafeAreaView>
  );
};

export default HomeScreen;

HomeScreen.options = {
  statusBar: {
    visible: true,
    drawBehind: true,
    style: 'dark',
    backgroundColor: 'transparent',
  },
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
