export type IMenuItem = {
    name: string;
    link?: string;
    children?: IMenuItem[];
};

export const data: IMenuItem[] = [
    {
        name: 'Продукты',
        children: [
            {
                name: 'Чай и кофе',
                children: [
                    {
                        name: 'Чай',
                        link: 'link',
                    },
                ],
            },
            {
                name: 'Сладости',
                children: [
                    {
                        name: 'Торты',
                        link: 'link',
                    },
                ],
            },
        ],
    },
    {
        name: 'Игрушки',
        children: [
            {
                name: 'Настольные игры',
                children: [
                    {
                        name: 'Шахматы',
                        link: 'link',
                    },
                ],
            },
        ],
    },
    {
        name: 'Бытовая техника',
        children: [
            {
                name: 'Техника для дома',
                children: [
                    {
                        name: 'Водонагреватели',
                        link: 'link',
                    },
                ],
            },
            {
                name: 'Техника для кухни',
                children: [
                    {
                        name: 'Кухонные весы',
                        link: 'link',
                    },
                ],
            },
        ],
    },
];
