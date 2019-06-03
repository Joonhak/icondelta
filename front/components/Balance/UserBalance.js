import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

const UserBalance = memo(() => {
  const { selectedToken } = useSelector(state => state.tokens);
  const { deposited, undeposited } = useSelector(state => state.iconex);

  const tableData = [
    {
      name: 'ICX',
      icondelta: deposited.icx,
      wallet: undeposited.icx,
    },
    {
      name: selectedToken.symbol,
      icondelta: deposited.token[selectedToken.name],
      wallet: undeposited.token[selectedToken.name],
    },
  ];
  return (
    <Table
      size='middle'
      style={{ padding: '0' }}
      pagination={false}
      dataSource={tableData}
      rowKey='name'
    >
      <Table.Column title='Name' dataIndex='name' key='name' width={'34%'} />
      <Table.Column
        title='Wallet'
        dataIndex='wallet'
        key='wallet'
        width={'33%'}
      />
      <Table.Column
        title='icondelta'
        dataIndex='icondelta'
        key='icondelta'
        width={'33%'}
      />
    </Table>
  );
});

export default UserBalance;
