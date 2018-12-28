// calendar

const calendar = function *(startDate, days) {
  let result = [];
  // change it to go back to start of week (0=sun)
  let startDate2 = new Date(startDate);
  startDate2.setDate(startDate.getDate()-startDate.getDay());
  let currDate = startDate2;
  for (let offset=0; offset < days; offset++) {
    yield currDate;
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate()+1);
    currDate = nextDate;
  };
};


const cal = calendar(new Date(), 90);
let week = 0;
console.log("Su Mo Tu We Th Fr Sa");
let weekString="";
for (var day of cal) {
  if (day.getDay()===0) {
    console.log(weekString);
    weekString="";
    weekString += (day.getDate()<10) ? "0" : "";
    weekString += day.getDate() + " ";
  } else {
    weekString += (day.getDate()<10) ? "0" : "";
    weekString += day.getDate() + " ";
  }
}
