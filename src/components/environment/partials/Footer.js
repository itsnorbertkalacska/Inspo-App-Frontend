import React from 'react';

const Footer = () => {
  const now = new Date();
  return (
    <footer className="text-center">
      <p>© {now.getFullYear()} Inspo App</p>
    </footer>
  );
};

export default Footer;
