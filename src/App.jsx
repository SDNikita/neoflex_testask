// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import reproach from './assets/images/reproach.png'
import like from './assets/images/like.png'


function App() {

  return (
    <>
     {/* head*/}
     <header className='Head'>
        <div>
          <p> QPICK</p>
        </div>
        <div>
          <img className='imgHead' src={like} alt = "Отложить"/>
          <img className='imgHead' src={reproach} alt = "Корзина"/>
        </div>
     </header>

    <main>
      {/*наушниками*/}
      <section>
      </section>

      {/*Беспроводные наушниками*/}
      <section>
      </section>
    </main>
      
    {/* Footer*/}
      <footer>

      </footer>
    </>
  )
}

export default App
