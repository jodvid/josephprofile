class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          position: fixed;
          width: 96%;
          top: 0;
          z-index: 1000;
        }
        .logo {
          color: #1f2937;
          font-weight: bold;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          color: #3b82f6;
          margin-right: 0.5rem;
          width: 50px;   /* adjust as needed */
          height: 50px;  /* adjust as needed */
          vertical-align: middle;
        }
        .desktop-menu {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 10;
          padding: 0;
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #1f2937;
        }
        a {
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
          display: flex;
          align-items: center;
        }
        a:hover {
          color: #3b82f6;
        }
        .nav-link i {
          margin-right: 0.5rem;
          width: 16px;
          height: 16px;
        }
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          padding: 1rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .mobile-menu.active {
          display: block;
        }
        .mobile-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-menu a {
          padding: 0.75rem 0;
          display: flex;
          align-items: center;
        }
        .hidden {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <img src="/assets/logo.png" alt="Logo" class="logo-icon" /> 
        </a>
        
        <ul class="desktop-menu">
          <li><a href="#about" class="nav-link"><i data-feather="user"></i> About</a></li>
          <li><a href="#projects" class="nav-link"><i data-feather="grid"></i> Projects</a></li>
          <li><a href="#services" class="nav-link"><i data-feather="tool"></i> Services</a></li>
          <li><a href="#contact" class="nav-link"><i data-feather="mail"></i> Contact</a></li>
        </ul>
        
        <button class="mobile-menu-button menu-button" aria-label="Toggle menu">
          <i data-feather="menu"></i>
          <i data-feather="x" class="hidden"></i>
        </button>
        
        <div class="mobile-menu hidden">
          <ul>
            <li><a href="#about" class="nav-link"><i data-feather="user"></i> About</a></li>
            <li><a href="#projects" class="nav-link"><i data-feather="grid"></i> Projects</a></li>
            <li><a href="#services" class="nav-link"><i data-feather="tool"></i> Services</a></li>
            <li><a href="#contact" class="nav-link"><i data-feather="mail"></i> Contact</a></li>
          </ul>
        </div>
      </nav>
    `;
    
    // Mobile menu toggle
    const menuButton = this.shadowRoot.querySelector('.menu-button');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
    const menuIcon = this.shadowRoot.querySelector('.menu-button svg[data-feather="menu"]');
    const closeIcon = this.shadowRoot.querySelector('.menu-button svg[data-feather="x"]');
    
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
    
    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);