import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Input} from '@mui/material'
import '../styles/CardItems.css'
export default function CardItems({data}) {
  console.log(data)
  const [quantity,setQuantity] = React.useState(1)
  
  
  return (
    <div className='d-flex flex-wrap p-5'>
    {data.map((val)=>
    
    <Card className='m-2' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={val.images[0].secure_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {val.name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
        <p className='itemcount' ><span onClick={()=>setQuantity(quantity>0 ?quantity-1 : 0)} >-</span > {quantity} <span onClick={()=>{setQuantity(quantity + 1)}}>+</span></p>
      <CardActions>
        <Button size="small"> ₹ {val.price}</Button>
        <Button size="small">Add Item</Button>

      </CardActions>
    </Card>
    )}
    </div>
  );
}
