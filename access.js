

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const totalScoreElement = document.getElementById("totalScore");

    calculateButton.addEventListener("click", function () {
        let totalScore = 0;


        for (let i = 1; i <= 30; i++) {
            const questionName = `question${i}`;
            const selectedValue = document.querySelector(`input[name="${questionName}"]:checked`);

            if (selectedValue) {
                totalScore += parseInt(selectedValue.value);
            }
        }
        
        // Store the total score in session storage
        sessionStorage.setItem("totalScore", totalScore);

        // Redirect to the second page
        window.location.href = "second_page.html";
        // Display the updated total score
        //totalScoreElement.textContent = totalScore + " points";
    });
});