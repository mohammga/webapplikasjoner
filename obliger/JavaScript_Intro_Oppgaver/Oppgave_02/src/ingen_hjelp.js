const names = [
    'Trude',
    'Simen',
    'Lars',
    'Ali',
    'Finn',
    'Kåre',
    'Hanne',
    'Åse',
    'Anne',
    'Amanda',
    'Morgan',
];

const users = [];

const createRandomAge = () => {
    return Math.floor(Math.random() * 100 + 1);
};

const createUsers = (userCount) => {
    for (let i = 0; i < userCount; i++) {
        const user = {
            id: i,
            name: names[i],
            age: createRandomAge(),
        };
        users.push(user);
    }
};

createUsers(11);



// TODO: Hent HTML #id med getElementById
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const displayUsers = (userList) => {
    // Nullstill listen først
    let usersList = document.getElementById("users").innerHTML = '';
    if(userList.length > 0){
        for(let user of userList) {
            usersList.innerHTML += `<li>${user.name}</li>`;
        }
    } else {
        usersList.innerHTML += `<span>Ingen resultater funnet</span>`;
    }
};


displayUsers(users);


// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
function handleSearch() {
    let error = document.getElementById('error');
    let name = document.getElementById("name").value;

    // Sjekk om navnet inneholder et tall
    if (/\d/.test(name)) {
        error.textContent = 'Navnet kan ikke inneholde tall!';
        return;
    }

    let searchResult = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    displayUsers(searchResult);
}

document.getElementById("filter").addEventListener("click", handleFilter);
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
function handleFilter() {
    let age = parseInt(document.getElementById("age").value, 10);
    if(isNaN(age)) {
        // Håndter feil hvis verdien i alderfeltet ikke er et tall
        usersList.innerHTML = `<span>Ugyldig alder oppgitt</span>`;
        return;
    }

    let filterResults = users.filter(user => user.age === age);
    displayUsers(filterResults);
}

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
document.getElementById("name").addEventListener("keyup", handleSearch);

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
document.getElementById("filter").addEventListener("click", handleFilter);

