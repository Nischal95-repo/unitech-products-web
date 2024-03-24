import { Button, Card, Container, Stack, TextField, Typography } from "@mui/material";
import FmdGood from '@mui/icons-material/FmdGood';
import Phone from '@mui/icons-material/Phone';
import GoogleMapReact from 'google-map-react';
interface LoginScreenProps {
}

const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};
const AnyReactComponent = (props: any) => <div>{props.text}</div>;
const ContactUsScreen: React.FC<LoginScreenProps> = () => {

    return (
        <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>
                    GET IN TOUCH
                </h1>
            </div>
            <Card style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '1' }}>
                <Container style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField required type="text" style={{ margin: 5 }} id="standard-basic" label="Name" variant="filled" />
                    <TextField required type="text" style={{ margin: 5 }} id="standard-basic" label="Email" variant="filled" />
                    <TextField type="tel" style={{ margin: 5 }} id="filled-basic" label="Phone Number" variant="filled" />
                    <TextField multiline={true} minRows={2} style={{ margin: 5 }} id="filled-basic" label="Message" variant="filled" />
                    <Button style={{ margin: 5, backgroundColor: '#AF191E' }} variant="contained">Send Message</Button>
                </Container>
                <div style={{ display: 'flex', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </Card>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
                <ContactUsCard title={'Office'} subtitle={'Unitech Products'} description={'185/B,(Ground floor), 5th Main, Devanathachar Street, Chamrajpet,Bengaluru, Karnataka - 560018'} footer={'080-22424293'} />
                <ContactUsCard title={'Factory'} subtitle={'Unitech Products'} description={'No 30 & 31, channenahalli, Dhakshina Murthy layout, Magadi Main Rd, Bengaluru, Karnataka - 562130'} footer={'080-22424293'} />
                <ContactUsCard title={'Retail Store'} subtitle={'Unitech Products'} description={'No 92, EAT St, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka - 560004'} footer={'080-22424293'} />
            </div>
        </Container>
    )
}

const ContactUsCard = (props: any) => {
    return (
        <Card style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', margin: 10, padding: 20 }}>
            <Typography variant="body1">
                {props.title.toUpperCase()}
            </Typography>
            <Typography variant="h5" style={{ color: '#AF191E', margin: 10 }} >
                {props.subtitle.toUpperCase()}
            </Typography>
            <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FmdGood style={{ color: '#AF191E', margin: 10 }} />
                <Typography>
                    {props.description}
                </Typography>
            </Stack>
            <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Phone style={{ color: '#AF191E', margin: 10 }} />
                <Typography>
                    {props.footer}
                </Typography>
            </Stack>
        </Card>
    )
}

export default ContactUsScreen;