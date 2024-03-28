
import {displayPanier} from "./displayPanier.mjs"
import {fetchData} from "./fetchData.mjs"

document.addEventListener("DOMContentLoaded",()=>{


   let ajoutPanier = JSON.parse(localStorage.getItem("produitId"))
   let panier = []
   
   ajoutPanier.forEach(object =>{
      

      let panierId = object._id
    

      fetchData(`https://e-commerce-franck.onrender.com/api/products/${panierId}`).then((response)=>{


      let responsePrice =  Object.assign({}, response, {quantity: `${object.quantity}` },{color: `${object.color}` });
      

      
      panier.push(responsePrice)
         
         displayPanier(panier)
            

   })
    
  });
  
})