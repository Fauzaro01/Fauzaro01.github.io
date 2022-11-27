function timeloop() {
  var date = new Date();
  var h = date.getHours();
  var jam = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  var caption;

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  var data = [
    [0, 4, "[ 🌑 ] Selamat Malam"],
    [5, 10, "[ 🌅 ] Selamat Pagi"], //Store messages in an array
    [11, 13, "[ 🌤 ] Selamat Siang"],
    [14, 17, "[ ⛱ ] Selamat Sore"],
    [18, 24, "[ 🌑 ] Selamat Malam"],
  ];

  for (var i = 0; i < data.length; i++) {
    if (jam >= data[i][0] && jam <= data[i][1]) {
      caption = data[i][2];
    }
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  var result = time + " | " + caption + "!";
  // document.getElementById("clock").innerText = time;
  // document.getElementById("clock").textContent = time;

  document.getElementById("clock").innerText = result;
  document.getElementById("clock").textContent = result;

  setTimeout(timeloop, 1000);
}

timeloop();
