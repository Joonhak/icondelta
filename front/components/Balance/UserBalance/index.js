import React from 'react';

import { wrapper } from './index.scss';

const UserBalance = ({ token, deposited, undeposited }) => {
  return (
    <table className={wrapper}>
      <thead>
        <tr>
          <th width='20%'>name</th>
          <th width='40%'>wallet</th>
          <th width='40%'>score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ICX</td>
          <td>{undeposited.icx}</td>
          <td>{deposited.icx}</td>
        </tr>
        <tr>
          <td>{token.symbol}</td>
          <td>{undeposited.token}</td>
          <td>{deposited.token}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserBalance;
