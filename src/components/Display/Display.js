import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Display = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.clicksLabel}>{`${props.clicks} cookies`}</Text>
            <Text style={styles.levelLabel}>{`Level: ${props.level}`}</Text>
        </View>
    );
};

Display.propTypes = {
    clicks: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
}

export default Display;
