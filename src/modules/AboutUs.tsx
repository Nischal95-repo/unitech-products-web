import { Button, Card, Container, Stack, Typography } from "@mui/material";
import ProductList from "../components/products/ProductList";
import AboutUs from "../images/aboutus.jpg";
import temp from "../images/logo192.png";

import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase';
   

interface LoginScreenProps {
}

const AboutUsScreen: React.FC<LoginScreenProps> = () => {

    const addTodo = async (e:any) => {
        e.preventDefault();  
       
        try {
            const docRef = await addDoc(collection(db, "todos"), {
              todo: "todo1",    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    const fetchPost = async () => {
       
        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));              
                console.log(newData);
            })
       
    }
    return (
        <Stack>
            <Stack style={{ display: 'flex', width: '100%', height: 300, backgroundColor: '#AF191E' }}>
                <Stack style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography style={{ color: 'white', justifyContent: 'center' }} variant="h2">About Us</Typography>
                    {/* <h3 style={{ color: 'white' }}> Welcome to our site</h3> */}
                </Stack>
            </Stack>
        {/* <Button onClick={addTodo}>Add</Button>
        <Button onClick={fetchPost}>Fetch</Button> */}


            <Container>
                <Card style={{ display: 'flex', flexDirection: 'row', margin: 20, padding: 20 }}>
                    <img style={{ flex: 1 }} height={300} src={temp}></img>
                    <p style={{ flex: 2 }} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.

                        Remaining essentially unchanged. It was popularised in the 1960s simply dummy text printing standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </Card>
                <Card style={{ display: 'flex', flexDirection: 'row', margin: 20, padding: 20 }}>
                    <p style={{ flex: 2 }} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.

                        Remaining essentially unchanged. It was popularised in the 1960s simply dummy text printing standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <img style={{ flex: 1 }} height={300} src={temp}></img>
                </Card>
            </Container>

        </Stack>
    )
}

export default AboutUsScreen;