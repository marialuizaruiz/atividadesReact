import React, { useState } from 'react';
import mulherIcon from '../assets/mulher.png';
import homemIcon from '../assets/homem.png';
import recarregarIcon from '../assets/recarregar.png';
import adicaoIcon from '../assets/adicao.png';
import subtracaoIcon from '../assets/subtracao.png';

function Contador() {
  const [contagemMulheres, setContagemMulheres] = useState(0);
  const [contagemHomens, setContagemHomens] = useState(0);

  // Atualizar contador
  const updateCounter = () => {
    const totalContagem = contagemMulheres + contagemHomens;
    return totalContagem;
  };

  // Adicionar 
  const addWoman = () => {
    setContagemMulheres(prevCount => prevCount + 1);
  };

  const addMan = () => {
    setContagemHomens(prevCount => prevCount + 1);
  };

  // Remover 
  const removeWoman = () => {
    if (contagemMulheres > 0) {
      setContagemMulheres(prevCount => prevCount - 1);
    }
  };

  const removeMan = () => {
    if (contagemHomens > 0) {
      setContagemHomens(prevCount => prevCount - 1);
    }
  };

  // Redefinir os contadores
  const resetCounters = () => {
    setContagemMulheres(0);
    setContagemHomens(0);
  };

  // Atualizar a contagem de gênero
  const updateGenderCount = () => {
    return (
      <>
        <h4 className="gender">Mulheres: {contagemMulheres}</h4>
        <h4 className="gender">Homens: {contagemHomens}</h4>
      </>
    );
  };

  return (
    <div>
      <style>{`
        .container {
          text-align: center;
          margin-top: 50px;
        }
        .counter {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .icon {
          width: 50px;
          cursor: pointer;
          margin: 5px;
        }
        .person-img {
          width: 100px;
        }
        .control-icons {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .gender-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gender {
          margin: 0 10px;
        }
      `}</style>
      <div className="container">
        <h2 className="total-text">Total</h2>
        <h3 className="counter">{updateCounter()}</h3>
        
        <div className="gender-container">
        <img src={mulherIcon} alt="Ícone de mulher" className="person-img" />
          <img src={homemIcon} alt="Ícone de homem" className="person-img" />
          <img src={recarregarIcon} alt="Ícone de recarregar" className="icon" style={{ position: 'absolute', top: 0, right: 0 }} onClick={resetCounters} />
        </div>

        <div className="control-icons">
          <img src={adicaoIcon} alt="Adicionar mulher" className="icon" style={{ marginRight: '10px' }} onClick={addWoman} />
          <img src={subtracaoIcon} alt="Subtrair mulher" className="icon" style={{ marginRight: '10px' }} onClick={removeWoman} />
          <img src={adicaoIcon} alt="Adicionar homem" className="icon" style={{ marginLeft: '10px' }} onClick={addMan} />
          <img src={subtracaoIcon} alt="Subtrair homem" className="icon" style={{ marginLeft: '10px' }} onClick={removeMan} />
        </div>

        <div className="gender-container">
          {updateGenderCount()}
        </div>
      </div>
    </div>
  );
}

export default Contador;