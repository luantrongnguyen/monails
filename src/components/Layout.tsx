import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchWrapper from './SearchWrapper';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <SearchWrapper />
      <div className="main-content-wrapper d-flex clearfix">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
