import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';



import {useEffect, useState} from "react";



const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgb(55, 65, 81)',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
                ...theme.applyStyles('dark', {
                    color: 'inherit',
                }),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
        }),
    },
}));




function HeaderContent(props){


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update window size on resize
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    function Clicked(event){
        props.action(event.target.textContent);
    }

    function TabsOptions(){

        const [anchorEl, setAnchorEl] = React.useState(null);

        const open = Boolean(anchorEl);
        function HandleClick(event){
            setAnchorEl(event.currentTarget);
        }

        function CloseMenu(){
            setAnchorEl(null)
        }


        if(windowWidth > 768){
            return(

                <div>
                    <Stack direction="row" spacing={0.5}>
                        <Button onClick={Clicked}>Home</Button>
                        <Button onClick={Clicked}>Products</Button>
                        <Button onClick={Clicked}>About</Button>
                    </Stack>
                </div>

            )
        }
        else{
            return (<div>

                <IconButton onClick={HandleClick} color={"primary"}>
                    <MenuIcon/>
                </IconButton>

                <StyledMenu
                    id="demo-customized-menu"
                    slotProps={{
                        list: {
                            'aria-labelledby': 'demo-customized-button',
                        },
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={CloseMenu}
                >
                    <MenuItem onClick={(event)=>{CloseMenu(); Clicked(event);}} disableRipple>

                        Home
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={(event)=>{CloseMenu(); Clicked(event);}} disableRipple>

                        Products
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={(event)=>{CloseMenu(); Clicked(event);}} disableRipple>

                        About
                    </MenuItem>

                </StyledMenu>


            </div>)
        }

    }

    return (
        <div className={"HeaderContainer"}>
            <div className={"Brand"}>
                <h1 className={"shopmart-logo"}>ShopMart</h1>
            </div>

            <div className={"TabItems"}>
            <TabsOptions/>
                <div>
                    <ShoppingCartIcon onClick={()=>{props.action("Cart")}} className={"CartIcon"}/>
                </div>
            </div>


        </div>

    )

}

export default HeaderContent;