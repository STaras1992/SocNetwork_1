
let updateObjectInArray= (items,itemId,objPropName,newObjProps) => {
    items.map(u => {
       if(u[objPropName] === itemId){
           return {...u,...newObjProps};
       }
    });
}

export default updateObjectInArray;