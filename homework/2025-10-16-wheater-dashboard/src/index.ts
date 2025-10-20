import "./styles.css";
// Select all forecast day cards
const forecastDays = document.querySelectorAll(".forecast-day");

forecastDays.forEach((day) => {
  const card = day as HTMLDivElement;
  console.log(forecastDays)
  
  card.addEventListener("click", () => {
    // Get the day name from the h3 inside this card
    const dayName = card.querySelector("h3");
    const condition = card.querySelector(".weather-icon");
    if (dayName && condition) {
      alert(`${dayName.textContent}: ${condition.textContent}`);
    }
  });
});

// Change current weather condition on button click
const currentWeather = document.querySelector("#current-weather");
const conditionElement = document.querySelector("#current-weather .condition");

if (currentWeather && conditionElement) {
  currentWeather.addEventListener("click", () => {
    // Cycle through different weather conditions
    const conditions = ["sunny", "rainy", "cloudy", "stormy"];
    const currentClass = conditionElement.className.split(" ").find(c => conditions.includes(c));
    const currentIndex = conditions.indexOf(currentClass || "sunny");
    const nextIndex = (currentIndex + 1) % conditions.length;
    const nextCondition = conditions[nextIndex];
    
    // Remove old condition class and add new one
    conditions.forEach(c => conditionElement.classList.remove(c));
    conditionElement.classList.add(nextCondition);
    conditionElement.textContent = nextCondition.charAt(0).toUpperCase() + nextCondition.slice(1);
  });
}