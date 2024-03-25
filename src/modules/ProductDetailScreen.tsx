import { Breadcrumbs, Button, Card, Container, Link, Stack, Typography } from "@mui/material";
import ProductList from "../components/products/ProductList";
import CarouselComponent from "../components/shared/Carousel";
import uni from "../images/uni.jpg";
import Divider from '@mui/material/Divider';

interface LoginScreenProps {
}

const ProductDetailScreen: React.FC<LoginScreenProps> = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/home" onClick={handleClick}>
            HOME
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/products"
            onClick={handleClick}
        >
            Products
        </Link>,
        <Typography key="3" color="text.primary">
            Product
        </Typography>,
    ];
    return (
        <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ margin: 20 }}>
                {breadcrumbs}
            </Breadcrumbs>
            <div style={{ display: 'flex' }}>
                <Card style={{ display: 'flex', flex: 2, flexDirection: 'column', margin: 10 }}>
                    <img width={400} height={400} src={uni}></img>
                </Card>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 4, marginLeft: 8 }}>
                    <Typography variant="h4">Perfumed Herbal Phenyl</Typography>
                    <Divider style={{ color: '#ef3636' }} />
                    <Stack style={{ margin: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant="h6" style={{ margin: 5 }}>Category: </Typography>
                            <Typography variant="h6" style={{ color: '#ef3636', margin: 5 }}>Bathroom & Toilet</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                            <Typography variant="h6" style={{ margin: 5 }}>Available in</Typography>
                            <Button variant="outlined" style={{ color: '#ef3636', margin: 5 }}>250ml</Button>
                            <Button variant="outlined" style={{ color: '#ef3636', margin: 5 }}>500ml</Button>
                            <Button variant="outlined" style={{ color: '#ef3636', margin: 5 }}>250ml</Button>
                        </div>
                    </Stack>
                    <Divider style={{ color: '#ef3636' }} />

                    <Stack style={{ margin: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant="body1">Weight	: </Typography>
                            <Typography variant="body2" style={{ color: '#ef3636' }}>1.1 kg</Typography>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant="body1">Dimensions: </Typography>
                            <Typography variant="body2" style={{ color: '#ef3636' }}>19.5 × 7.6 × 12.5 cm</Typography>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant="body1">Volume: </Typography>
                            <Typography variant="body2" style={{ color: '#ef3636' }}>1 Liter, Pack of 2* 1 ltr, 5 Liter</Typography>
                        </div>
                    </Stack>

                </div>
            </div>
            <Typography variant="caption" sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
            }}>A handy Lorem Ipsum Generator that helps to create dummy text for all layout needs. ... Dummy Text. Lorem ipsum. Cicero Cicero (en) Li Europan lingues</Typography>
        </Container>
    )
}

export default ProductDetailScreen;

function handleClick(event: any): void {
    throw new Error("Function not implemented.");
}
