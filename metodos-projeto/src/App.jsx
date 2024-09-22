import './App.css';

function App() {

  function retorno() {
    const lista = [10, 20, 30, 40];

    const filtrar = lista.filter((i) => i === 10 || i === 20)
    .map((i) => i * 10)
    .reduce((total, i) => {
      return total + i
    }, 0);
    
    const body = document.querySelector("body");

    body.innerHTML = `O Resultado foi: ${filtrar}`;
  }


  return (
    <div className='container'>
      <button onClick={retorno}>Ver Resultado</button>
    </div>
  )
}

export default App
