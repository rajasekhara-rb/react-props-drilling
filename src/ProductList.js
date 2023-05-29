import React from "react";

function Product({name,price,isAvailable}) {
    return (
        < div>
            <h2>{name}</h2>
            <h2>Price: {price}</h2>
            {isAvailable ? <p>Avilable</p> : <p>Out of stock</p>}
        </div>
    )
}

function ProductList() {

    const products = [
        {
            id: 1,
            name: "Product-1",
            price: "19.99",
            isAvailable: true
        },
        {
            id: 2,
            name: "Product-2",
            price: "29.99",
            isAvailable: false
        },
        {
            id: 3,
            name: "Product-3",
            price: "39.99",
            isAvailable: true
        }
    ]
    return (
        <div>
            <h1>Products List</h1>
            {products.map((product) => {
                return <Product key={product.id}
                    name={product.name}
                    price={product.price}
                    isAvailable={product.isAvailable} />
            })}
        </div>
    );
}


export default ProductList;


// 3min
// const users=[
//     {id:1,name:"Abhijeet",status:"online"},
//     {id:2,name:"Shivam",status:"offline"},
//     {id:3,name:"Pardeep",status:"online"},
//     {id:4,name:"Buddha Rajshekar",status:"offline"},
//     {id:5,name:"Leonard",status:"online"}
//     ]
    // name and status as properties
    //conditionally render the data based on status
    // status:Online
    // status:Offline