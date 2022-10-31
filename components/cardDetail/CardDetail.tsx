import css from './CardDetail.module.css';

type ICardDetailProps = {
    id: number;
};

const CardDetail: React.FC<ICardDetailProps> = ({ id }) => {
    return (
        <div className={css.container}>
            <div>Detail Page {id}</div>
        </div>
    );
};

export default CardDetail;
