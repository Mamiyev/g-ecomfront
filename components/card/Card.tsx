import Link from 'next/link';
import React from 'react';
import css from './Card.module.css';
import card1 from '../../public/card-1.jpg';
import Image from 'next/image';
import Button from '../uikit/button/Button';
import FavoriteIcon from '../uikit/icons/FavoriteIcon';

export interface Category {
    id: number;
    name: string;
    image: string;
}

export interface ICardItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

export type ICardProps = {
    item: ICardItem;
};

const Card: React.FC<ICardProps> = ({ item }) => {
    return (
        <div className={css.container}>
            <Link href={`products/${item.id}`}>
                <div className={css.card}>
                    <div className={css.cardInfo}>
                        <Image src={item.images[0]} alt="" width="300" height="300" />
                        <h4>{item.title}</h4>
                        <div>{item.price} ₽</div>
                    </div>
                    <div className={css.buttonsWrap}>
                        <Button
                            variant="outlined"
                            className={css.button}
                            onClick={(e) => {
                                e.preventDefault();
                                // handle click
                            }}
                        >
                            Купить
                        </Button>
                        <button className={css.favoriteButton}>
                            <FavoriteIcon />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
