function dayStatus() {

  var inputTime = document.getElementById('hoursInput').value;
  var myTime = inputTime.split(':');
  var hours = parseInt(myTime[0]);
  var minutes = parseInt(myTime[1]);
  var partOfDay = " ";

  if (hours === 0 && minutes === 0) {
    partOfDay = " midnight";
  } else if (hours >= 0 && hours < 12) {
    partOfDay = " morning";
  } else if (hours === 12 && minutes === 0) {
    partOfDay = " noon";
  } else if (hours >= 12 && hours < 18) {
    partOfDay = " afternoon";
  } else {
    partOfDay = " evening";
  }

  alert('My favourite part of the day is ' + partOfDay + '.');
}
