import React from 'react';
import styled from 'styled-components';
import { List, Card } from 'antd';
import SellingOrderList from './SellingOrderList';
import BuyingOrderList from './BuyingOrderList';

export const TextColoredList = styled(List)`
  display: block;
  & .ant-list-item {
    text-align: center;
    margin-bottom: 0 !important;
    & .ant-card {
      border: none;
      & .ant-card-body {
        padding: 15px;
        color: ${props => props.color};
        font-size: ${props => (props.bigfont ? '16px' : '14px')};
        font-weight: ${props => (props.bigfont ? '600' : '400')};
      }
    }
  }
`;

const data = [{ title: 'Amount' }, { title: 'Price' }, { title: 'Total' }];

export default () => {
  return (
    <>
      <TextColoredList
        bigfont
        color='black'
        grid={{ gutter: 0, column: 3 }}
        dataSource={data}
        renderItem={item => (
          <List.Item key='amount'>
            <Card>{item.title}</Card>
          </List.Item>
        )}
      />
      <SellingOrderList />
      <BuyingOrderList />
    </>
  );
};
