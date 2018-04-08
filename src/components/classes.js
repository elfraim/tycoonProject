class Company {
  constructor(companyName, money) {
    this.companyName = companyName;
    this.money = money;
    this.clickValue = 0;
    this.moneyPerSec = 0;
    this.hanger = {
      "bo737": 0,
      "bo767": 0,
      "bo777": 0,
      "bo747": 0,
      "bo787": 0
    };
    this.planesOwned = 0;
    this.totalValue = 0;
    this.fuelStorage = 0;
    this.storageCapacity = 1000;
  };
};

class Plane {
  constructor(planeName, planeValue, planeGenerate, planeFuelCost) {
    this.planeName = planeName;
    this.planeValue = planeValue;
    this.planeGenerate = planeGenerate;
    this.planeFuelCost = planeFuelCost;
  }
}

class Perk {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  };
};

const incClickPerk = new Perk("Increase Click Perk", 100);
const incStoragePerk = new Perk("Increase Storage Capacity", 100000);

const bo737 = new Plane("bo737", 50000, 100, 15);
const bo767 = new Plane("bo767", 100000, 250, 40);
const bo777 = new Plane("bo777", 500000, 1500, 120);
const bo747 = new Plane("bo747", 1500000, 4500, 500);
const bo787 = new Plane("bo787", 3500000, 9500, 1150);
