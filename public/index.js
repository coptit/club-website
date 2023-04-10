// Count-Down Timer for contest:
let contest_date = new Date("Apr 11, 2023 20:00:00").getTime();
// Needs to be set everytime a contest occures

function reg_close() {
  document.getElementsByClassName("event-register")[0].style.display = "none";
}

let E = setInterval(() => {
  let current = new Date().getTime();
  let diff = contest_date - current;
  // diff is the time remaining;
  let days = Math.floor(diff / 86400000);
  let hrs = Math.floor((diff % 86400000) / 3600000);
  let mins = Math.floor((diff % 3600000) / 60000);
  let secs = Math.floor((diff % 60000) / 1000);
  if (days <= 0 && hrs <= 0 && mins <= 0 && secs <= 0) {
    document.getElementsByClassName("event-desc")[0].innerHTML =
      "Event registrations closed";
    reg_close();
    clearInterval(E);
  } else {
    document.getElementById("event1-in").innerHTML =
      days + " days : " + hrs + " hrs : " + mins + " m : " + secs + " s";
  }
}, 1000);
