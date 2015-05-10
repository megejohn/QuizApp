$(function(){
$('#start').click(function(){    		
    $('#getStarted').hide();
   	$('#question1').show();
})
$('#q1button').click(function(){
	$('#question1').hide();
	$('#question2').show();
	$('#question3').hide();
	$('#question4').hide();
   	$('#question5').hide();
})
$('#q2button').click(function(){
	$('#question1').hide();
	$('#question2').hide();
	$('#question3').show();
	$('#question4').hide();
   	$('#question5').hide();
})
$('#q3button').click(function(){
	$('#question1').hide();
	$('#question2').hide();
	$('#question3').hide();
	$('#question4').show();
   	$('#question5').hide();
})
$('#q4button').click(function(){
	$('#question1').hide();
	$('#question2').hide();
	$('#question3').hide();
	$('#question4').hide();
   	$('#question5').show();
});
});
  

//$('#shuffle').cycle({ 
   // fx:     'shuffle', 
    //easing: 'easeOutBack', 
    //delay:  -4000 
//});