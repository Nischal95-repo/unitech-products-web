import { Container , Card, Typography, Box} from "@mui/material";
import ProductList from "../components/products/ProductList";
import CarouselComponent from "../components/shared/Carousel";

interface LoginScreenProps {
}

const HomeScreen: React.FC<LoginScreenProps> = () => {

    return (
        <Container>
            <CarouselComponent />
            
            <ProductList />

            <Box style={{display:"flex", justifyContent:"space-around" , margin:"10px 0px", backgroundImage:"url(https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt6be25f2afbdebb6c/6542231a802cf1040a94e252/teaser-water-bg.webp?width=795&height=622&format=webp&quality=80)"}} >
            <Card style={{padding:'40px', width:"50%"}}>
                <Typography variant="h4" style={{textAlign:"center", color:'#AF191E',}}>
                    Explore More Products
                </Typography>
                <Typography variant="body2" style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corporis! Blanditiis maxime nisi nobis cum totam ad inventore in? Iure totam, ex rerum commodi inventore reprehenderit, architecto cupiditate voluptas quod, maxime nulla nihil hic praesentium voluptatum sunt obcaecati magnam ea ipsam officiis tenetur consequatur dolores veritatis similique repudiandae. Ab temporibus porro natus, repudiandae consequatur tenetur repellat architecto asperiores nemo pariatur, eum laboriosam odio iusto amet voluptate delectus quae omnis velit hic veritatis. Nam soluta deserunt eos suscipit corrupti a recusandae, reiciendis vel est, quis aspernatur quaerat delectus. Qui, dicta nostrum quos illum, numquam rerum ipsum aperiam adipisci quam ad earum?</Typography>
            </Card>
            </Box>
        </Container>
    )
}

export default HomeScreen;