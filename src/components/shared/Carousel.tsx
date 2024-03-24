import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import logo from '../../images/Hero-3-1.jpg'; // Tell webpack this JS file uses this image

interface CarouselComponentProps {
}

const CarouselComponent: React.FC<CarouselComponentProps> = () => {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: logo
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: logo
        }
    ]

    return (
        <div style={{ marginTop: 80 }}>
            <Carousel navButtonsAlwaysVisible={true}>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}
function Item(props: any) {
    console.log(props.item.image)
    return (
        <Paper>
            <img style={{ display: 'flex', width: '100%', height: 400 }} alt='dssad' src={props.item.image}></img>
        </Paper>
    )
}

export default CarouselComponent;