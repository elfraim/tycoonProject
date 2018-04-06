





//hidden elements
$("#mainbox").hide();
$("#menu").hide();
$("#maincontainer").hide();
$("#hangerDiv").hide();

// Creates the new compony & hides the creatediv.
$(".createbtn").click(function() {
  nameData = $("#cName").val();
  newCompany(nameData);
  console.log(nameData);
  $("#compName").html("<font size='5'>" + nameData + "</font>");
  $("#createcompanydiv").hide();
  $("#mainbox").show();
  $("#maincontainer").show();
});


//Home button hides menu div
$("#hanger").click(function(){
  sideMenuHide();
  $("#hangerDiv").show();
});

//Hanger button
$("#purchase").click(function(){
  sideMenuHide();
  $("#purchaseDiv").show();
  $("#purchaseDiv>ul").show();
});



//clicker
let $click = $("#clickbtn");
let $clickValue = $("#counter");
let clickMath = 1;


$click.click(function(){
  company.clickValue += clickMath;
  company.money += company.clickValue;
  $clickValue.html(company.money + "$");
  $click.html();
  $(".clickper").html("<font size='3'>" + company.clickValue + "</font>" + "<font size='3px'>$ Per click</font>")
});
