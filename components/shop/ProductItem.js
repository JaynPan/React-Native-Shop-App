import React from 'react';
import {
  View, Text, Image, StyleSheet, Button,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  product: {
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5, // for andriod
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 300,
    margin: 20,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',

  },
  info: {
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
  },
});

export default function ProductItem({
  image, title, price, onViewDetail, onAddCart,
}) {
  return (
    <TouchableOpacity onPress={onViewDetail}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.info}>
          <View style={styles.detailes}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>
            <Button color={Colors.accent} title="View Details" onPress={onViewDetail} />
            <Button color={Colors.accent} title="To Cart" onPress={onAddCart} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
