import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';
import { iconsMap, iconsLoaded } from './utils/AppIcons';
import SignInIcon from './utils/sign_in.png';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white'
};

Navigation.startTabBasedApp({
	tabs: [
		{
			label: 'Sign In',
			screen: 'movieapp.Movies',
			icon: SignInIcon,
			title: 'Hello World',
			navigatorStyle
		},
		{
			label: 'Sign Up',
			screen: 'movieapp.Test',
			icon: SignInIcon,
			title: 'Cadastrar',
			navigatorStyle
		}
	]
});
