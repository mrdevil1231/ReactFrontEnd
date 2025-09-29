
import Button from '@mui/material/Button';

import SpanningTable from "./CartItemList.jsx";

function CartItems(props){

    return (




                <SpanningTable items={props.items} />




    )

}

export default CartItems;