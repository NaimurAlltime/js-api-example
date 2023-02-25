const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => randomUserDisplay(data))
}

const randomUserDisplay = randomUser => {
    const userContainer = document.getElementById('user-container')
    console.log(randomUser.results[0].location);
    userContainer.innerHTML = `
      <h4>Full-Name: ${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last} </h4>
      <h4>Gender: ${randomUser.results[0].gender} </h4>
      <h4>Country: ${randomUser.results[0].location.country} </h4>
    `
  
}


loadRandomUser();