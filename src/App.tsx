import houseLogo from './assets/houseLogo2.jpg';
import './App.css';
import { FaInstagram } from 'react-icons/fa'; // Instagram icon
import { SiGmail } from 'react-icons/si';     // Gmail icon

function App() {
  return (
    <div className="landing-container">
      <header>
        <a
          href="https://instagram.com/hausofluar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={houseLogo} className="house-logo" alt="Haus of Luar Logo" />
        </a>
      </header>

      <main>
        <h1>We're Coming Soon!</h1>
        <p>Our website is currently under construction.</p>
        <p>Follow us on Instagram or send us an email for inquiries.</p>

        <div className="links">
          <a
            href="https://instagram.com/hausofluar"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
          >
            <FaInstagram size={30} />
          </a>

          <a
            href="mailto:info@hausofluar.com"
            className="icon-button"
          >
            <SiGmail size={30} />
          </a>
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Haus of Luar</p>
      </footer>
    </div>
  );
}

export default App;
