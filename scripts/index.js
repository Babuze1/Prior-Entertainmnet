//code is here

fetch("https://www.freetogame.com/api/games")
    .then((response)=>response.json())
    .then((productData)=>{
        console.log(productData);
    })