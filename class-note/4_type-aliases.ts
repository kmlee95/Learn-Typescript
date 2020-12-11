// interface Person {
//     name : string;
//     age : number;
// }

type Person1 = {
    name : string;
    age : number;
}

var seho: Person1 = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {id : string; title: string; done: boolean };
function getTodo(todo : Todo){
}

//인터페이스와 타입의 차이
//가장 큰 차이점은 확장 가능/불가능 여부
//타입별칭은 확장이 불가능.. 그래서 type보단 interface로 선언