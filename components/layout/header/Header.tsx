import React from 'react';
import useBreakpoint from 'use-breakpoint';
import { useMenu } from '../../../hooks/useMenu';
import { DesktopMenu } from '../../menu/desktopMenu/DesktopMenu';
import { MobileMenu } from '../../menu/mobileMenu/MobileMenu';
import Button from '../../uikit/button/Button';
import AvatarIcon from '../../uikit/icons/AvatarIcon';
import BasketIcon from '../../uikit/icons/BasketIcon';
import MenuIcon from '../../uikit/icons/MenuIcon';
import Input from '../../uikit/input/Input';

import css from './Header.module.css';

type IHeaderProps = {};
const BREAKPOINTS = { mobile: 0, table: 768, desktop: 1280 };

export const Header: React.FC<IHeaderProps> = () => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
    const { setIsOpened } = useMenu();

    return (
        <header className={css.header}>
            <div className={css.container}>
                <div className={css.logoWrapper}>
                    <div className={css.logo}>
                        <h3>Gardener</h3>
                    </div>
                    <Button variant="outlined" className={css.menuButton} onClick={() => setIsOpened((prev) => !prev)}>
                        <MenuIcon />
                        Каталог
                    </Button>
                </div>
                <div className={css.searchBox}>
                    <Input placeholder="Поиск товаров" />
                    <Button>Найти</Button>
                </div>
                <div className={css.iconsWrapper}>
                    <div className={css.address}></div>
                    <div className={css.basket}>
                        <a className={css.icon} href="#">
                            <BasketIcon />
                            <span>Корзина</span>
                        </a>
                    </div>
                    <div className={css.logIn}>
                        <a className={css.icon} href="#">
                            <AvatarIcon />
                            <span>Войти</span>
                        </a>
                    </div>
                </div>
                {breakpoint === 'desktop' ? <DesktopMenu /> : <MobileMenu />}
            </div>
        </header>
    );
};
