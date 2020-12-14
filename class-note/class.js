//ES2015(ES6)
class Person {
    //클래스 로직
    constructor(name, age){
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30); //constructor 로직 실행(생성 되었습니다.);

//javascript 는 prototype기반 언어

//클래스를 만들지 않고 생성자 함수로 가능.(프로토타입과 클래스와의 관계)
function Person(name, age){
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);

//타입스크립트의 클래스문법
