let clickedLinks = 0;
let totalLinks = 8;
let currentDot = 0; // Track the currently clickable dot

const wilyFace = document.getElementById("wily-face"); // The image of Mega Man or Wily
const linkElements = document.querySelectorAll(".link");
const dots = document.querySelectorAll(".dot");

const linkMessages = [
    "Stage 1 clicked!",
    "Stage 2 clicked!",
    "Stage 3 clicked!",
    "Stage 4 clicked!",
    "Stage 5 clicked!",
    "Stage 6 clicked!",
    "Stage 7 clicked!",
    "Stage 8 clicked!"
];

linkElements.forEach((link, index) => {
    link.addEventListener("click", () => {
        if (!link.classList.contains("clicked")) {
            link.classList.add("clicked");
            alert(linkMessages[index]);
            clickedLinks++;
            if (clickedLinks === totalLinks) {
                // Change Mega Man's face to Wily's face when all stages are clicked
                wilyFace.src = "https://via.placeholder.com/100?text=Wily"; // Change to Wily's image
                wilyFace.alt = "Wily";
            }
        }
    });
});

wilyFace.addEventListener("click", () => {
    // Show the Wily Castle stage select when Mega Man's face (now Wily) is clicked
    if (clickedLinks === totalLinks) {
        document.getElementById("first-stage").classList.add("hidden");
        document.getElementById("second-stage").classList.add("active");

        // Make all dots visible once we click the Wily face after all stages are clicked
        dots.forEach(dot => dot.classList.remove("hidden"));
    }
});

// Wily Castle stage select behavior
dots.forEach((dot, index) => {
    dot.addEventListener("click", (event) => {
        if (index === currentDot) {
            dot.style.opacity = 1; // Make the dot fully visible
            currentDot++; // Enable the next dot
            if (currentDot === dots.length) {
                alert("Congratulations! You completed all stages!");
            }
        } else {
            event.preventDefault(); // Prevent the link from being followed
            alert("You need to complete the previous stage first!");
        }
    });
});
