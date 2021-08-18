// ECMAScript6之前通过构造函数和原型混合使用模拟定义类
function Car(sColor, iDoors) {
  this.color = sColor;
  this.doors = iDoors;
}

Car.prototype.showColor = function () {
  console.log(this.color);
};

var oCar = new Car("red", 4);
oCar.showColor();

// ECMAScript6
class Car {

    // 等价于Car构造函数
  constructor(sColor, iDoors) {
    this.color = sColor;
    this.doors = iDoors;
  }

  // 等价于Car.prototype.showColor
  showColor(){
    console.log(this.color);
  }
  
}

var oCar = new Car("red", 4);
oCar.showColor();

let car = new class{
    //定义
};