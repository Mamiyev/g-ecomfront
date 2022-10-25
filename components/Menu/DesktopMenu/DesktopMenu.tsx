import React from 'react';
import clsx from 'clsx';
import { useMenu } from '../../../hooks/useMenu';

import css from './DesktopMenu.module.css';

type IMenuProps = {};

export const DesktopMenu: React.FC<IMenuProps> = () => {
    const { isOpened, level, currentMenu, onSelectLevel } = useMenu();

    return (
        <div className={clsx(css.menuWrap, { [css.menuWrapShow]: isOpened })}>
            {currentMenu.map((el, i) => (
                <div key={i} className={css.menuLevel}>
                    {el.map((l) => (
                        <div key={l.name} className={css.item}>
                            {l.children && (
                                <button onClick={() => onSelectLevel(level + 1, l.children)}>{l.name}</button>
                            )}
                            {l.link && <a href="">{l.link}</a>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};