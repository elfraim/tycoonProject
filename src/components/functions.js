//functions
var company;

function newCompany(name) {
  company = new Company(name, 0);
}

function sideMenuHide() {
  $("#purchaseDiv").hide();
  $("#hangerDiv").hide();
  $("#fuelDiv").hide();
  $("#perkDiv").hide();
  $("#staffDiv").hide();
};

function hideBuyPlane() {
  $("#bo737").hide();
  $("#bo767").hide();
  $("#planeinfo").hide();
}

function buyPlane(plane) {
  theNameOfPlane = plane.planeName
  if (company.money >= plane.planeValue) {
    console.log("Bought " + plane.planeName);
    company.moneyPerSec += plane.planeGenerate;
    company.hanger[theNameOfPlane] += 1;
    company.planesOwned++;
    $("#planesOwned").html("Planes Owned: " + company.planesOwned);
    company.money -= plane.planeValue;
    company.totalValue += plane.planeValue
    buyPlaneFuelUsage(plane);
    alert("Sucessfuly purchased");
  } else {
    alert("Not enough cash");
  };
}

//interval money adder

function moneyPerSec() {
  $clickCounter.html("Cash: " + humanize(company.money) + "$");
  company.money += company.moneyPerSec;
  tempMoney += company.moneyPerSec;
  company.totalValue = tempMoney;
  tempPerSec = company.moneyPerSec;
  $("#totalValue").html("Total Co Value: " + company.totalValue + "$");
}


var refreshInterval = window.setInterval(refresh, 1000);
var runningInterval = true;

function runRefresh(){
  if(company.fuelStorage > 0 && company.hanger.bo737 > 0 && runningInterval == false){
    refreshInterval = window.setInterval(refresh, 1000);
    runningInterval = true;
    $("#fuel").css("color", "white");
  };
};

function refresh() {
  moneyPerSec();
  updateFuel();
};

/// Current Fuel Price randmoized each click
var currentFuelPrice;

function humanize(x) {
  return x.toFixed(2).replace(/\.?0*$/, '');
}

function fuelPrice() {
  let randomFuelPrice = Math.random() * (2.40 - 1.60) + 1.60;
  final = humanize(randomFuelPrice);
  return final;
}

// Fuel Usage Algorithm
var totalLiterPerSec = 0;
bo737usage = bo737.planeFuelCost //15
bo747usage = bo747.planeFuelCost //500
bo767usage = bo767.planeFuelCost //40
bo777usage = bo777.planeFuelCost //120
bo787usage = bo787.planeFuelCost //1150



function buyPlaneFuelUsage(plane){
  totalLiterPerSec += plane.planeFuelCost;
}


function updateFuel() {
  $("#fuelInStorage").html("Fuel In Storage:" + company.fuelStorage + "L");
  company.fuelStorage -= Number(totalLiterPerSec);
  if(company.fuelStorage <= 0 && company.hanger.bo737 > 0){
    company.fuelStorage = 0;
    $("#fuelInStorage").html("Fuel In Storage:" + company.fuelStorage + "L");
    runningInterval = false;
    $("#fuel").css("color", "red");
    clearInterval(refreshInterval);
  };
};
