// 1. interface 기본
interface User {
    age: number;
    name: string;
}

var seho: User = {
    age: 33,
    name: '세호'
}

const getUser = (user: User) => console.log(user);
const capt ={
    name : '경민',
    age : 100
}
getUser(capt);

// 2.함수의 스펙(구조)에 인터페이스를 활용(보통은 활용하지 않는다.)
interface SumFunction{
    (a: number, b:number): number;
}
let sum3: SumFunction;
sum3 = (a, b) => a + b;
//아래 방법으로 활용
const sum4 = (a: number, b:number): number => a + b;

// 3. 인덱싱
interface StringArray{
    [index: number]: string;
}
let arr: StringArray = ['a', 'b', 'c'];
//arr[0] = 10;
arr[0] = 'd';


// 4. 인터페이스 딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;
}

var obj = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
obj['cssFile'] = /\.css$/;
Object.keys(obj).forEach(value => console.log(value));


// 5. 인터페이스 확장
interface Person{
    name: string;
    age: number;
}
interface Developer extends Person{
    language: string;
}

let capt2 : Developer ={
    name : 'kyungmin',
    age : 30,
    language: 'test',
}
