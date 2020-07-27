import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';

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

ProductsOverviewScreen.navigationOptions = (navData) => ({
  headerTitle: 'All Products',
  headerRight: (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title="Cart"
      iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
      onPress={() => {
        navData.navigation.navigate('Cart');
      }}
    />
  </HeaderButtons>
  ),
});
