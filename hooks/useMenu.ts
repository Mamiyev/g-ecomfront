import { useContext } from 'react';
import { MenuContext } from '../context/MenuContextProvider';

export const useMenu = () => {
    const ctx = useContext(MenuContext);
    if (ctx === null) throw new Error('useMenu must be used within an MenuContext');
    return ctx;
};
