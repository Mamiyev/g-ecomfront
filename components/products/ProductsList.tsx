import Card, { ICardItem, ICardProps } from '../card/Card';
import css from './ProductsList.module.css';

type IProductListProps = ICardItem[];

const ProductsList: React.FC<any> = ({ data }) => {
    return (
        <div className={css.container}>
            <h2 className={css.cardsTitle}>Лидеры продаж</h2>
            <div className={css.cardsWrapper}>
                {data?.slice(0, 15).map((el: any) => (
                    <Card key={el.id} item={el} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
