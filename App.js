import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import woodBackground from './src/assets/wood.jpg';
import CookieButton from "./src/components/CookieButton/CookieButton";
import Display from "./src/components/Display/Display";
import AchievementStore from "./src/components/AchievementStore/AchievementStore";

const App = () => {
    const [clicks, setClicks] = useState(0);
    const [level, setLevel] = useState(1);

    function powerOfTwo(x) {
        return Math.log2(x) % 1 === 0;
    }

    const calculateLevel = () => {
        if (clicks > 9 && clicks < 20) {
            setLevel(2);
        }
        if (clicks > 19) {
            if (powerOfTwo(clicks / 10)) {
                setLevel(level + 1)
            }
        }
    }

    const onCookieClick = () => {
        setClicks(clicks + 1);
    };

    useEffect(() => {
        calculateLevel();
    }, [clicks])

    return (
        <ImageBackground source={woodBackground} style={styles.container}>
            <Display clicks={clicks} level={level} />
            <CookieButton onClick={() => onCookieClick()}/>
            <AchievementStore clicks={clicks} setClicks={setClicks} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
