import React from 'react';
import clsx from 'clsx';
import { useMenu } from '../../../hooks/useMenu';
import ArrowForwardIcon from '../../uikit/icons/ArrowForwardIcon';

import css from './DesktopMenu.module.css';

type IMenuProps = {};

export const DesktopMenu: React.FC<IMenuProps> = () => {
    const { isOpened, level, currentMenu, onSelectLevel } = useMenu();

    return (
        <div className={clsx(css.menuWrap, { [css.menuWrapShow]: isOpened })}>
            <div className={css.menuLevel}>
                {currentMenu.map((el, i) => (
                    <div key={i}>
                        {el.map((l) => (
                            <div key={l.name} className={css.item}>
                                {l.children && (
                                    <a
                                        onClick={() => onSelectLevel(level + 1, l.children)}
                                        className={css.categoryButton}
                                    >
                                        {l.name}
                                        <ArrowForwardIcon />
                                    </a>
                                )}
                                {l.link && <a href={l.link}>{l.name}</a>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
