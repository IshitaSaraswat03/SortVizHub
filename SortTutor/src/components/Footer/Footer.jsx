import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2024 Your Website Name. All rights reserved.</p>
          <p>Designed and developed by You</p>
        </div>
        <div className="footer-icons">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.578 0-.284-.01-1.04-.015-2.042-3.348.727-4.042-1.61-4.042-1.61-.546-1.383-1.332-1.754-1.332-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.773.418-1.305.762-1.605-2.67-.303-5.466-1.336-5.466-5.93 0-1.31.468-2.38 1.237-3.224-.124-.303-.536-1.527.117-3.18 0 0 1.01-.322 3.3 1.23a11.523 11.523 0 0 1 3-.405c1.016.003 2.038.137 3 .405 2.287-1.552 3.297-1.23 3.297-1.23.656 1.653.244 2.877.12 3.18.77.844 1.236 1.914 1.236 3.224 0 4.607-2.8 5.623-5.476 5.92.43.373.818 1.102.818 2.22 0 1.605-.015 2.896-.015 3.29 0 .32.192.694.8.577C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M.96 24h4.08V7.993H.96zM16.57 7.995c-2.047 0-3.374 1.16-3.908 2.254h-.06V7.993H8v16.007h4.702v-8.453c0-2.2 1.417-3.809 3.747-3.809 2.72 0 3.788 2.064 3.788 4.786v8.476H24v-9.024c0-4.883-2.624-7.165-6.12-7.165-2.634 0-3.755 1.456-4.396 2.466h-.06V7.993h-4.68z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
