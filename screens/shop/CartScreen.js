import React from 'react';
import {
  View, Text, FlatList, StyleSheet, Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../../components/shop/CartItem';
import Colors from '../../constants/Colors';
import * as cartAction from '../../store/actions/cart';

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
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = Object.keys(state.cart.items).map((id) => ({
      productId: id,
      title: state.cart.items[id].productTitle,
      price: state.cart.items[id].productPrice,
      quantity: state.cart.items[id].quantity,
      sum: state.cart.items[id].sum,
    }));

    return transformedCartItems.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${Math.abs(cartTotalAmount.toFixed(2))}</Text>
        </Text>
        <Button color={Colors.accent} title="Order Now" disabled={cartItems.length === 0} />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.title}
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(cartAction.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
}
