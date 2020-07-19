import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

export default function ProductsOverviewScreen({ navigation }) {
  const products = useSelector((state) => state.products.availableProducts);

  const onViewDetail = (item) => () => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      productTitle: item.title,
    });
  };

  const onAddCart = () => {};

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
          onAddCart={onAddCart}
        />
      )}
    />
  );
}

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};
