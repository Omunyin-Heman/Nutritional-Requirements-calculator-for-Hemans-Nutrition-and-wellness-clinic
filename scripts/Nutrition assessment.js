// script.js
document.addEventListener('DOMContentLoaded', function() {
    const assessmentForm = document.getElementById('assessment-form');
    const assessmentResult = document.getElementById('assessment-result');

    assessmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input values
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const activityLevel = document.getElementById('activity-level').value;

        // Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor equation
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Adjust BMR based on activity level
        let totalCalories;
        switch (activityLevel) {
            case 'sedentary':
                totalCalories = bmr * 1.2;
                break;
            case 'lightly-active':
                totalCalories = bmr * 1.375;
                break;
            case 'moderately-active':
                totalCalories = bmr * 1.55;
                break;
            case 'very-active':
                totalCalories = bmr * 1.725;
                break;
            case 'extra-active':
                totalCalories = bmr * 1.9;
                break;
            default:
                totalCalories = bmr;
                break;
        }

        // Display assessment result
        assessmentResult.innerHTML = `
            <p>Estimated Daily Caloric Needs:</p>
            <p>${totalCalories.toFixed(2)} calories/day</p>
        `;
    });
});
