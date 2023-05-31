import logoImage from './images/Rustic_Printed-removebg-preview.png'

function App() {
  return (
    <div className="App">
      <div className="wrapLogin">
        <form className="forLogin">
          <span className="titleLogin">Boas vindas!</span>

          <span className="titleLogin">
            <img src={logoImage} ></img>
          </span>

          <div className='inputs'>
            <input></input>
            <input></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
