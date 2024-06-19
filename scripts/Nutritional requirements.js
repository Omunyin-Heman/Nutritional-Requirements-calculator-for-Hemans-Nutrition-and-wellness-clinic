document.getElementById('nutritionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve user inputs
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activityLevel').value;

    // Calculate daily energy needs based on activity level
    let energyNeeds;
    if (gender === 'male') {
        energyNeeds = calculateEnergyNeedsMale(age, activityLevel);
    } else if (gender === 'female') {
        energyNeeds = calculateEnergyNeedsFemale(age, activityLevel);
    }

    // Calculate recommended dietary allowances (RDAs) for macronutrients
    const rdas = calculateRDAs(age, gender);

    // Display results
    displayResults(energyNeeds, rdas);
});

function calculateEnergyNeedsMale(age, activityLevel) {
    let bmr;
    if (age >= 18 && age <= 30) {
        bmr = 15.3 * age + 679;
    } else if (age > 30 && age <= 60) {
        bmr = 11.6 * age + 879;
    } else if (age > 60) {
        bmr = 13.5 * age + 487;
    } else {
        // Handle other age ranges if needed
        return 0;
    }

    let pal;
    switch (activityLevel) {
        case 'sedentary':
            pal = 1.0;
            break;
        case 'lightlyActive':
            pal = 1.12;
            break;
        case 'moderatelyActive':
            pal = 1.27;
            break;
        case 'veryActive':
            pal = 1.54;
            break;
        default:
            pal = 1.0;
            break;
    }

    return Math.round(bmr * pal);
}

function calculateEnergyNeedsFemale(age, activityLevel) {
    // Implement similar calculation for females
    // You can define your own formula based on established equations
    return 0;
}

function calculateRDAs(age, gender) {
    // Implement calculation for RDAs based on age, gender, and nutrient guidelines
    // You can define your own formulas or use established dietary reference values
    const rdas = {
        protein: 56, // Example value in grams
        carbohydrates: 130, // Example value in grams
        fats: 44, // Example value in grams
        vitamins: {
            vitaminA: 900, // Example value in micrograms
            vitaminC: 90 // Example value in milligrams
            // Add more vitamins as needed
        },
        minerals: {
            calcium: 1000, // Example value in milligrams
            iron: 8 // Example value in milligrams
            // Add more minerals as needed
        }
    };

    return rdas;
}

function displayResults(energyNeeds, rdas) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p><strong>Daily Energy Needs:</strong> ${energyNeeds} calories</p>
        <h3>Recommended Dietary Allowances (RDAs)</h3>
        <ul>
            <li><strong>Protein:</strong> ${rdas.protein} grams</li>
            <li><strong>Carbohydrates:</strong> ${rdas.carbohydrates} grams</li>
            <li><strong>Fats:</strong> ${rdas.fats} grams</li>
            <li><strong>Vitamin A:</strong> ${rdas.vitamins.vitaminA} micrograms</li>
            <li><strong>Vitamin C:</strong> ${rdas.vitamins.vitaminC} milligrams</li>
            <li><strong>Calcium:</strong> ${rdas.minerals.calcium} milligrams</li>
            <li><strong>Iron:</strong> ${rdas.minerals.iron} milligrams</li>
        </ul>
    `;
}



