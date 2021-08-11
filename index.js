import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/screens/maps/HomeScreen';
import SideMenu from './src/screens/sidemenu/SideMenu';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

Navigation.registerComponent(
  'home',
  () => gestureHandlerRootHOC(HomeScreen),
  () => HomeScreen,
);

Navigation.registerComponent(
  'sidemenu',
  () => gestureHandlerRootHOC(SideMenu),
  () => SideMenu,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
    statusBar: {
      visible: true,
      backgroundColor: '#ffffff',
      style: 'dark',
    },
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'sideMenu',
        left: {
          component: {
            id: 'Drawer',
            name: 'sidemenu',
          },
        },
        center: {
          stack: {
            id: 'AppRoot',
            children: [
              {
                component: {
                  id: 'App',
                  name: 'home',
                },
              },
            ],
          },
        },
      },
    },
  });
});
