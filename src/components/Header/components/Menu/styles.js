import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 35px;
  background: #ff9696;
  border-radius: 3px;
  color: #fff;
  width: 100%;
  height: 70px;

  h3 {
    padding: 10px;
  }
`;

export const MenuItem = styled(Link)`
  color: rgba(100%, 100%, 100%, 0.8);
  text-transform: uppercase;
  margin-right: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;

  &.active {
    color: rgba(100%, 100%, 100%, 7);
  }

  &:hover {
    color: rgba(100%, 100%, 100%, 7);
  }
`;
