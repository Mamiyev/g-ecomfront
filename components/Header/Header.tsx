import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import css from './Header.module.css';

type IHeaderProps = {};

export const Header: React.FC<IHeaderProps> = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <div className={css.header}>
            <button onClick={() => setIsOpened((prev) => !prev)}>Open</button>
            <Navbar isOpened={isOpened} setIsOpened={setIsOpened} />
        </div>
    );
};
