import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import cookie from '../../assets/cookie.png';

const CookieButton = props => {

    let animation = new Animated.Value(0);

    const triggerAnimation = () => {
        animation.setValue(0);
        Animated.timing(animation, {
            duration: 150,
            toValue: 2,
            ease: Easing.bounce,
            useNativeDriver: false,
        }).start(() => props.onClick());
    }

    const interpolated = animation.interpolate({
        inputRange: [0, .5, 1, 1.5, 2],
        outputRange: [0, -15, 0, 15, 0]
    })

    const animationStyle = {
        transform: [
            { translateX: interpolated }
        ]
    }

    return (
        <TouchableWithoutFeedback onPress={() => triggerAnimation()}>
            <Animated.View style={animationStyle}>
                <Image source={cookie} />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

CookieButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CookieButton;

