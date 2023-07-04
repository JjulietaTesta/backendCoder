import { ProductManager } from "./productManager.js";
import { __dirname } from "./utils.js";

let myFirstStore = new ProductManager("/products.json");
myFirstStore.getProducts().then((data) => console.log (data))