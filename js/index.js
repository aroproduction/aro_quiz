var pos = 0, test, test_status, question, choice, choices, chA, chB, chC,chD, correct = 0;
var questions = [
    [ "What is the favourite colour of Aritra?", "White", "Red", "Green","Yellow", "B" ],
	[ "Which Bollywood Movie do Aritra like the most?", "Taare Zameen Par", "Dhoom", "3 Idiots","Ghajini", "C" ],
	[ "What is the favourite drink of Aritra?", "Tea", "Coffee", "Coca Cola","Fruit Juice", "A" ],
	[ "Which Location do Aritra like the most?", "Beach", "Mountains", "Forests","Home", "C" ],
	[ "Which subject is Aritra's Favourite?", "Chemistry", "Maths", "Physics", "Computer", "D"]
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<font class='dj'>You got "+correct+" of "+questions.length+" questions correct</font><br><br> <button class='btn' onclick='aritra()'>Tap here to view Correct Answers</button>";

		_("test_status").innerHTML = "<font id='ario'>Test Completed</font>";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "<u>Question </u>"+(pos+1)+"<u> of </u>"+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	test.innerHTML = "<h3 ><font class='mario'>"+question+"</h3>";
	test.innerHTML += "<label class='radiocontainer' for='chA'><input type='radio' name='choices' value='A' id='chA'> "+chA+"<span class='circle'></span></label><br>";
	test.innerHTML += "<label class='radiocontainer' for='chB'><input type='radio' name='choices' value='B' id='chB'> "+chB+"<span class='circle'></span></label><br>";
	test.innerHTML += "<label class='radiocontainer' for='chC'><input type='radio' name='choices' value='C' id='chC'> "+chC+"<span class='circle'></span></label><br>";
	test.innerHTML += "<label class='radiocontainer' for='chD'><input type='radio' name='choices' value='D' id='chD'> "+chD+"<span class='circle'></span></label><br><br>";

	test.innerHTML += "<button onclick='checkAnswer()' class='btn'>Submit Answer</button>";
	test.innerHTML += "<button onclick='checkAnswer()' class='btn'>Skip >></button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][5]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
function aritra(){
	test.innerHTML = "<button class='btn'>-- Answers --</button> <br><br> <font class='thunder'><b>1)"+questions[0][0]+" ---- Red<br>2)"+questions[1][0]+" ---- 3 Idiots<br>3)"+questions[2][0]+" ---- Tea<br>4)"+questions[3][0]+" ---- Forests<br>5) "+questions[4][0]+" ---- Computer</b></font>";
}
document.addEventListener('contextmenu', event => event.preventDefault());