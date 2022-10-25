import React from 'react';
import useBreakpoint from 'use-breakpoint';
import { useMenu } from '../../hooks/useMenu';
import { DesktopMenu } from '../Menu/DesktopMenu/DesktopMenu';
import { MobileMenu } from '../Menu/MobileMenu/MobileMenu';

import css from './Header.module.css';

type IHeaderProps = {};
const BREAKPOINTS = { mobile: 0, table: 768, desktop: 1280 };

export const Header: React.FC<IHeaderProps> = () => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
    const { setIsOpened } = useMenu();

    return (
        <div className={css.header}>
            <button onClick={() => setIsOpened((prev) => !prev)}>Open</button>
            {breakpoint === 'desktop' ? <DesktopMenu /> : <MobileMenu />}
        </div>
    );
};
