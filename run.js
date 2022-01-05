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
