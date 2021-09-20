function previousDate (year, month, day) {
    let dateString = new Date(year, month-1, day);
    dateString.setDate(day-1);
    console.log(dateString.getFullYear() + '-' + (dateString.getMonth() + 1) + '-' + dateString.getDate());
}

previousDate(2016, 9, 30);
previousDate(2016, 10, 1);