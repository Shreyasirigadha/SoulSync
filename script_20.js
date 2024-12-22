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
        sessionStorage.setItem("totalScore", totalScore);
        let contentt="Prioritize self-care, Maintain a healthy routine, Manage stress effectively, Build a strong support system., Limit screen time and set boundaries. Practice mindfulness and seek professional help when needed. Stay connected with loved ones. Pursue lifelong learning and set realistic goals. Practice gratitude and moderate alcohol and substances. Stay informed about mental health resources and cultivate a positive mindset. Vandrevala Foundation Helpline: +919999 666 555 or 1860-2662-345 or 1800-2333-330 (24/7)";
        
        // if(totalScore>=0 & totalScore<=25)
        // {
        //     contentt="You might be feeling OVERWHELMED . If your total score falls within the range of 1 to 6 points, you may be feeling overwhelmed. It's completely normal to have moments in life where you feel like there's too much on your plate. During such times, it's important to remember that seeking support from friends, family, or a mental health professional can make a significant difference. Do not hesitate to reach out and share your feelings with someone you trust.";
        // }
        // else if(totalScore>=26 & totalScore<=50)
        // {
        //     contentt="You might be experiencing LONELINESS. Loneliness can affect anyone, and it's essential to acknowledge these feelings. Consider connecting with friends, participating in social activities, or joining support groups to combat loneliness. Building meaningful connections can help improve your mental well-being.";
        // }
        // else if(totalScore>=51 & totalScore<=75)
        // {
        //     contentt="You are experiencing significant STRESS. Stress is a common part of life, but excessive stress can take a toll on your mental health. It's crucial to find healthy ways to manage stress, such as practicing relaxation techniques, exercising regularly, and setting aside time for self-care.";
        // }
        // else if(totalScore>=76 & totalScore<=100)
        // {
        //     contentt="You may be dealing with symptoms of DEPRESSION. Depression is a serious mental health condition that can affect every aspect of your life. It's important to seek professional help if you suspect you may be experiencing depression. Remember, there is support available, and treatment can make a significant difference in your well-being.";
        // }
        // else if(totalScore>101 & totalScore<=125)
        // {
        //     contentt="You may be feeling ANGER or IRRITABILITY. Anger is a valid emotion, but managing it in a healthy way is essential. Consider techniques like deep breathing, mindfulness, or talking to a therapist to help you better understand and control your anger.";
        // }
        // else if(totalScore>=126 & totalScore<=150)
        // {
        //     contentt="You may be experiencing symptoms of ANXIETY. Anxiety can be overwhelming, but there are effective treatments available, such as therapy, medication, and relaxation strategies. Seeking professional help is a crucial step toward managing and alleviating anxiety.";
        // }
        // Store the total score in session storage
        sessionStorage.setItem("contentt", contentt);

        // a.title="videos";
        // a.href="videos.html";

        // a.title="music";
        // a.href="music.html";

        // a.title="games";
        // a.href="games.html";

        // a.title="help";
        // a.href="help.html";


        // Redirect to the second page
        window.location.href = "second_page.html";
        // Display the updated total score
        //totalScoreElement.textContent = totalScore + " points";
    });
});