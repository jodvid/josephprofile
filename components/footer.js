class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #111827;
          color: white;
          padding: 2rem 1rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          font-weight: bold;
          font-size: 1.25rem;
        }
        .footer-logo i {
          color: #3b82f6;
          margin-right: 0.5rem;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .footer-links a:hover {
          color: #3b82f6;
        }
        .footer-links i {
          margin-right: 0.5rem;
          width: 16px;
          height: 16px;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .social-links a {
          color: #d1d5db;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }
        .social-links a:hover {
          color: white;
          background: #3b82f6;
        }
        .copyright {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.5rem;
          width: 100%;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-logo">
            <i data-feather="cpu"></i>
            MechAssist Pro
          </div>
          
          <div class="footer-links">
            <a href="#about"><i data-feather="user"></i> About</a>
            <a href="#projects"><i data-feather="grid"></i> Projects</a>
            <a href="#services"><i data-feather="tool"></i> Services</a>
            <a href="#contact"><i data-feather="mail"></i> Contact</a>
          </div>
          
          <div class="social-links">
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
          </div>
          
          <div class="copyright">
            &copy; ${new Date().getFullYear()} MechAssist Pro. All rights reserved.
          </div>
        </div>
      </footer>
    `;
    
    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);