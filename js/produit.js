import { displayProduit } from "./displayProduit.mjs"
import {fetchData} from "./fetchData.mjs"

document.addEventListener("DOMContentLoaded",()=>{

    const produitId = new URL(document.location).searchParams.get("id")
     

    fetchData(`https://e-commerce-franck.onrender.com/api/products/${produitId}`).then((result)=>{

        let prix = `${result.price}`

      const prixLocalStorage =   delete result.price

        let resultPrice =  Object.assign({}, result, {price:`${prix}`});

        const produit = []
        produit.push(resultPrice)

            displayProduit(produit,result)      
            
    })
})