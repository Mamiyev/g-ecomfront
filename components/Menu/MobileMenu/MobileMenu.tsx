import React from 'react';
import clsx from 'clsx';
import css from './MobileMenu.module.css';
import ArrowLeftIcon from '../../uikit/icons/ArrowLeftIcon';
import ArrowForwardIcon from '../../uikit/icons/ArrowForwardIcon';
import { useMenu } from '../../../hooks/useMenu';
import Button from '../../uikit/button/Button';

type IMenuProps = {};

export const MobileMenu: React.FC<IMenuProps> = () => {
    const { isOpened, level, setLevel, setIsOpened, currentMenu, setCurrentMenu, onSelectLevel } = useMenu();

    const onMoveBackLevel = () => {
        setLevel(level - 1);
        setCurrentMenu((l) => {
            l[level] = [];
            return l;
        });
    };

    return (
        <div
            className={clsx(css.menuBox, {
                [css.menuBoxShow]: isOpened,
            })}
        >
            <div className={css.menuHeader}>
                {level > 1 && (
                    <Button variant="outlined" onClick={() => onMoveBackLevel()} className={css.backButton}>
                        <ArrowLeftIcon />
                        Назад
                    </Button>
                )}
                {level === 1 && <span>Категории</span>}
                <button onClick={() => setIsOpened(false)} className={css.button}>
                    X
                </button>
            </div>
            <div
                className={css.menuLevel}
                style={{ transform: `translateX(calc(-100% * ${level - 1} - 24px * ${level - 1}))` }}
            >
                {currentMenu.map((category, i) => (
                    <div key={i}>
                        {category.map((item) => (
                            <div key={item.name} className={css.item}>
                                {item.children && (
                                    <a
                                        onClick={() => onSelectLevel(level + 1, item.children)}
                                        className={clsx(css.categoryButton)}
                                    >
                                        {item.name}
                                        <ArrowForwardIcon />
                                    </a>
                                )}
                                {item.link && <a href={item.link}>{item.name}</a>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
