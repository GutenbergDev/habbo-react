import React from "react";
import styled from "styled-components";
import Adiciona from "./Adiciona";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 400px;
  height: 200px;
`;

let preco = 255;


function App() {
  const [number, setNumber] = React.useState(1);

  function handleClick() {
    setNumber((number) => {
      return number + 1;
    })
  }
  
  return (
    <>
    <Div>
      <span>Tênis nike</span>
      <p>Preço: R$ {preco}</p>
      <p>{number}</p>
      <button style={{ width: '100px' }} onClick={handleClick}>Quantidade</button><br></br>
      {number > 1 ? <span>{preco * number}</span> : null}
      
    </Div>
    <Adiciona />
    </>
  );
}

export default App;
