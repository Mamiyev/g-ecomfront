import { PropsWithChildren } from 'react';
import Footer from './footer/Footer';
import { Header } from './header/Header';
import css from './Layout.module.css';

type ILayoutProps = PropsWithChildren<{}>;

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <div className={css.container}>
            <Header />
            <main className={css.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
