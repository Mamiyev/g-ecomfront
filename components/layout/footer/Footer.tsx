import React from 'react';
import css from './Footer.module.css';

type IFooterProps = {};

const Footer: React.FC<IFooterProps> = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footerCopyright}>
                <span>2022 © Gardener — модный интернет-магазин одежды, обуви и аксессуаров.</span>
                <span>Все права защищены.</span>
            </div>
        </footer>
    );
};

export default Footer;
