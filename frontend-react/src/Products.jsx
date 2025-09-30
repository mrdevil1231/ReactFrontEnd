import CardItems from "./Card.jsx";
import {ProductItems} from "./Product_DataList.jsx";
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useState} from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function Products(prop){

    const [filterTags,updateFilter] = useState([])
    function CallUpdate(item){
        prop.add(item);
    }

    function FilterFunc(){

            if(filterTags.length===0){

                return(
                    <Grid container spacing={2}>
                        {ProductItems.map(DisplayCards)}
                    </Grid>
                )
            }

            else{

                return(
                    <Grid container spacing={2}>
                        {
                            filterTags.map((value)=>(

                                ProductItems.map((val)=>{

                                    if(val.tag === value.tag){
                                        return DisplayCards(val);
                                    }

                                    return null;

                                })

                            )

                        )
                        }
                    </Grid>
                )

            }

    }
    function DisplayCards(val){
        return(
          <Grid size={{xs:12 , md:3}} key={val.id}>
              < CardItems key={val.id} obj={val} func={CallUpdate} />
          </Grid>
        );
    }

    const uniqueProducts = Array.from(
        new Map(ProductItems.map(item => [item.tag, item])).values()
    );



    function ChangeFilter(event, newValue){

        updateFilter(newValue)
        console.log(filterTags);
    }

    return (
        <div>
            <h1 className={"ProductTitle"}>Products</h1>
            <Autocomplete
                multiple
                size={"medium"}
                id="checkboxes-tags-demo"
                options={uniqueProducts}
                disableCloseOnSelect
                getOptionLabel={(option) => option.tag}
                value={filterTags}
                onChange={ChangeFilter}
                renderOption={(props, option, { selected }) => {
                    const { key, ...optionProps } = props;
                    return (
                        <li key={key} {...optionProps}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.tag}
                        </li>
                    );
                }}
                style={{ width: 400 }}
                renderInput={(params) => (
                    <TextField {...params} label="Filter Products" placeholder="Product Tags+" />
                )}
            />

            <FilterFunc/>

        </div>
    );

}

export default Products;