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

  console.log(users);
  

const searchInput = document.getElementById('name');
const filterInput = document.getElementById('age');
const filterButton = document.getElementById('filter');
const userUl = document.getElementById('users');

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  const searchName = searchInput.value;
  if (searchName) {
    const searchResult = users.find(user => user.name.toLowerCase().includes(searchName.toLowerCase()));
    if (searchResult) {
      createTableUI([searchResult]);
    } else {
      userUl.innerHTML = `<li>Ingen resultater funnet for søket: ${searchName}</li>`;
    }
  } else {
    createTableUI(users);
  }
};

const handleFilter = () => {
  const filterValue = parseInt(filterInput.value);
  if (filterValue && Number(filterValue)) {
    const filterResult = users.filter(user => user.age >= filterValue);
    if (filterResult.length > 0) {
      createTableUI(filterResult);
    } else {
      userUl.innerHTML = `<li>Ingen brukere funnet med alder over ${filterValue}</li>`;
    }
  } else {
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

main();

searchInput.addEventListener('keyup', handleSearch);
filterButton.addEventListener('click', handleFilter);
