import Link from 'next/link';
import React from 'react';
import useBreakpoint from 'use-breakpoint';
import { useMenu } from '../../../hooks/useMenu';
import { DesktopMenu } from '../../menu/DesktopMenu/DesktopMenu';
import { MobileMenu } from '../../menu/MobileMenu/MobileMenu';
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
                        <Link href="/products">
                            <a>Gardener</a>
                        </Link>
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
                        <Link href="/cart">
                            <a className={css.icon}>
                                <BasketIcon />
                                <span>Корзина</span>
                            </a>
                        </Link>
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
