var today = new Date();
var diffDays = 0;
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
var curr_date = today.getDate();
var curr_month = today.getMonth();
var curr_year = today.getFullYear();

$("#todayDate").html(m_names[curr_month] + ". " + curr_date + ", " + curr_year);
$("#datepicker").datepicker();
var resultString = "";

function daysLeft() {
    var a = $( "#datepicker" ).datepicker('getDate').getTime();
    var b = today.getTime();
    var c = 24*60*60*1000;
    var diffDays = Math.floor((a - b)/c) + 1;

    resultString = createResultString(diffDays);
}

$("#datepicker").on("change", function(){
    daysLeft();
    $("#result").html(resultString);
});


// 16. STRETCH Challenges:

// For the highly ambitious, you may write a couple if statements and customize the result HTML string accordingly.
// Here are the possibilities I've thought of; there may be more.
// condition 1:  there is an input but someone has selected a date in the past
// condition 2:  there is an input and the day is tomorrow
// condition 3:  there is an input and the date is in the future
// condition 4:  there is NO input but someone has selected a date in the past
// condition 5:  there is NO input and the day is tomorrow
// condition 6:  there is NO input and the date is in the future.

function createResultString(numDays){
	if(numDays > 1){
		return "<p>You have " + numDays + " days left!</p>";
	}
	else if (numDays == 1){
		return "<p>That's tomorrow!</p>";
	}	
	else if (numDays == 0){
		return "<p>That's today!</p>";
	}	
	else if (numDays < 0){
		return "<p>That date already passed!</p>";
	}
}

