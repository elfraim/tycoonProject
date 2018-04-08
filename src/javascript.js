const $mainBox = $("#mainbox");
const $clickerBox = $(".clickerbox");

//hidden elements
$("#mainbox").hide();
$("#menu").hide();
$("#maincontainer").hide();
$("#hangerDiv").hide();
$("#fuelDiv").hide();
$("#perkDiv").hide();
$("#staffDiv").hide();
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

//Hanger Button
$("#hanger").click(function() {
  sideMenuHide();
  $("#hangerDiv").show();
  $(".fuelInStorage").html(company.fuelStorage + "L");
  $("#hang737").html("Boeing 737-9: " + company.hanger["bo737"])
  $("#hang767").html("Boeing 767: " + company.hanger["bo767"])
  $("#hang777").html("Boeing 777X: " + company.hanger["bo777"])
  $("#hang747").html("Boeing 747-8: " + company.hanger["bo747"])
  $("#hang787").html("Boeing 787-9: " + company.hanger["bo787"])
});

//Purchase button
$("#purchase").click(function() {
  sideMenuHide();
  $("#purchaseDiv").show();
  $("#purchaseDiv>ul").show();
});

//Fuel Button
$("#fuel").click(function() {
  sideMenuHide();
  $("#fuelDiv").show();
  currentFuelPrice = fuelPrice();
  $("#fuelPrice").html(currentFuelPrice + "$")
});
//AT Button
$("#AT").click(function() {
  hideBuyPlane();
  $clickerBox.show();
  $mainBox.show();
});

//Perk Button
$("#perks").click(function() {
  sideMenuHide();
  $("#perkDiv").show();
})

//Staff Buttons
$("#staff").click(function() {
  sideMenuHide();
  $("#staffDiv").show();
});
//clicker button data
let $click = $("#clickbtn");
let $clickCounter = $("#counter");
let perClickValue = 1;
let tempMoney = 0;

//Clicker button
$click.click(function() {
  company.clickValue = perClickValue;
  company.money += company.clickValue;
  tempMoney += company.clickValue;
  $clickCounter.html("Cash: " + humanize(company.money) + "$");
  $click.html();
  company.totalValue = tempMoney;
  $(".clickper").html("<br /> <font size='3'>" + company.clickValue + "</font>" + "<font size='3px'>$ Per click</font>")
});

// Planes
$(".737").on("click", function() {
  $clickerBox.hide();
  $("#planeinfo").show();
  $("#planeinfo").load("./src/planeinfo/737.html");
});

$(".767").on("click", function() {
  $clickerBox.hide();
  $("#planeinfo").show();
  $("#planeinfo").load("./src/planeinfo/767.html");
});

$(".777").on("click", function() {
  $clickerBox.hide();
  $("#planeinfo").show();
  $("#planeinfo").load("./src/planeinfo/777.html");
});

$(".747").on("click", function() {
  $clickerBox.hide();
  $("#planeinfo").show();
  $("#planeinfo").load("./src/planeinfo/747.html");
})

$(".787").on("click", function() {
  $clickerBox.hide();
  $("#planeinfo").show()
  $("#planeinfo").load("./src/planeinfo/787.html");
})
////////////////////////////////////////////////////////
// Perk Buttons
$("#incClickValueBtn").on("click", function() {
  if (company.money >= incClickPerk.value) {
    perClickValue += 5;
    company.money -= incClickPerk.value;
    incClickPerk.value *= 1.15;
    $("#incClickValueBtn").html(Math.round(incClickPerk.value) + "$");
  } else {
    alert("Not enough cash");
  }
})

$("#incStorageCapacityBtn").on("click", function() {
  if(company.money >= incStoragePerk.value){
    company.storageCapacity += 1000;
    company.money -= incStoragePerk.value;
    incStoragePerk.value *= 1.50;
    $("#storageCapacity").html("Storage Capacity:" + company.storageCapacity + "L");
    $("#incStorageCapacityBtn").html(Math.round(incStoragePerk.value) + "$");
  } else {
    alert("Not enough cash");
  }
});

//Buy fuel button
let fuelAmountToBuy = Math.floor(Number($("#fuelAmount").val()));
$("#fuelAmount").on("change keyup paste", function() {
  fuelAmountToBuy = Number($("#fuelAmount").val());
  $("#totalFuelValue").html(fuelAmountToBuy * currentFuelPrice + "$")
});



$("#fuelBtn").on("click", function() {
  var checkStorage = fuelAmountToBuy + company.fuelStorage;
  if(company.money >= fuelAmountToBuy * currentFuelPrice && checkStorage < company.storageCapacity){
    company.fuelStorage += Number(fuelAmountToBuy);
    company.money -= fuelAmountToBuy * currentFuelPrice;
    runRefresh();
    $("#totalFuelValue").html("0$");
    $("#fuelAmount").html("0");
  } else {
    alert("Not enough cash or space in storage.");
  }
})

// Button Animation using Anime.js
var buttonEl = document.getElementById('clickbtn');

function animateButton(scale, duration, elasticity) {
  anime.remove(buttonEl);
  anime({targets: buttonEl, scale: scale, duration: duration, elasticity: elasticity});
}

function enterButton() {
  animateButton(1.2, 800, 400)
};
function leaveButton() {
  animateButton(1.0, 600, 300)
};

buttonEl.addEventListener('mouseenter', enterButton, false);
buttonEl.addEventListener('mouseleave', leaveButton, false);
