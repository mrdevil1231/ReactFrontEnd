import Button from '@mui/material/Button';

function Home(props){


    return (
        <div className={"innerHome"}>
            <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">

                <h1 className="text-body-emphasis">Welcome to ShopMart</h1>

                <p className="des col-lg-6 mx-auto mb-4">
                    Your one-stop shop for best products online.
                </p>

                <Button color={"info"} onClick={()=>{props.action("Products")}} variant="contained">Browse Items</Button>

            </div>
        </div>
    );
}


export default Home;