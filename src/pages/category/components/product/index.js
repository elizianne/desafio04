import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Image, Title, Brand, Price,
} from './styles';

const Product = ({ product }) => (
  <Container to={`/products/${product.id}`}>
    <Image src={product.image} alt="" />
    <Title>{product.name}</Title>
    <Brand>{product.brand}</Brand>
    <Price>
      R$
      {product.price}
    </Price>
  </Container>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;
