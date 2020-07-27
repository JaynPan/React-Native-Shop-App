import React from 'react';
import {
  View, Text, FlatList, StyleSheet, Button,
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5, // for andriod
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  summaryText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  amount: {
    color: Colors.accent,
  },
});

export default function CartScreen() {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = Object.keys(state.cart.items).map((item) => ({
      productId: item.id,
      productTitle: item.productTitle,
      productPrice: item.productPrice,
      quantiity: item.quantiity,
      sum: item.sum,
    }));

    return transformedCartItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button color={Colors.accent} title="Order Now" disabled={cartItems.length === 0} />
      </View>
      <View>
        <Text>Cart Items Here</Text>
      </View>
    </View>
  );
}
