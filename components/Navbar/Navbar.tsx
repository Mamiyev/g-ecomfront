import React, { Dispatch, SetStateAction, useState } from 'react';
import clsx from 'clsx';
import css from './Navbar.module.css';
import { data, IMenuItem } from './mockData';
import ArrowLeftIcon from '../uikit/icons/ArrowLeftIcon';
import ArrowForwardIcon from '../uikit/icons/ArrowForwardIcon';

type IMenuProps = {
    isOpened: boolean;
    setIsOpened: Dispatch<SetStateAction<boolean>>;
};

const Menu: React.FC<IMenuProps> = ({ isOpened, setIsOpened }) => {
    const [level, setLevel] = useState<number>(1);
    const [currentMenu, setCurrentMenu] = useState<IMenuItem[][]>([data]);

    const onSelectLevel = (level: number, menu?: IMenuItem[]) => {
        if (!menu) {
            return;
        }

        setLevel(level);
        setCurrentMenu((l) => {
            l[level] = menu;
            return l;
        });
    };

    const onMoveBackLevel = () => {
        setLevel(level - 1);
        setCurrentMenu((l) => {
            l[level] = [];
            return l;
        });
    };

    return (
        <nav role="navigation">
            <div
                className={clsx(css.menuBox, {
                    [css.menuBoxShow]: isOpened,
                })}
            >
                <div className={css.menuHeader}>
                    {level > 1 && (
                        <button onClick={() => onMoveBackLevel()} className={css.backButton}>
                            <ArrowLeftIcon />
                            Назад
                        </button>
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
                                        <button
                                            onClick={() => onSelectLevel(level + 1, item.children)}
                                            className={clsx(css.categoryButton)}
                                        >
                                            {item.name}
                                            <ArrowForwardIcon />
                                        </button>
                                    )}
                                    {item.link && <a href={item.link}>{item.name}</a>}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Menu;
