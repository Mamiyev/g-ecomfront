import { GetServerSideProps } from 'next';
import CardSlider from '../../components/card-slider/CardSlider';
import { ICardItem } from '../../components/card/Card';
import ProductsList from '../../components/products/ProductsList';

const Products: React.FC<any> = ({ data }) => {
    return (
        <>
            <CardSlider />
            <ProductsList data={data} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

export default Products;
