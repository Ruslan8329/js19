//////////////////////////////////////////////////Задание 1////////////////////////////////////////////////

class Circle {
  radius;
  constructor(radius) {
    this.radius = radius;
  }
  get circleRadius() {
    return this.radius;
  }
  set circleRadius(value) {
    this.radius = value;
  }
  get circleDiametr() {
    return this.radius * 2;
  }
}

let circle = new Circle(10);
console.log(circle.circleRadius);
let newCircle = new Circle(6);
console.log(newCircle.circleRadius);
console.log(circle.circleDiametr);

///////////////////////////////////////////////Задание 2////////////////////////////////////////////////

// class HtmlElement {
//     constructor() {
//         this.tagName = this.tagName,
//         this.closeTag = this.closeTag,
//         this.textContent = this.textContent,
//         this.arrayAtr = this.arrayAtr,
//         this.arrStyle = this.arrStyle,
//         this.style = this.style,
//         this.arrAtr = this.arrAtr,
//     }
// }

/////////////////////////////////////////////////Задание 3////////////////////////////////////////

class CssClass {
  constructor(className, style) {
    (this.className = className), (style = style);
  }
}

let styles = new CssClass({
  color: "blue",
  fontsize: "10px",
  backgroundColor: "white",
});
console.log(styles);

///////////////////////////////////////////////////////////////////////////////////////////////

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Привет ${this.name} мне ${this.age}`);
  }
}
let message = new Person("Ruslan", 20);
message.sayHello();
