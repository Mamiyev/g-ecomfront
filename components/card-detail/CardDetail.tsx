import { ICardItem } from '../card/Card';
import Breadcrumbs from '../uikit/breadcrumbs/Breadcrumbs';
import Button from '../uikit/button/Button';
import Image from 'next/image';
import css from './CardDetail.module.css';

type ICardDetailProps = {
    data: ICardItem;
};

const CardDetail: React.FC<ICardDetailProps> = ({ data }) => {
    return (
        <>
            <Breadcrumbs
                className={css.breadcrumbs}
                items={[{ title: 'Продукты', link: '/products' }, { title: data.category?.name }]}
            />
            <div className={css.container}>
                <div className={css.detailWrapper}>
                    <div className={css.imagesBox}>
                        <Image src={data?.images?.[0]} alt="" width="500" height="500" />
                    </div>
                    <div className={css.infoBox}>
                        <h3>{data?.title}</h3>
                        <p>{data?.description}</p>
                        <p>{data?.price} ₽</p>
                        <Button>В корзину</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetail;
