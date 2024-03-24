import { Card, Container } from "@mui/material";
import Product from "./Product";


interface ProductListProps {
}

const ProductList: React.FC<ProductListProps> = () => {

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default ProductList;