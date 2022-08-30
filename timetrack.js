// 3 tab options
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

// // The hours that need to be updated
// const dayWeekMonth = document.getElementById("dwm");
// const dayWeekMonth1 = document.getElementById("dwm1");
// const dayWeekMonth2 = document.getElementById("dwm2");
// const dayWeekMonth3 = document.getElementById("dwm3");
// const dayWeekMonth4 = document.getElementById("dwm4");
// const dayWeekMonth5 = document.getElementById("dwm5");
// // Work
// const currentWorkHours = document.getElementById("currentWorkHours");
// const workHours = document.getElementById("workHours");
// // Play
// const currentPlayHours = document.getElementById("currentPlayHours");
// const playHours = document.getElementById("playHours");
// // Study
// const currentStudyHours = document.getElementById("currentStudyHours");
// const studyHours = document.getElementById("studyHours");
// // Exercise
// const currentExerciseHours = document.getElementById("currentExerciseHours");
// const exerciseHours = document.getElementById("exerciseHours");
// // Social Hours
// const currentSocialHours = document.getElementById("currentSocialHours");
// const socialHours = document.getElementById("socialHours");
// // Self Care
// const currentSelfCareHours = document.getElementById("currentSelfCareHours");
// const selfCareHours = document.getElementById("selfCareHours");

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

    // currentWorkHours.textContent = `${data[0].timeframes.daily.current}hrs`;
    // workHours.textContent = `${data[0].timeframes.daily.previous}hrs`;
    // dayWeekMonth.textContent = "Yesterday";
    // //Play section
    // currentPlayHours.textContent = `${data[1].timeframes.daily.current}hrs`;
    // playHours.textContent = `${data[1].timeframes.daily.previous}hrs`;
    // dayWeekMonth1.textContent = "Yesterday";
    // //Study section
    // currentStudyHours.textContent = `${data[2].timeframes.daily.current}hrs`;
    // studyHours.textContent = `${data[2].timeframes.daily.previous}hrs`;
    // dayWeekMonth2.textContent = "Yesterday";
    // //Exercise section
    // currentExerciseHours.textContent = `${data[3].timeframes.daily.current}hrs`;
    // exerciseHours.textContent = `${data[3].timeframes.daily.previous}hrs`;
    // dayWeekMonth3.textContent = "Yesterday";
    // //Social section
    // currentSocialHours.textContent = `${data[4].timeframes.daily.current}hrs`;
    // socialHours.textContent = `${data[4].timeframes.daily.previous}hrs`;
    // dayWeekMonth4.textContent = "Yesterday";
    // //Self Care section
    // currentSelfCareHours.textContent = `${data[5].timeframes.daily.current}hrs`;
    // selfCareHours.textContent = `${data[5].timeframes.daily.previous}hrs`;
    // dayWeekMonth5.textContent = "Yesterday";

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
    //   //Work section
    //   currentWorkHours.textContent = `${data[0].timeframes.daily.current}hrs`;
    //   workHours.textContent = `${data[0].timeframes.daily.previous}hrs`;
    //   dayWeekMonth.textContent = "Yesterday";
    //   //Play section
    //   currentPlayHours.textContent = `${data[1].timeframes.daily.current}hrs`;
    //   playHours.textContent = `${data[1].timeframes.daily.previous}hrs`;
    //   dayWeekMonth1.textContent = "Yesterday";
    //   //Study section
    //   currentStudyHours.textContent = `${data[2].timeframes.daily.current}hrs`;
    //   studyHours.textContent = `${data[2].timeframes.daily.previous}hrs`;
    //   dayWeekMonth2.textContent = "Yesterday";
    //   //Exercise section
    //   currentExerciseHours.textContent = `${data[3].timeframes.daily.current}hrs`;
    //   exerciseHours.textContent = `${data[3].timeframes.daily.previous}hrs`;
    //   dayWeekMonth3.textContent = "Yesterday";
    //   //Social section
    //   currentSocialHours.textContent = `${data[4].timeframes.daily.current}hrs`;
    //   socialHours.textContent = `${data[4].timeframes.daily.previous}hrs`;
    //   dayWeekMonth4.textContent = "Yesterday";
    //   //Self Care section
    //   currentSelfCareHours.textContent = `${data[5].timeframes.daily.current}hrs`;
    //   selfCareHours.textContent = `${data[5].timeframes.daily.previous}hrs`;
    //   dayWeekMonth5.textContent = "Yesterday";
    });
    weekly.addEventListener("click", () => {
      weekly.classList.add("active");
      daily.classList.remove("active");
      monthly.classList.remove("active");
      
      allCards.forEach((card, idx) => {
        const currentStats = card.querySelector(".hours");
        const previousStats = card.querySelector(".previous");
  
        currentStats.textContent = `${data[idx].timeframes.weekly.current}hrs`;
        previousStats.textContent = `Last Month - ${data[idx].timeframes.weekly.previous}hrs`;
      });
    //   //Work section
    //   currentWorkHours.textContent = `${data[0].timeframes.weekly.current}hrs`;
    //   workHours.textContent = `${data[0].timeframes.weekly.previous}hrs`;
    //   dayWeekMonth.textContent = "Last Week";
    //   //Play section
    //   currentPlayHours.textContent = `${data[1].timeframes.weekly.current}hrs`;
    //   playHours.textContent = `${data[1].timeframes.weekly.previous}hrs`;
    //   dayWeekMonth1.textContent = "Last Week";
    //   //Study section
    //   currentStudyHours.textContent = `${data[2].timeframes.weekly.current}hrs`;
    //   studyHours.textContent = `${data[2].timeframes.weekly.previous}hrs`;
    //   dayWeekMonth2.textContent = "Last Week";
    //   //Exercise section
    //   currentExerciseHours.textContent = `${data[3].timeframes.weekly.current}hrs`;
    //   exerciseHours.textContent = `${data[3].timeframes.weekly.previous}hrs`;
    //   dayWeekMonth3.textContent = "Last Week";
    //   //Social section
    //   currentSocialHours.textContent = `${data[4].timeframes.weekly.current}hrs`;
    //   socialHours.textContent = `${data[4].timeframes.weekly.previous}hrs`;
    //   dayWeekMonth4.textContent = "Last Week";
    //   //Self Care section
    //   currentSelfCareHours.textContent = `${data[5].timeframes.weekly.current}hrs`;
    //   selfCareHours.textContent = `${data[5].timeframes.weekly.previous}hrs`;
    //   dayWeekMonth5.textContent = "Last Week";
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
    //   //Work section
    //   currentWorkHours.textContent = `${data[0].timeframes.monthly.current}hrs`;
    //   workHours.textContent = `${data[0].timeframes.monthly.previous}hrs`;
    //   dayWeekMonth.textContent = "Last Month";
    //   //Play section
    //   currentPlayHours.textContent = `${data[1].timeframes.monthly.current}hrs`;
    //   playHours.textContent = `${data[1].timeframes.monthly.previous}hrs`;
    //   dayWeekMonth1.textContent = "Last Month";
    //   //Study section
    //   currentStudyHours.textContent = `${data[2].timeframes.monthly.current}hrs`;
    //   studyHours.textContent = `${data[2].timeframes.monthly.previous}hrs`;
    //   dayWeekMonth2.textContent = "Last Month";
    //   //Exercise section
    //   currentExerciseHours.textContent = `${data[3].timeframes.monthly.current}hrs`;
    //   exerciseHours.textContent = `${data[3].timeframes.monthly.previous}hrs`;
    //   dayWeekMonth3.textContent = "Last Month";
    //   //Social section
    //   currentSocialHours.textContent = `${data[4].timeframes.monthly.current}hrs`;
    //   socialHours.textContent = `${data[4].timeframes.monthly.previous}hrs`;
    //   dayWeekMonth4.textContent = "Last Month";
    //   //Self Care section
    //   currentSelfCareHours.textContent = `${data[5].timeframes.monthly.current}hrs`;
    //   selfCareHours.textContent = `${data[5].timeframes.monthly.previous}hrs`;
    //   dayWeekMonth5.textContent = "Last Month";
    });
  });
