import React from 'react';

const CartContext = React.createContext({
  // 자동 완성 함수 생성을 위한 초기값
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
});

export default CartContext;
