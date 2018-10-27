import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CategoriesActions } from '../../../../store/ducks/categories';

import { Container, MenuItem } from './styles';

class Menu extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
    getCategoriesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getCategoriesRequest } = this.props;
    console.log('teste', getCategoriesRequest);

    getCategoriesRequest();
  }

  render() {
    const { categories } = this.props;
    console.log('categories ', categories);

    return (
      <Container>
        <h3>Camisetas</h3>
        <h3>Camisas</h3>
        <h3>Bonés</h3>
        <h3>Blusas</h3>
        <h3>Calçados</h3>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
