/* let getservices = [
    { "_id": "606b3117022b5656cce4e4d6", "barbername": "Stephane Uhlmann", "service": "hair cut", "price": 15, "__v": 0 },
    { "_id": "606b7fa82c779165e3774ea3", "barbername": "Stephane Uhlmann", "service": "hair cut", "price": 15, "__v": 0 }
]; */

/* let barbername = [];
let service = [];
let price = [];
(async function getServices() {
    try {
        const { data } = await axios.get("/services");
        console.log(data.results);
        barbername = data.results.map(barbername => barbername.barbername);
        service = data.map(service => service.service);
        price = data.map(price => price.price);
        console.log(barbername);
        console.log(service);
        console.log(price);
    } catch (error) {
        console.log(error)
    }
})(); */

let getservices = [data];
const { data } = axios.get('/services', {
    params: {},
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://3000-crimson-fowl-h0ijaps8.ws-eu03.gitpod.io/services'
    }
})
    .then(function (response) {
        // handle success
        barbername = data.results.map(barbername => barbername.barbername);
        service = data.map(service => service.service);
        price = data.map(price => price.price);
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(getservices[0]);
generateTableHead(table, data);
generateTable(table, getservices);