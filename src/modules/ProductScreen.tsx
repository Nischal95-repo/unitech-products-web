import { Card, Container, Typography } from "@mui/material";
import uni from "../images/uni.jpg";
import { useNavigate } from "react-router-dom";

interface LoginScreenProps {
}

const ProductScreen: React.FC<LoginScreenProps> = () => {
    function myFunction(item: any) {
        return <ProductCard />
    }
    return (
        <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5, 6, 7].map(myFunction)}
        </Container>
    )
}

const ProductCard = () => {
    const navigate = useNavigate();
    return (
        <Card style={{ display: 'flex', flexDirection: 'column', backgroundColor: ' #f9d2d4', margin: 10 }} onClick={() => navigate("/1")}>
            <img width={250} height={250} src={uni}></img>
            <div style={{ marginLeft: 8, maxWidth: 200 }}>
                <Typography variant="h6">Product Name</Typography>
                <Typography variant="caption" sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                }}>A handy Lorem Ipsum Generator that helps to create dummy text for all layout needs. ... Dummy Text. Lorem ipsum. Cicero Cicero (en) Li Europan lingues</Typography>
            </div>
        </Card>
    )
}

export default ProductScreen;