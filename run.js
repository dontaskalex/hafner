function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}

var d = new Date(),
  month = d.getMonth() + 1,
  date = d.getDate(),
  year = d.getFullYear(),
  area = document.getElementById("date");

var dayName = new Date().toLocaleString("de-de", { weekday: "long" });

area.value = dayName + " " + date + "/" + month + "/" + year;

var t = new Date(),
  hours = t.getHours(),
  minutes = t.getMinutes(),
  timearea = document.getElementById("time");

if (minutes < 10) {
  minutes = "0" + minutes;
}

timearea.value = hours + ":" + minutes;

$("input").change(function (e) {
  for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
    var file = e.originalEvent.srcElement.files[i];

    var img = document.createElement("img");

    img.setAttribute("class", "pics");
    var reader = new FileReader();
    reader.onloadend = function () {
      img.src = reader.result;
    };
    reader.readAsDataURL(file);

    $(".pictures").before(img);

    if ($("#anhang").is(":empty")) {
      $("#anhang").prepend(
        "<p class='p3' id='down' onclick='down()'>Anhang:</p>"
      );
    }
  }
});

function down() {
  var tmp = document.getElementById("wrapper");
  tmp.style.top = "960mm";
  var tmp2 = document.getElementById("down");
  tmp2.setAttribute("onClick", "javascript: up();");
}

function up() {
  var tmp = document.getElementById("wrapper");
  tmp.style.top = "640mm";
  var tmp2 = document.getElementById("down");
  tmp2.setAttribute("onClick", "javascript: down();");
}

var ids = [
  "bauvorhaben",
  "anwesendemonteure",
  "heutegeleistetearbeiten",
  "zusatzarbeitenohneberechnung",
  "regiearbeitenmitberechnung",
  "relevantetelefonate",
  "datum",
  "zeit",
  "teilgenommenepersonen",
  "thema",
  "betrifft",
  "gesprächsprotokoll",
  "gezeichnet"
];

for (var i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).value = getSavedValue(ids[i]);
  document.getElementById(ids[i]).style.height = getSavedValue(
    ids[i] + "height"
  );
}

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e) {
  var id = e.id; // get the sender's id to save it .
  var idheight = id + "height";
  var val = e.value; // get the value.
  var he = e.style.height;
  //document.getElementById("demo").innerHTML +=
  //  "localstorage (" + id + ", " + val + "); ";
  localStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override .
  localStorage.setItem(idheight, he);
  //document.getElementById("demo").innerHTML +=
  //  "localstorage (" + idheight + ", " + he + "); ";
}

function getSavedValue(v) {
  if (!localStorage.getItem(v)) {
    return ""; // You can change this to your defualt value.
  }
  return localStorage.getItem(v);
}
//get the saved value function - return the value of "v" from localStorage.

function removeValues() {
  localStorage.clear();
  window.location.reload();
}

function refresher() {
  var tmp = document.getElementById("bauvorhaben");

  saveValue(tmp);

  //document.getElementById("demo").innerHTML += tmp.value;
}

setInterval(refresher, 500);
