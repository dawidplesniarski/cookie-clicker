import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Toast from 'react-native-simple-toast';

const AchievementStore = props => {
    const [bonus100ClicksUsed, setBonus100ClicksUsed] = useState(false);
    const [bonus300ClicksUsed, setBonus300ClicksUsed] = useState(false);

    const bonus100Clicks = () => {
        setBonus100ClicksUsed(true);
        props.setClicks(props.clicks + 100)
        Toast.showWithGravity('Item has been used!', Toast.SHORT, Toast.TOP);
    };

    const bonus300Clicks = () => {
        setBonus300ClicksUsed(true);
        props.setClicks(props.clicks + 300);
        Toast.showWithGravity('item has been used!', Toast.SHORT, Toast.TOP);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Items store</Text>
            <View style={styles.itemsContainer}>
                <TouchableOpacity
                    disabled={props.clicks < 50 || bonus100ClicksUsed}
                    onPress={() => bonus100Clicks()}
                >
                    <Text style={props.clicks >= 50
                        ? bonus100ClicksUsed
                            ? styles.itemLabelDisabled
                            : styles.itemLabel
                        : styles.itemLabelDisabled}>
                        +100 clicks
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={props.clicks < 500 || bonus300ClicksUsed}
                    onPress={() => bonus300Clicks()}
                >
                    <Text style={props.clicks >= 500
                        ? bonus100ClicksUsed
                            ? styles.itemLabelDisabled
                            : styles.itemLabel
                        : styles.itemLabelDisabled}>
                        +300 clicks
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

AchievementStore.propTypes = {
    clicks: PropTypes.number.isRequired,
    setClicks: PropTypes.func.isRequired,
};

export default AchievementStore;
