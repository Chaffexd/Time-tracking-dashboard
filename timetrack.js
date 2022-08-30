// 3 tab options
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

// The hours that need to be updated
const dayWeekMonth = document.getElementById("dwm");
const dayWeekMonth1 = document.getElementById("dwm1");
const dayWeekMonth2 = document.getElementById("dwm2");
const dayWeekMonth3 = document.getElementById("dwm3");
const dayWeekMonth4 = document.getElementById("dwm4");
const dayWeekMonth5 = document.getElementById("dwm5");
// Work
const currentWorkHours = document.getElementById("currentWorkHours");
const workHours = document.getElementById("workHours");
// Play
const currentPlayHours = document.getElementById("currentPlayHours");
const playHours = document.getElementById("playHours");
// Study
const currentStudyHours = document.getElementById("currentStudyHours");
const studyHours = document.getElementById("studyHours");
// Exercise
const currentExerciseHours = document.getElementById("currentExerciseHours");
const exerciseHours = document.getElementById("exerciseHours");
// Social Hours
const currentSocialHours = document.getElementById("currentSocialHours");
const socialHours = document.getElementById("socialHours");
// Self Care
const currentSelfCareHours = document.getElementById("currentSelfCareHours");
const selfCareHours = document.getElementById("selfCareHours");


fetch("/data.json")
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
    .then(data => {
        console.log(data);
        // The default text
        //Work section
        currentWorkHours.textContent = `${data[0].timeframes.daily.current}hrs`;
        workHours.textContent = `${data[0].timeframes.daily.previous}hrs`;
        dayWeekMonth.textContent = "Day";
        //Play section
        currentPlayHours.textContent = `${data[1].timeframes.daily.current}hrs`;
        playHours.textContent = `${data[1].timeframes.daily.previous}hrs`;
        dayWeekMonth1.textContent = "Day";
        //Study section
        currentStudyHours.textContent = `${data[2].timeframes.daily.current}hrs`;
        studyHours.textContent = `${data[2].timeframes.daily.previous}hrs`;
        dayWeekMonth2.textContent = "Day";
        //Exercise section
        currentExerciseHours.textContent = `${data[3].timeframes.daily.current}hrs`;
        exerciseHours.textContent = `${data[3].timeframes.daily.previous}hrs`;
        dayWeekMonth3.textContent = "Day";
        //Social section
        currentSocialHours.textContent = `${data[4].timeframes.daily.current}hrs`;
        socialHours.textContent = `${data[4].timeframes.daily.previous}hrs`;
        dayWeekMonth4.textContent = "Day";
        //Self Care section
        currentSelfCareHours.textContent = `${data[5].timeframes.daily.current}hrs`;
        selfCareHours.textContent = `${data[5].timeframes.daily.previous}hrs`;
        dayWeekMonth5.textContent = "Day"; 

        daily.addEventListener("click" , () => {
            daily.classList.add("active");
            weekly.classList.remove("active");
            monthly.classList.remove("active");
            //Work section
            currentWorkHours.textContent = `${data[0].timeframes.daily.current}hrs`;
            workHours.textContent = `${data[0].timeframes.daily.previous}hrs`;
            dayWeekMonth.textContent = "Day";
            //Play section
            currentPlayHours.textContent = `${data[1].timeframes.daily.current}hrs`;
            playHours.textContent = `${data[1].timeframes.daily.previous}hrs`;
            dayWeekMonth1.textContent = "Day";
            //Study section
            currentStudyHours.textContent = `${data[2].timeframes.daily.current}hrs`;
            studyHours.textContent = `${data[2].timeframes.daily.previous}hrs`;
            dayWeekMonth2.textContent = "Day";
            //Exercise section
            currentExerciseHours.textContent = `${data[3].timeframes.daily.current}hrs`;
            exerciseHours.textContent = `${data[3].timeframes.daily.previous}hrs`;
            dayWeekMonth3.textContent = "Day";
            //Social section
            currentSocialHours.textContent = `${data[4].timeframes.daily.current}hrs`;
            socialHours.textContent = `${data[4].timeframes.daily.previous}hrs`;
            dayWeekMonth4.textContent = "Day";
            //Self Care section
            currentSelfCareHours.textContent = `${data[5].timeframes.daily.current}hrs`;
            selfCareHours.textContent = `${data[5].timeframes.daily.previous}hrs`;
            dayWeekMonth5.textContent = "Day";   
        });
        weekly.addEventListener("click", () => {
            weekly.classList.add("active");
            daily.classList.remove("active");
            monthly.classList.remove("active");
            //Work section
            currentWorkHours.textContent = `${data[0].timeframes.weekly.current}hrs`;
            workHours.textContent = `${data[0].timeframes.weekly.previous}hrs`;
            dayWeekMonth.textContent = "Week";
            //Play section
            currentPlayHours.textContent = `${data[1].timeframes.weekly.current}hrs`;
            playHours.textContent = `${data[1].timeframes.weekly.previous}hrs`;
            dayWeekMonth1.textContent = "Week";
            //Study section
            currentStudyHours.textContent = `${data[2].timeframes.weekly.current}hrs`;
            studyHours.textContent = `${data[2].timeframes.weekly.previous}hrs`;
            dayWeekMonth2.textContent = "Week";
            //Exercise section
            currentExerciseHours.textContent = `${data[3].timeframes.weekly.current}hrs`;
            exerciseHours.textContent = `${data[3].timeframes.weekly.previous}hrs`;
            dayWeekMonth3.textContent = "Week";
            //Social section
            currentSocialHours.textContent = `${data[4].timeframes.weekly.current}hrs`;
            socialHours.textContent = `${data[4].timeframes.weekly.previous}hrs`;
            dayWeekMonth4.textContent = "Week";
            //Self Care section
            currentSelfCareHours.textContent = `${data[5].timeframes.weekly.current}hrs`;
            selfCareHours.textContent = `${data[5].timeframes.weekly.previous}hrs`;
            dayWeekMonth5.textContent = "Week";   
        });
        monthly.addEventListener("click", () => {
            daily.classList.remove("active")
            monthly.classList.add("active");
            weekly.classList.remove("active");
            //Work section
            currentWorkHours.textContent = `${data[0].timeframes.monthly.current}hrs`;
            workHours.textContent = `${data[0].timeframes.monthly.previous}hrs`;
            dayWeekMonth.textContent = "Month";
            //Play section
            currentPlayHours.textContent = `${data[1].timeframes.monthly.current}hrs`;
            playHours.textContent = `${data[1].timeframes.monthly.previous}hrs`;
            dayWeekMonth1.textContent = "Month";
            //Study section
            currentStudyHours.textContent = `${data[2].timeframes.monthly.current}hrs`;
            studyHours.textContent = `${data[2].timeframes.monthly.previous}hrs`;
            dayWeekMonth2.textContent = "Month";
            //Exercise section
            currentExerciseHours.textContent = `${data[3].timeframes.monthly.current}hrs`;
            exerciseHours.textContent = `${data[3].timeframes.monthly.previous}hrs`;
            dayWeekMonth3.textContent = "Month";
            //Social section
            currentSocialHours.textContent = `${data[4].timeframes.monthly.current}hrs`;
            socialHours.textContent = `${data[4].timeframes.monthly.previous}hrs`;
            dayWeekMonth4.textContent = "Month";
            //Self Care section
            currentSelfCareHours.textContent = `${data[5].timeframes.monthly.current}hrs`;
            selfCareHours.textContent = `${data[5].timeframes.monthly.previous}hrs`;
            dayWeekMonth5.textContent = "Month";   
        });
    })

