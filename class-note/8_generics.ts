// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('하이');
// logText(true);

// function logText<T>(text: T):T{
//     console.log(text);
//     return text;
// }

// logText<string>('하이');

//별로 좋지 x(중복으로 함수 생산..)
// function logText1(text: string){
//     console.log(text);
//     return text;
// }
// function logNumber(num: number){
//     console.log(num);
//     return num;
// }
// logText1('a');
// logNumber(10);

//제네릭 방식과 기본 이넘방식의 차이점과 문제
//1. string,number로 제한, 반환값 해결 x
function logText(text: string | number){
    console.log(text);
    //text :텍스트의 타입은 스트링과 넘버뿐 ..
    
    return text;
}
const test1 = logText('ab');
//test1.spilt (반환값 해결 x)
logText('a');
logText(10);



//제네릭의 장점과 타입 추론에서의 이점
function LogText1<T>(text: T):T{
    console.log(text);
    return text;
}
//아래와 같이 선언
LogText1<string>('a');
LogText1<number>(10);
LogText1<boolean>(true);