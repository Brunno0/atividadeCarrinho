import React from "react";
import { useState } from "react";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Produtos from "./Cards/Produtos"
import Carrinho from "./Carrinho/Carrinho";

function App() {
  const [listaDeProdutos] = useState(pacoteDeProdutos)
  const [carrinho, setCarrinho] = useState([])
  
  const adicionarAoCarrinho = (produto) => {
    
  }

 const removerDoCarrinho =(produto) =>{
 
   
 }

  const produtos = listaDeProdutos.map(item => {
    return <Produtos
      key={item.id}
      produto={item}
      adicionarAoCarrinho={adicionarAoCarrinho}
    />

  })
  return (
    <div>
          {produtos}
      <Carrinho 
          carrinho={carrinho}
          removerDoCarrinho={removerDoCarrinho}
      ></Carrinho>
    </div>
  );
}

export default App;
