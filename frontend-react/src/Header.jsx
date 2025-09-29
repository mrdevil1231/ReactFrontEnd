import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

function HeaderContent(props){


    function Clicked(event){
        props.action(event.target.textContent);
    }

    return(
        <div className={"HeaderContainer"}>
            <div className={"Brand"}>
                <h1 className={"shopmart-logo"}>ShopMart</h1>
            </div>

            <div className={"TabItems"}>
                <div>
                    <Stack direction="row" spacing={0.5}>
                        <Button onClick={Clicked}>Home</Button>
                        <Button onClick={Clicked}>Products</Button>
                        <Button onClick={Clicked}>About</Button>
                    </Stack>
                </div>
                <div>
                    <ShoppingCartIcon onClick={()=>{props.action("Cart")}} className={"CartIcon"}/>
                </div>
            </div>


        </div>

    )

}

export default HeaderContent;