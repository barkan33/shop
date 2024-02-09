import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FCItem(props) {


  const BuyItem = (e) => {  
    props.AddToCart(e.target.dataset.id);
  }

  return (
    <Card style={{ display: "inline-block", margin: "20px" }} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150, width: 200 }}
        image={props.image} // change this to match your image
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.price}₪
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }} >
        <Button onClick={BuyItem} data-id={props.itemId} variant='contained' size="small">Buy</Button>
      </CardActions>
    </Card>
  );
}
