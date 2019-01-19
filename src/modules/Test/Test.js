import React, { PropTypes, Component } from 'react';
import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Test';

class Test extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Login</Text>
			</View>
		);
	}
}

export default (Test);
