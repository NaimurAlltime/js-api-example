const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals)
    // step 1: container element 
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        // console.log(meal);
        // step 2: create child for each element 
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('col');
        // step 3: set content of the child 
        mealsDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <!-- Button trigger modal -->
            <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
            Details
            </button>
            </div>
         </div>
        `;
        // step 4: appendChild 
        mealsContainer.appendChild(mealsDiv);
    });
}

// search function
const searchMeals = () => {
    const mealsText = document.getElementById('meals-text').value;
    // console.log(mealsText);
    loadMeals(mealsText);
}

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    // error handling 
    .catch(err => {
        console.log(err)
    });
}

// or 
// async await method
const loadMealDetails2 = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
   try {
     const res = await fetch(url);
     const data = await res.json();
     displayMealDetails(data.meals[0]);
   } catch (error) {
       console.log(error);
   }
}

const displayMealDetails = meal => {
    // meal title show the modal 
   document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
   // meal img show the modal 
   document.getElementById('mealDetailsBody').innerHTML = `
    <img src="${meal.strMealThumb}" class="img-fluid">
   `
}

loadMeals('fish');