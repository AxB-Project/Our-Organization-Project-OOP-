

var score=0


function showmenu() {
	if($(".menu").is(":visible")){
		$(".menu").slideUp(1000)
		
	} else {
		$(".menu").slideDown(1000)
	}
}

function showQuestions() {
	$(".slidepage").hide()
	$(".Questions").show(1000)
	$(".questionsList").show()

}
var questions =[
{question:"What is the thing that goes forward but never backward ?", answer:"time"},
{question:"Your mom have 4 sons: north , east and south. Who is is the 4th son?", answer:"me"},
{question:"A farmer has 17 goats. All of them but 8 die. How many goats are alive? ", answer:8},
{question:"How many months have 28 days?", answer:"all"}
]

function showq1() {
	$("#q1").html(questions[0].question)
	$("#form1").show()

	 
}
function sub1 () {
	
   	if(document.getElementById("ans").value===questions[0].answer){
		alert("Correct answer!")
		score++
	}
	else { alert("Wrong answer")} 
		
}


	

function showq2(){
	$("#q2").html(questions[1].question)
	$("#form2").show()  
}
function sub2 () {
	if(document.getElementById("ans").value===questions[1].answer){
		alert("Correct answer!")
		score++
	} else { alert("Wrong answer")} 
}

function showq3(){
	$("#q3").html(questions[2].question)
	$("#form3").show()
	
}
function sub3 () {
	if(document.getElementById("ans").value===questions[2].answer){
		alert("Correct answer!")
		score++
	} 
	else { alert("Wrong answer")} 
}
function showq4(){
	$("#q4").html(questions[3].question)
	$("#form4").show()
	
}

function sub4 () {
	if(document.getElementById("ans").value===questions[3].answer){
		alert("Correct answer!")
		score++
	} 
	else { alert("Wrong answer")} 
}
var counter=0
/*
function clickCounter(){
    counter++ ;
}; 
*/  

$(document).ready(function(){
  $("submit1").click(function(){
    counter ++;
  });
});

$(document).ready(function(){
  $("submit2").click(function(){
    counter ++;
  });
});

$(document).ready(function(){
  $("submit3").click(function(){
    counter ++;
  });
});

$(document).ready(function(){
  $("submit4").click(function(){
    counter ++;
  });
});

function showBoard() {
	switch(score){

		case "0":{
			document.getElementsByClassName("board").innerHTML= "you can't pass"
			break;
		}
		case "1":{
			document.getElementsByClassName("board").innerHTML= "your intelligence is low"
			break;
		}
		case "2":{
			document.getElementsByClassName("board").innerHTML="you're good"
			break;
		}
		case "3":{
			document.getElementsByClassName("board").innerHTML="GOOD JOB"
			break;
		}
		default:{
			document.getElementsByClassName("board").innerHTML="Albert Einstein"
			break;
		}
	}
	 
   $(".board").show(1000)
   $(".scoreboard").show(1000)
   $(".Questions").hide(1000)
}


/*
function sub1 () {
	if(document.getElementById('#submit1').onclicked = function(){
	 counter++	
	})  {
  
   	if(document.getElementById("ans").value===questions[0].answer){
		alert("Correct answer!")
		score++
	}
	else { alert("Wrong answer")} 
		
}
}
document.getElementById('submit1').onclick = function() {
   counter++;
}
document.getElementById('submit2').onclick = function() {
   counter++;
}
document.getElementById('submit3').onclick = function() {
   counter++;
}
document.getElementById('submit4').onclick = function() {
   counter++;
}

*/


