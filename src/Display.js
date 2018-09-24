import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Currency } from './Currency';

export const Display = ({currencies}) => (
<table>
  <thead>
    <tr>
      <th>Cryptocurrency Name</th>
      <th>$USD</th>
    </tr>
  </thead>
  <tbody>
    {currencies.map((currency, i) =>
      <Currency key={i}
             {...currency}/>
      )}
  </tbody>
</table>
)
