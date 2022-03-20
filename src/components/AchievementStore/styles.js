import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 16,
    },
    itemsContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    itemLabel: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green',
    },
    itemLabelDisabled: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#bfbfbf',
    },
    itemButton: {
        margin: 16,
    },
});

export default styles;
