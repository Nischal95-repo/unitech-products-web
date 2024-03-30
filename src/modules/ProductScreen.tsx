import { Button, Card, Container, Grid, Typography } from "@mui/material";
import uni from "../images/uni.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ProductType } from "../core/product";


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
          let prd = doc.data()
          console.log('test',prd)
          temp.push(prd)
        })
        setProducts(temp)
         
      }
      useEffect(()=>{
              fetchProducts()
      },[])

      function randomStr(len: number, arr: string) {
        let ans = '';
        for (let i = len; i > 0; i--) {
            ans +=
                arr[(Math.floor(Math.random() * arr.length))];
        }
        return ans
    }
      const add=()=> {
        const prds =[
            {
                "Brand": "Germisol",
                "category": "Floor Cleaner",
                "product_name": "Perfumed Herbal Phenyl Cool Green",
                "available_in": "500:1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "Floor Cleaner",
                "product_name": "Perfumed Herbal Phenyl Mountain Magic",
                "available_in": "500:1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "Floor Cleaner",
                "product_name": "Perfumed Herbal Phenyl Sensation",
                "available_in": "500:1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "Floor Cleaner",
                "product_name": "Perfumed Herbal Phenyl Spice",
                "available_in": "500:1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "Floor Cleaner",
                "product_name": "Feel Fresh White Phenyle",
                "available_in": "750:1250:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "Bleaching",
                "product_name": "Bleaching Powder",
                "available_in": "200:500",
                "unit": "GM",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "washing soda",
                "product_name": "Washing Soda",
                "available_in": "200:500",
                "unit": "GM",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "Acid",
                "product_name": "Cleaning Acid",
                "available_in": "500:1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Unisol",
                "category": "Liquid Soap",
                "product_name": "Multipurpose Hand Wash Liquid Soap- Tulsi",
                "available_in": "1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Unisol",
                "category": "Liquid Soap",
                "product_name": "Multipurpose Hand Wash Liquid Soap- Lemon",
                "available_in": "1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Unisol",
                "category": "Liquid Soap",
                "product_name": "Multipurpose Hand Wash Liquid Soap- Strawberry",
                "available_in": "1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Cleanwell",
                "category": "Grass Brooms",
                "product_name": "Natural Grass Brooms- Ultra",
                "available_in": "",
                "unit": "",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Cleanwell",
                "category": "Grass Brooms",
                "product_name": "Natural Grass Brooms- V Handle",
                "available_in": "",
                "unit": "",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Cleanwell",
                "category": "Grass Brooms",
                "product_name": "Natural Grass Brooms- Gold",
                "available_in": "",
                "unit": "",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Cleanwell",
                "category": "Grass Brooms",
                "product_name": "Natural Grass Brooms- Big Gold",
                "available_in": "",
                "unit": "",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Ultra",
                "category": "Naphathalene",
                "product_name": "Naphathelene Balls",
                "available_in": "100:200:500:1000",
                "unit": "GM",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "Urinal cake",
                "product_name": "Hi Fresh Urinal Cake",
                "available_in": "80",
                "unit": "GM",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Hi- Fresh",
                "category": "Air Freshner",
                "product_name": "Air Freshner - Rose",
                "available_in": "50",
                "unit": "GM",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Hi- Fresh",
                "category": "Air Freshner",
                "product_name": "Air Freshner- Lime",
                "available_in": "50",
                "unit": "GM",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Hi- Fresh",
                "category": "Air Freshner",
                "product_name": "Air Freshner- Sandal",
                "available_in": "50",
                "unit": "GM",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "HI- Fresh",
                "category": "Air Freshner",
                "product_name": "Air Freshner- Jasmine",
                "available_in": "50",
                "unit": "GM",
                "dimensions": "",
                "": ""
            },
            {
                "Brand": "Germisol",
                "category": "Toilet Cleaner",
                "product_name": "Activ -Liquid Toilet Cleaner",
                "available_in": "500:1000:5000:20000",
                "unit": "ML",
                "dimensions": "",
                "": ""
            }
        ]

        prds.forEach(async (prd)=>{
            let available_in = prd.available_in.split(':')
            let id = randomStr(20, '12345abcde')
            await setDoc(doc(db, "products", id), {
                name: prd.product_name.toUpperCase(),
                category: prd.category.toUpperCase(),
                qty: available_in,
                unit: prd.unit,
                image: "data:image/jpeg;base64,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",
                desc:"",
                id

              });

        })
      }
    return (
        // <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"space-evenly" }}>
            
            
        // </Container>
        <Container>
         <Button onClick={()=>{
            add()
         }}>
            Add
            </Button>   
        <Grid container rowSpacing={2} columnSpacing={3} >
            {products.map(myFunction)}
            </Grid>
            </Container>
    )
}

const ProductCard: React.FC<ProductProp> = ({product}) => {
    const navigate = useNavigate();
    const {name, desc, image,id} = product
    console.log(product)

    return (
        <Card style={{ backgroundColor: '#fff', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', marginTop:"10px", cursor:"pointer", }} onClick={() => navigate(`/product/${id}`)}>
            <img width={250} height={250} src={image}></img>
            
                <Typography variant="body2" style={{color:'#AF191E', textAlign:'center', margin:"20px 5px", minHeight:"42px"}}  >{name}</Typography>
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