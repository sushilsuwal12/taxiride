import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import AppSettings from '../../utils/AppSettings';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {RectButton} from 'react-native-gesture-handler';
import Star from '../../assets/svg/star.svg';
import RegularText from '../common/texts/RegularText';
import GoingButton from '../common/button/GoingButton';
import FullPage from './FullPage';

const {height} = Dimensions.get('window');

const BottomSheet = props => {
  const bottomHeight = useSharedValue(200);
  const [full, setFull] = useState(false);

  const animate = () => {
    setFull(!full);
    bottomHeight.value = withTiming(full ? 200 : height, {
      duration: 300,
      easing: Easing.in(Easing.ease),
    });
  };

  const bottomStyle = useAnimatedStyle(() => {
    return {
      height: bottomHeight.value,
    };
  }, []);

  return (
    <Animated.View style={[styles.main, bottomStyle]}>
      {full ? (
        <FullPage animate={animate} />
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.top}>
            <Star height={24} width={24} />
            <View style={styles.right}>
              <RegularText
                title="Book a ride and get 5% discount now."
                size={16}
                height={20}
                color={AppSettings.white}
              />
              <Text style={styles.normal}>
                Use this code. <Text style={styles.line}>JFH11H</Text>
              </Text>
            </View>
          </View>
          <View style={{flex: 1, padding: 16}}>
            <RegularText
              title="Hey there, Ragnar"
              size={20}
              height={24}
              color={AppSettings.black}
              weight="700"
            />
            <View style={{height: 10}} />
            <RectButton onPress={animate}>
              <GoingButton />
            </RectButton>
          </View>
        </View>
      )}
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    elevation: 3,
    backgroundColor: AppSettings.white,
    shadowColor: AppSettings.black,
    shadowOpacity: 0.2,
    zIndex: 9999,
  },
  top: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: AppSettings.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    marginLeft: 10,
  },
  normal: {
    fontSize: 14,
    color: AppSettings.secondaryColor,
  },
  line: {
    color: AppSettings.white,
    textDecorationLine: 'underline',
  },
});
