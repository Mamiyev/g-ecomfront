import { createContext, PropsWithChildren, useState } from 'react';
import { data, IMenuItem } from '../components/Menu/mockData';

type MenuContextProvider = PropsWithChildren<{}>;
export type IMenuContext = {
    isOpened: boolean;
    level: number;
    currentMenu: IMenuItem[][];
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    setCurrentMenu: React.Dispatch<React.SetStateAction<IMenuItem[][]>>;
    onSelectLevel: (level: number, menu?: IMenuItem[]) => void;
};

export const MenuContext = createContext<IMenuContext | null>(null);

export const MenuContextProvider: React.FC<MenuContextProvider> = ({ children }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
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

    return (
        <MenuContext.Provider
            value={{
                isOpened,
                level,
                currentMenu,
                setIsOpened,
                setLevel,
                setCurrentMenu,
                onSelectLevel,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};
