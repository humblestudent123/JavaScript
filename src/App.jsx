
import './App.css';

function App() {
  return (
    <div className="main">
        
        <div className="h1">
          <h1 className='zagolov' id='zagolov1'>JS Forge</h1>
        </div>


  <div className="body">
  <nav className="tabs">
    <a href="#install">Установка</a>
    <a href="#usage">Использование</a>
    <a href="#faq">FAQ</a>
  </nav>

  <section id="install">
    <h2>Установка</h2>
    <p>
      Для начала перейдите по ссылке 
      <a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer">
        https://nodejs.org/en/download
      </a> 
      и скачайте Node.js
    </p>
  </section>

  <section id="usage">
    <h2>Использование</h2>
    <p>Контент использования...</p>
  </section>

  <section id="faq">
    <h2>FAQ</h2>
    <p>Вопросы...</p>
  </section>
</div>


    </div>
  );
}

export default App;
