import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                {/*Esquerda*/}
                <View style={styles.leftWrapper}>
                    <Image source={{uri: logoUrl}} style={styles.image} />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titles}>{name}</Text>
                        <Text style={styles.subtitles}>{symbol}</Text>
                    </View>
                </View>

                {/*Direita*/}
                <View style={styles.rightWrapper}>
                    <Text style={styles.titles}>{currentPrice}</Text>
                    <Text style={styles.subtitles, {color: 'red'}}>{priceChangePercentage7d}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 48,
        width: 48,
    },
    titleWrapper: {
        marginLeft: 8, 
    },
    titles: {
        fontSize: 18,
    },
    subtitles: {
        marginTop: 4,
        fontSize: 14,
        color: '#A9ABB1',
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
})

export default ListItem