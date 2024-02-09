import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FCCartItem(props) {

   const DelFromCart = () => {
     props.DelFromCart(props.itemId);
   };

    return (
        <Box sx={{ width: "fit-content" }}>
            <Card style={{ display: "block"}} variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.price}₪
                        </Typography>
                        <Typography variant="h6" component="div">
                            {props.title}
                        </Typography>
                        <Button onClick={DelFromCart} size="small">X</Button>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    );
}
