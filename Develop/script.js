// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var myDay = [
    {
      id: "0",
      time: "09",
      meridam: "am",
      memo: "",
    },
    {
      id: "1",
      time: "10",
      meridam: "am",
      memo: "",
    },
    {
      id: "2",
      time: "11",
      meridam: "am",
      memo: "",
    },
    {
      id: "3",
      time: "12",
      meridam: "pm",
      memo: "",
    },
    {
      id: "4",
      time: "01",
      meridam: "pm",
      memo: "",
    },
    {
      id: "5",
      time: "02",
      meridam: "pm",
      memo: "",
    },
    {
      id: "6",
      time: "03",
      meridam: "pm",
      memo: "",
    },
    {
      id: "7",
      time: "04",
      meridam: "pm",
      memo: "",
    },
    {
      id: "8",
      time: "05",
      meridam: "pm",
      memo: "",
    }
  ]

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?//

  $(".saveBtn").on("click", function() {
    var memo = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, memo)
})
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?//
  var currentHour = dayjs().format('hh:mm:ss');
  var hour = document.getElementById("hour-10");
  var hour = document.getElementById("hour-11");
  var hour = document.getElementById("hour-12");
  var hour = document.getElementById("hour-1");
  var hour = document.getElementById("hour-2");
  var hour = document.getElementById("hour-3");
  var hour = document.getElementById("hour-4");
  var hour = document.getElementById("hour-5");

  if (myDay > currentHour) {
    var hour = document.getElementById("hour-9");
    hour.classList.remove("id");
  }
else if(myDay > currentHour)  {
  var hour = document.getElementById("hour-10");
  hour.classList.remove("id");
}

else if 
(myDay > currentHour) {
  var hour = document.getElementById("hour-11");
  hour.classList.remove("id");
}

else if 
(myDay > currentHour) {
  var hour = document.getElementById("hour-12");
  hour.classList.remove("id");
}

else if 
(myDay > currentHour) {
  var hour = document.getElementById("hour-01");
  hour.classList.remove("id");
}

else if 
(myDay > currentHour) {
  var hour = document.getElementById("hour-02");
  hour.classList.remove("id");
}

else if 
(myDay > currentHour) {
  var hour = document.getElementById("hour-03");
  hour.classList.remove("id");
}

else if 
(myDay > currentHour) {
  var hour = document.getElementById("hour-04");
  hour.classList.remove("id");
}

else if 
(myDay > currentHour) {
  var hour = document.getElementById("hour-05");
  hour.classList.remove("id");
}
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?//
  var memo = document.querySelector("#memo");
  localStorage.setItem("memo", memo);
 
function saveMemo() {
  localStorage.setItem("myDay", JSON.stringify(myDay));
}
  // TODO: Add code to display the current date in the header of the page.
  setInterval(function getHeaderDate(){
  const currentDay = dayjs();
  const formattedDate = currentDay.format('dddd,MMMM D,YYYY h:mm:ss');
  $('#currentDay').text(formattedDate);
  
},1000);


});
