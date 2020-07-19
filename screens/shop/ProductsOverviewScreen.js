import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

export default function ProductsOverviewScreen({ navigation }) {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const onViewDetail = (item) => () => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      productTitle: item.title,
    });
  };

  const onAddCart = (item) => () => {
    dispatch(cartActions.addToCart(item));
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem
          image={item.imageUrl}
          title={item.title}
          price={item.price}
          onViewDetail={onViewDetail(item)}
          onAddCart={onAddCart(item)}
        />
      )}
    />
  );
}

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};
