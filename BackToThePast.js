class BackToThePast {
    constructor(money, year) {
      this.money = money;
      this.year = year;
    }
  
    calculateMoneyNeeded() {
      let age = 18;
      let moneySpent = 0;
  
      for (let i = 1800; i <= this.year; i++) {
        if (i % 2 === 0) {
          moneySpent += 12000;
        } else {
          moneySpent += 12000 + 50 * age;
          age++;
        }
      }
  
      if (this.money >= moneySpent) {
        let moneyLeft = (this.money - moneySpent).toFixed(2);
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft} dollars left.`);
      } else {
        let moneyNeeded = (moneySpent - this.money).toFixed(2);
        console.log(`He will need ${moneyNeeded} dollars to survive.`);
      }
    }
  }
  let newInstance = new BackToThePast(100000, 2023); 
newInstance.calculateMoneyNeeded();