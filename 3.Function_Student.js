


let FindbyId = [
    {id:1, name:"Student A"},
    {id:2, name:"Student B"},
    {id:3, name:"Student C"},
   ]
   
   let item = FindbyId.find(item => item.id == 3);
   console.log(item.name);