import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useContext, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {CartContext} from "./ContextContent.jsx";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const TAX_RATE = 0.05;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function subtotal(items) {
    return items.map(({ price,qty }) => price*qty).reduce((sum, i) => sum + i, 0);
}

export default function SpanningTable(props) {


   const {cartItems,removefromCart} = useContext(CartContext);


    function Format(num) {



        return `${num.toFixed(2)}`;
    }

    function deleteButton(val){


        removefromCart(val);

    }

    function QtyButton(value){

       return (
           <div className="qtyButton">

               <TextField
                   className={"qtyButton"}
                   label="SetQuantity"
                   id="outlined-start-adornment"
                   sx={{ m: 1, width: '25ch' }}
                   slotProps={{
                       input: {
                           startAdornment: <InputAdornment position="start"><Button>-</Button></InputAdornment>,
                           endAdornment:   <InputAdornment position="end"><Button>+</Button></InputAdornment>,
                       },
                   }}
               />


           </div>
       )

    }
    function PrintBody(){



        if(!cartItems || cartItems.length === 0){

            return(
                <div className={"EmptyCart"}><h1>Cart is Empty</h1></div>
            );
        }
        else{

            const SubTotal = subtotal(cartItems);
            const invoiceTaxes = TAX_RATE * SubTotal;
            const invoiceTotal = invoiceTaxes + SubTotal;
            return(
                <div className={"CartBody"}>
                    <div className={"CartTitle"}><h1>Cart</h1></div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"left"}>Product</TableCell>
                                    <TableCell align={"left"}>Details</TableCell>
                                    <TableCell align={"right"}>Qty.</TableCell>
                                    <TableCell align={"right"}>Price</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>

                            </TableHead>
                            <TableBody>
                                {cartItems.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>
                                            <img
                                                src={row.image}
                                                alt={row.name}
                                                style={{ width: 120, height: 120, objectFit: "cover" }}
                                            />
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align={"right"}>{row.qty}</TableCell>
                                        <TableCell align={"right"}>{Format(row.price)}</TableCell>
                                        <TableCell align={"right"}><DeleteIcon className={"delIcon"} onClick={()=>{ deleteButton(row.id) }}/></TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2} >Subtotal</TableCell>
                                    <TableCell align={"right"}>{ccyFormat(SubTotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >Tax</TableCell>
                                    <TableCell align={"right"}>{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                    <TableCell  align={"right"}>{ccyFormat(invoiceTaxes)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} >Total</TableCell>
                                    <TableCell align={"right"}>{ccyFormat(invoiceTotal)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={"ProceedButton"}>

                        <Button variant="contained" disabled>
                            Proceed
                        </Button>

                    </div>
                </div>



            );
        }
    }

    return (
        <PrintBody/>
    );
}

