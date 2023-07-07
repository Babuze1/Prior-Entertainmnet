//code is here
document.addEventListener('DOMContentLoaded',function() {
    async function fetchProducts(url) {
        let data = await fetch(url);
        let response = await data.json();
        console.log(response);
    };
    fetchProducts('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
});