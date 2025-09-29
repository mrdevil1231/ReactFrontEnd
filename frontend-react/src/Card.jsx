import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState,useContext} from "react";
import {CartContext} from "./ContextContent.jsx";

function CardItems(props){


    const {addToCart} = useContext(CartContext);




    return(
        <div className="Card">
            <Card sx= {{ maxWidth:300 }} >
                <CardMedia
                    sx={{ height: 300, width: 300 }}
                    image={props.obj.image}
                />
                <CardContent>

                    <Typography variant="h5" component="div">{props.obj.name}</Typography>
                    <Typography variant="body2">{"Rs."+props.obj.price+"/-"}</Typography>

                </CardContent>
                <CardActions>
                    <Button size="medium" onClick={()=>{addToCart({...props.obj,qty:1})}}>Add to Cart</Button>
                </CardActions>

            </Card>


        </div>
    )
}

export default CardItems;