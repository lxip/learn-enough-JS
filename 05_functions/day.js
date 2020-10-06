// Returns the day of the week for the given date.
let dayName = (date) => {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
    let day = dayName(date)
    return `Hello world! Happy ${day}`;
}

