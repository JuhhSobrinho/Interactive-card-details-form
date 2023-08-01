import './App.css';
import { main } from './utils/main';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    main();
  }, []);

  return (
    <div className="App">
      <main className="App-main">

        <section className='cards'>

          <div className='card1'>
            <div className='front-card'>
              <section className='esferas'>
                <div className='bola1'></div>
                <div className='bola2'></div>
              </section>

              <h4 className='number-card' id="number-card">0000 0000 0000 0000</h4>
              <div className='name-date'>
                <p className='dados-card' id='name-card'>Jane Appleseed</p>
                <p className='dados-card' id='mm-card'>00</p>
                <p className='dados-card' id='yy-card'>/00</p>
              </div>
            </div>
          </div>

          <div className='card2'>
            <div className='back-card'>
              <label className='dados-card' id='cvc-card'>000</label>
            </div>
          </div>

        </section>



        <div className='formulario-card'>

          <label className='titulo'> Cardholder Name</label>
          <input type='text' className='dados' id='cardholder-name' placeholder='e.g. Jane Appleseed'></input>
          <h6 className='error-blank'>can't be blank</h6>

          <label className='titulo'> Card Number</label>
          <input type='number' className='dados' id="cardNumber" placeholder='e.g. 1234 5678 9123 0000'></input>
          <h6 className='error-blank'>can't be blank</h6>


          <section className='date-cvc'>
            <div className='date'>
              <label className='titulo'>Exp. Date (MM/YY)</label>
              <div className='mm-yy'>
                <input type='number' className='dados' id='mm' placeholder='MM'></input>
                <input type='number' className='dados' id='yy' placeholder='YY'></input>
                <h6 className='error-blank'>can't be blank</h6>
              </div>
            </div>

            <div className='cvc'>
              <label className='titulo'>cvc</label>
              <input type='number' className='dados' id='cvc' placeholder='e.g. 123'></input>
              <h6 className='error-blank'>can't be blank</h6>
            </div>
          </section>



          <input type='submit' className='botao' id="botao" value='Confirm'></input>


        </div>
      </main>
    </div>
  );
}
export default App;
