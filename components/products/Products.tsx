import Card from '../card/Card';
import css from './Products.module.css';

const Products = () => {
    return (
        <div className={css.container}>
            <h2 className={css.cardsTitle}>Лидеры продаж</h2>
            <div className={css.cardsWrapper}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Products;
