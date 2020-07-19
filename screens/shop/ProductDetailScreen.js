import React from 'react';
import {
  ScrollView, View, Text, Image, StyleSheet, Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from '../../store/actions/cart';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  infoBox: {
    marginHorizontal: 20,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
  },
});

export default function ProductDetailScreen({ navigation }) {
  const productId = navigation.getParam('productId');
  const selectedProduct = useSelector(
    (state) => state.products.availableProducts
      .find((prod) => prod.id === productId),
  );
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(cartActions.addToCart(selectedProduct));
  };

  const {
    title, imageUrl, price, description,
  } = selectedProduct;

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.actions}>
        <Button title="Add to Cart" onPress={onAddToCart} />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Text>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
}

ProductDetailScreen.navigationOptions = (navData) => ({
  headerTitle: navData.navigation.getParam('productTitle'),
});
