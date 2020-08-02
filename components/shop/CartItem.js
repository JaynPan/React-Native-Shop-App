import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontWeight: 'bold',
    color: '#888',
    fontSize: 16,
    marginRight: 5,
  },
});

export default function CartItem({
  onRemove, quantity, title, amount,
}) {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>
          {quantity}
        </Text>
        <Text style={styles.mainText}>
          {title}
        </Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>{`$ ${amount}`}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
