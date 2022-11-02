import { GetServerSideProps } from 'next';
import CardDetail from '../../components/card-detail/CardDetail';

const Product = ({ data }: any) => {
    return <CardDetail data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

export default Product;
