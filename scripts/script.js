// Ambil ID dengan nama fullname di HTML 
const fullName = document.getElementById('fullname');
const alamat = document.getElementById('alamat');

console.log(fullname, " : Ini fullname");

const BASE_URL = "https://jsonplaceholder.typicode.com/users/4";

async function getDataUser() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        // Menampilkan nama
        fullName.innerText = data.website;

        // Menampilkan alamat
        alamat.innerText = data.address.city;

        console.log("Ini data nya bro : ", { data });
    } catch (error) {
        console.error("Ini error bro : ", { error });
    }
}

getDataUser();

console.log(BASE_URL, " : Ini link api nya")