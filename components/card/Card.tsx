import Link from 'next/link';
import React from 'react';
import css from './Card.module.css';
import card1 from '../../public/card-1.jpg';
import Image from 'next/image';

type ICardProps = {};

const Card: React.FC<ICardProps> = () => {
    return (
        <div className={css.container}>
            <Link href="/">
                <div className={css.card}>
                    <Image src={card1} alt="" />
                    <h4>Title</h4>
                    <div>description</div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
