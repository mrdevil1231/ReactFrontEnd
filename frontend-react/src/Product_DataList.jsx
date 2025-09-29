const ProductItems =[
    {
        id:1,
        tag:"SmartPhones",
        name:"VIVO V16",
        price: 19900,
        image:"https://images-cdn.ubuy.co.in/688e8abbd8891194fe08ec1b-clearance-smart-appliances-7-3-inch.jpg"
    },
    {
        id:2,
        tag:"Gaming",
        name:"Controller",
        price: 3549,
        image:"data:image/jpeg;base64,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"
    },
    {
        id:3,
        tag:"Clothing",
        name:"Jeans",
        price: 1999,
        image:"https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/31334769/2025/2/12/49c399d0-e0d2-4dfa-92ea-921220e6f2821739367513840-The-Pant-Project-Men-Slim-Fit-Mid-Rise-Denim-Jeans-with-Stre-1.jpg"
    },
    {
        id:4,
        tag:"Grocery",
        name:"Wheat Flour",
        price: 499,
        image:"https://www.kingarthurbaking.com/sites/default/files/styles/lg_1x_1360px/public/2024-06/GWComp_1200x800_051724%20%281%29%20%281%29.jpg?itok=ZOqRLUVu"
    },
    {
        id:5,
        tag:"Toys",
        name:"Lego StarWars",
        price: 3999,
        image:"https://m.media-amazon.com/images/I/81gegq2OfGL.jpg"
    },
    {
        id:6,
        tag:"Clothing",
        name:"Shirt",
        price: 999,
        image:"https://m.media-amazon.com/images/I/6149mVtxPvL._UY1100_.jpg"
    },
    {
        id:7,
        tag:"Footwear",
        name:"Itachi Shoes",
        price: 4999,
        image:"https://i.etsystatic.com/23075929/r/il/8a7f17/3163476541/il_570xN.3163476541_8efy.jpg"
    },
    {
        id:8,
        tag:"Eyewear",
        name:"Meta SmartGlasses",
        price: 12999,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozGwXtU0d-DCjnkp2YYmYVjeXgWq-m0Uq6A&s"
    }

]

export  {ProductItems};