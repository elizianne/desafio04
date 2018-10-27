import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';

import { Creators as ProductsActions } from '../../store/ducks/products';

import Product from './components/product';
import Loading from '../../components/Loading';

class Category extends Component {
  static propTypes = {
    getProductsRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  componentDidMount() {
    this.requestProducts();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      this.requestProducts();
    }
  }

  requestProducts = () => {
    const { match, getProductsRequest } = this.props;

    getProductsRequest(match.params.id);
  };

  render() {
    const { products } = this.props;
    return (
      <Container>
        {products.loading ? (
          <Loading />
        ) : (
          products.data.map(product => <Product key={product.id} product={product} />)
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
