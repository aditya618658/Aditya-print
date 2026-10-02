let PRODUCTS=[
{id:1,name:"Custom T-Shirt",category:"T-Shirt",price:249,description:"Name, photo, logo & bulk orders",image:"",icon:"👕"},
{id:2,name:"Photo Mug",category:"Gifts",price:149,description:"Photo, logo & personalized gift",image:"",icon:"☕"},
{id:3,name:"Custom Keychain",category:"Gifts",price:79,description:"Name, photo & logo keychain",image:"",icon:"🔑"},
{id:4,name:"Custom Mouse Pad",category:"Gifts",price:149,description:"Logo, photo & custom design",image:"",icon:"🖱️"},
{id:5,name:"Photo Cushion",category:"Gifts",price:249,description:"Personalized photo cushion",image:"",icon:"🎁"},
{id:6,name:"DTF Printing",category:"Printing",price:0,description:"Garment transfer printing",image:"",icon:"🖨️"},
{id:7,name:"Screen Printing",category:"Printing",price:0,description:"Team, business & bulk orders",image:"",icon:"🎨"},
{id:8,name:"School Uniform Printing",category:"School",price:0,description:"Names, logos & school requirements",image:"",icon:"🏫"}
];
try{const saved=JSON.parse(localStorage.getItem("adityaProducts")||"null");if(Array.isArray(saved))PRODUCTS=saved;}catch(e){}
