// script.js
document.addEventListener('DOMContentLoaded', function() {
    const foodForm = document.getElementById('food-form');
    const foodList = document.getElementById('food-list');
    const totalNutrients = document.getElementById('total-nutrients');

    let foods = [];

    foodForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input values
        const foodName = document.getElementById('food-name').value.trim();
        const calories = parseInt(document.getElementById('calories').value);
        const protein = parseFloat(document.getElementById('protein').value);
        const carbs = parseFloat(document.getElementById('carbs').value);
        const fat = parseFloat(document.getElementById('fat').value);

        // Create food object
        const foodItem = {
            name: foodName,
            calories: calories,
            protein: protein,
            carbs: carbs,
            fat: fat
        };

        // Add food to the list
        foods.push(foodItem);

        // Clear form inputs
        foodForm.reset();

        // Display food list
        displayFoodList();

        // Calculate and display total nutrients
        calculateTotalNutrients();
    });

    function displayFoodList() {
        foodList.innerHTML = '';
        foods.forEach(function(food, index) {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
                <strong>${food.name}</strong> - 
                Calories: ${food.calories}, 
                Protein: ${food.protein}g, 
                Carbs: ${food.carbs}g, 
                Fat: ${food.fat}g
            `;
            foodList.appendChild(listItem);
        });
    }

    function calculateTotalNutrients() {
        let totalCalories = 0;
        let totalProtein = 0;
        let totalCarbs = 0;
        let totalFat = 0;

        foods.forEach(function(food) {
            totalCalories += food.calories;
            totalProtein += food.protein;
            totalCarbs += food.carbs;
            totalFat += food.fat;
        });

        totalNutrients.innerHTML = `
            <p>Total Nutritional Information:</p>
            <ul>
                <li>Total Calories: ${totalCalories}</li>
                <li>Total Protein: ${totalProtein}g</li>
                <li>Total Carbohydrates: ${totalCarbs}g</li>
                <li>Total Fat: ${totalFat}g</li>
            </ul>
        `;
    }
});