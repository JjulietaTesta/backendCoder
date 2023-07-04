import express from 'express';
import { ProductManager } from "./productManager.js";


const app = express();
const PORT = 8080;
const productManager = new ProductManager('products.json');
let productos = [];

app.get ("/products",async (req,res)=>{

    const { limit } = req.query;

    try {
        let response = await productManager.getProducts();
        if (limit) {
            let tempArray = response.filter((dat, index) => index < limit )
            res.json(tempArray)
        } else {
            res.json(response)
        }
    
    }
    catch (err) {
        console.log(err)
    }

});


app.get ("/products/:pid",async (req,res)=>{
    const { pid } = req.params
    let id = await productManager.getProductById(parseInt(pid))

    if (id) {
        res.json(id)
    } else {
        res.json ({
            mensaje: "no encontramos el producto"
        })
    }

})





app.listen (PORT, ()=>{
    console.log("el server esta corriendo en el puerto 8080")
})