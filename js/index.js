
import { displayKanape } from "./displayKanape.mjs"
import { fetchData } from "./fetchData.mjs"

document.addEventListener("DOMContentLoaded",()=>{
  
    fetchData("https://e-commerce-franck.onrender.com/api/products").then((result)=>{
        
         displayKanape(result)
        
    })
   
})