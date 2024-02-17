// components/Layout.tsx
import React , {ReactNode} from 'react';
import { Contact } from '../Contact'
import { Nav } from '../Nav';
import { Footer } from '../Footer';

interface LayoutProps {
    children: ReactNode;
  }

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Contact />
            {/* <Nav /> */}
            <main>{children}</main>
            <Footer />
        </div>
    );
};

