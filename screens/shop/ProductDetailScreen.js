import React from 'react';
import {
  ScrollView, View, Text, Image, StyleSheet, Button,
} from 'react-native';
import { useSelector } from 'react-redux';

export default function ProductDetailScreen({ navigation }) {
  const productId = navigation.getParam('productId');
  const selectedProduct = useSelector(
    (state) => state.products.availableProducts
      .find((prod) => prod.id === productId),
  );

  const { title } = selectedProduct;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

ProductDetailScreen.navigationOptions = (navData) => ({
  headerTitle: navData.navigation.getParam('productTitle'),
});
