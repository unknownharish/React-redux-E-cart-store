export const Add_to_cart = (id)=>{

   return(
       {
           type:'Add_to_cart',
           payload:{
               id:id,
              
           }
       }
   )
  

}
export const Remove_from_cart = (id)=>{

   return(
       {
           type:'Remove_from_cart',
           payload:{
               id:id,
           }
       }
   )
  

}
export const Adjust_qty = (id,value)=>{

   return(
       {
           type:'Adjust_qty',
           payload:{
               id:id,
               qty:value,
           }
       }
   )
  

}
export const Load_Current_Item = (item)=>{

   return(
       {
           type:'Load_Current_Item',
           payload:item
       }
   )
  

}