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

    let usersList = document.getElementById('users');
    usersList.innerHTML = '';
    for(let user of users) {
        usersList.innerHTML += `<li>${user.name}</li>`;
    }

    function userSearch(){
        let search = document.getElementById("name");
        
    }

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)