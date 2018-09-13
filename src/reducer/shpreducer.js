export const shpReducer =((state={
id:"1",
Name:"test",
product:[],
qty:"0"

},action)=>{
    switch (action.type) {
    case "ADD_TO_CART":
      return state;

    default:
        return state;
}
    
});