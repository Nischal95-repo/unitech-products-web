import { Container } from "@mui/material";
import ProductList from "../components/products/ProductList";
import CarouselComponent from "../components/shared/Carousel";

interface LoginScreenProps {
}

const HomeScreen: React.FC<LoginScreenProps> = () => {

    return (
        <Container>
            <CarouselComponent />
            <ProductList />
        </Container>
    )
}

export default HomeScreen;