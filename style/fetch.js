//code is here
function fetchData() {
    fetch('https://www.cheapshark.com/api/1.0/games?title=batman').then(response => {
        return response.json(); 
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error); 
    });
}

fetchData();
