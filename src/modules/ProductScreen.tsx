import { Card, Container, Grid, Typography } from "@mui/material";
import uni from "../images/uni.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

type ProductType = {
    name: String,
    desc: String,
    unit: String,
    qty: Number[]
    category: string
    image: string
}
interface ProductProp {
    product: ProductType
}

const ProductScreen = () => {
    const [products, setProducts] = useState([])
    function myFunction(item: ProductType) {
        return <Grid item md={4} lg={3} sm={6} xs={12}>
            <ProductCard product={item} />
        </Grid>
    }
    const fetchProducts = async () => {
        const q = query(collection(db, "products"));
        const queryResp = await getDocs(q)
        let temp:any =[]
        queryResp.forEach((doc)=>{
          
          temp.push(doc.data())
        })
        setProducts(temp)
         
      }
      useEffect(()=>{
              fetchProducts()
      },[])
    return (
        // <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-evenly" }}>
            
            
        // </Container>
        <Container>
        <Grid container rowSpacing={2} columnSpacing={3} >
            {products.map(myFunction)}
            </Grid>
            </Container>
    )
}

const ProductCard: React.FC<ProductProp> = ({product}) => {
    const navigate = useNavigate();
    console.log('details', product)
    const {name, desc, image} = product

    return (
        <Card style={{ backgroundColor: '#fff', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', marginTop:"10px", cursor:"pointer" }} onClick={() => navigate("/1")}>
            <img width={250} height={250} src={image}></img>
            
                <Typography variant="h5" style={{color:'#AF191E', textAlign:'center', margin:"20px 0px"}}  >{name}</Typography>
                {/* <Typography variant="subtitle2" sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                }}>{desc}</Typography> */}
            
        </Card>
    )
}

export default ProductScreen;