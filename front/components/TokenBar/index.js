import React, { useState, useCallback } from 'react';
import { Card } from 'antd';

import TokenSearchInput from './TokenSearchInput';
import TokenList from './TokenList';

export default () => {
  const [searchText, setSearchText] = useState('');

  const setText = useCallback(e => {
    setSearchText(e.target.value);
  });

  return (
    <Card
      title={<TokenSearchInput setText={setText} />}
      style={{ marginTop: '10px' }}
      bodyStyle={{ padding: '10px' }}
    >
      <TokenList searchText={searchText} />
    </Card>
  );
};
