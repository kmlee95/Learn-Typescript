//union type
const logMessage = (value: string | number) => {
    if( typeof value === 'number'){
        value.toLocaleString();
    }
    if( typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');    //console.log(value);
}
let seho : string | number | boolean;
logMessage('hello');
logMessage(100);

//union type 특징
interface Developer{
    name: string;
    skill: string;
}
interface Person{
    name: string;
    age : number;
}
function askSomeone(someone: Developer | Person){
    someone.name;
    //someone.age;  //접근불가
    //someone.skill;//접근불가
}

//인터섹션 타입
var capt : string & boolean & number;
function test(someone: Developer & Person){
    //위와 다르게 가능, 실무에선 위의 유니온타입이 더 많이 쓰임.
    someone.age;
    someone.skill;
}

//유니온 타입과 인터섹션 타입의 차이점
askSomeone({name :'디벨로퍼', skill: '웹개발'});
askSomeone({name:'캡틴', age: 100});

//test({name :'디벨로퍼', skill: '웹개발'}); 인터섹션은 다 써줘야 한다.

