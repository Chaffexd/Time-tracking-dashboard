// 3 tab options
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const allCards = document.querySelectorAll(".card");

fetch("/data.json")
  .then((response) => {
    return response.json();
  })
  .catch((err) => {
    console.log(err);
  })
  .then((data) => {
    console.log(data);
    // The default text
    //Work section
    allCards.forEach((card, idx) => {
      const currentStats = card.querySelector(".hours");
      const previousStats = card.querySelector(".previous");

      currentStats.textContent = `${data[idx].timeframes.weekly.current}hrs`;
      previousStats.textContent = `Last Week - ${data[idx].timeframes.weekly.previous}hrs`;
    });

    daily.addEventListener("click", () => {
      daily.classList.add("active");
      weekly.classList.remove("active");
      monthly.classList.remove("active");

      allCards.forEach((card, idx) => {
        const currentStats = card.querySelector(".hours");
        const previousStats = card.querySelector(".previous");
  
        currentStats.textContent = `${data[idx].timeframes.daily.current}hrs`;
        previousStats.textContent = `Yesterday - ${data[idx].timeframes.daily.previous}hrs`;
      });
    });
    weekly.addEventListener("click", () => {
      weekly.classList.add("active");
      daily.classList.remove("active");
      monthly.classList.remove("active");
      
      allCards.forEach((card, idx) => {
        const currentStats = card.querySelector(".hours");
        const previousStats = card.querySelector(".previous");
  
        currentStats.textContent = `${data[idx].timeframes.weekly.current}hrs`;
        previousStats.textContent = `Last Week - ${data[idx].timeframes.weekly.previous}hrs`;
      });
    });
    monthly.addEventListener("click", () => {
      daily.classList.remove("active");
      monthly.classList.add("active");
      weekly.classList.remove("active");

      allCards.forEach((card, idx) => {
        const currentStats = card.querySelector(".hours");
        const previousStats = card.querySelector(".previous");
  
        currentStats.textContent = `${data[idx].timeframes.monthly.current}hrs`;
        previousStats.textContent = `Last Month - ${data[idx].timeframes.monthly.previous}hrs`;
      });
    });
  });
