import { Card, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductListProps {
}

const Product: React.FC<ProductListProps> = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', padding: 15 }}>
            <Card style={{ display: 'flex' }} onClick={() => navigate("/1")}>
                <img width={350} src="https://www.vibhavamart.com/wp-content/uploads/2021/11/Broom-2.jpg"></img>
            </Card>
        </div>
    )
}

export default Product;