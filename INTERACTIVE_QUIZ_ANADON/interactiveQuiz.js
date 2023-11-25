var pos = 0,
test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
["Who cares ?", "Jesus", "Cagay de oro", "Davao City", "A"],

["Who Loves ?", "Me", "You", "Jesus", "C"],

["How many Exits are there in HCDC ?", "1", "2", "3", "B"],

["How many Cr Are there in HCDC", "20", "12", "15", "B"],

["How many are many?", "Yes", "No", "Cookie", "A"]
];

function _(x) {
return document.getElementById(x);
}

function renderQuestion() {
test = _("test");

if (pos >= questions.length) {

var showscore = Math.round(correct / questions.length * 100);
var minuteleft = parseInt((totalsecoriginal-totalsec) / 60, 10);
var sec = (totalsecoriginal-totalsec) - (minuteleft * 60);

  document.getElementById("online_start").src = "animatedthankyou.gif";


document.getElementById("showtime")


  test.innerHTML = "<h3>You got " + correct + " correct of " + questions.length + " questions</h3>";
  test.innerHTML += "<h3> Your Grade : " + showscore + "% </h3>";
  test.innerHTML += "<h4>Exam Finished in Time :" + minuteleft + " Minutes :" + sec + " Seconds</h4>";
  test.innerHTML += "<button onclick='EndExam()'>End the Exam</button>";
  _("test_status").innerHTML = "<h3>Test Completed</h3>";
  pos = 0;
  correct = 0;



  clearTimeout(tim);
  document.getElementById("starttime").style.display += 'none';
  document.getElementById("showtime").style.display += 'none';



  return false;
}
_("test_status").innerHTML = "<h3>Question " + (pos + 1) + " of " + questions.length + "</h3>";
question = questions[pos][0];
chA = questions[pos][1];
chB = questions[pos][2];
chC = questions[pos][3];
test.innerHTML = "<h3>" + question + "</h3>";
test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
test.innerHTML += "<button onclick='checkAnswer()'>Next</button><br><br>";


}

function checkAnswer() {
choices = document.getElementsByName("choices");
choice = -1;
for (var i = 0; i < choices.length; i++) {
  if (choices[i].checked) {
    choice = choices[i].value;
  }
}
if (choice == questions[pos][4]) {
  correct++;
}
pos++;
renderQuestion();
}

window.addEventListener("load", renderQuestion, false);


function EndExam() {

location.href = "Loginpage.htm";
}


var tim;
var showscore = Math.round(correct / questions.length * 100);
var totalsec =20;
var totalsecoriginal = totalsec;
var f = new Date();

function starttime() {
showtime();

var showcurtime = moment();
var curtimeformat = showcurtime.format('h:mm:ss a');
      var showendtime = showcurtime.add(totalsec, 's');
var endtimeFormat = showendtime.format('h:mm:ss a');

document.getElementById("starttime").innerHTML = "<h4>You started your Exam at " + curtimeformat + "</h4>";
document.getElementById("endtime").innerHTML = "<h4>You should finish on your Exam at " + endtimeFormat + "</h4>";
}

function showtime() {
console.log('showtime');
if (pos >= questions.length) 
{
clearTimeout(tim);
return;
}


totalsec--;

var min = parseInt(totalsec / 60, 10);
var sec = totalsec - (min * 60);

if (parseInt(sec) > 0) {
  document.getElementById("showtime").innerHTML = "Your Left Time is :" + min + " Minutes :" + sec + " Seconds";
  tim = setTimeout("showtime()", 1000);
} else {
  if (parseInt(sec) == 0) {
    document.getElementById("showtime").innerHTML = "Your Left Time is :" + min + " Minutes :" + sec + " Seconds";
    if (parseInt(min) == 0) {
      clearTimeout(tim);
      alert("Time Up");


      window.location.href = "Loginpage.htm";
    } else {
      document.getElementById("showtime").innerHTML = "Your Left Time is :" + min + " Minutes :" + sec + " Seconds";
      tim = setTimeout("showtime()", 1000);
    }
  }

}
}