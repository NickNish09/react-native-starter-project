/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Drawer from './modules/_global/Drawer';
import Movies from './modules/movies/Movies';
import Test from './modules/Test/Test';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('movieapp.Movies', () => Movies, store, Provider);
	Navigation.registerComponent('movieapp.Test', () => Test, store, Provider);
	Navigation.registerComponent('movieapp.Drawer', () => Drawer);
}
