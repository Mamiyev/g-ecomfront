import { GetServerSideProps } from 'next';
import CardDetail from '../../components/cardDetail/CardDetail';


const Product = ({ id }: any) => {
    return <CardDetail id={id} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    return {
        props: {
            id,
        },
    };
};

export default Product;
