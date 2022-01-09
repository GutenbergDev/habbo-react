import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #;
`;

const Div2 = styled.div`
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  background-color: #ccc;
`;

let arr = [];


function Adiciona() {

  return (
    <Div>
      <button onClick={addCar}>Adicionar ao carrinho</button>
      <Div2></Div2>
    </Div>
  )
}

export default Adiciona;
