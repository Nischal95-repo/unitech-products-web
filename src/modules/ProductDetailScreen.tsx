import { Breadcrumbs, Button, Card, Container, Stack, Typography } from "@mui/material";
import ProductList from "../components/products/ProductList";
import CarouselComponent from "../components/shared/Carousel";
import uni from "../images/uni.jpg";
import Divider from '@mui/material/Divider';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ProductType } from "../core/product";

interface ProductInterface {
    product: ProductType
}

const ProductDetailScreen: React.FC<any> = () => {
    const param = useParams()
    const [product, setProduct] = useState<ProductType>()
    const breadcrumbs = [
        <Link  key="1" color="inherit" to="/home" >
            HOME
        </Link>,
        <Link
            
            key="2"
            color="inherit"
            to="/products"
        >
            Products
        </Link>,
        <Typography key="3" color="text.primary">
            Product
        </Typography>,
    ];

    useEffect(() => {
        console.log('param', param)
        const fetchPrd = async () => {
            if (param?.id) {
                let snapShot = await getDoc(doc(db, "products", param?.id))
                if (snapShot.exists()) {
                    setProduct(snapShot.data() as ProductType)
                }
            }
        }
        fetchPrd()
    }, [])
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
                    <Typography variant="h4">{product?.name}</Typography>
                    <Divider style={{ color: '#ef3636' }} />
                    <Stack style={{ margin: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant="h6" style={{ margin: 5 }}>Category: </Typography>
                            <Typography variant="h6" style={{ color: '#ef3636', margin: 5 }}>{product?.category}</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >
                            <Typography variant="h6" style={{ margin: 5 }}>Available in</Typography>
                            {product?.qty?.map((item,idx) => {
                                
                                return (
                                    <Button variant="outlined" style={{ color: '#ef3636', margin: 5 }}>{`${item} ${product.unit.toLowerCase()}`}</Button>
                                )
                            })}

                            {/* <Button variant="outlined" style={{ color: '#ef3636', margin: 5 }}>500ml</Button>
                            <Button variant="outlined" style={{ color: '#ef3636', margin: 5 }}>250ml</Button> */}
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
    // throw new Error("Function not implemented.");
}
