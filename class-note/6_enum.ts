//숫자형 enum
enum Shoes {
    Nike,   //0
    Adidas  //1
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0;

//문자형 enum
enum Shoes1{
    Nike = '나이키',
    Adidas = '아디다스'
}
let myShoes1 = Shoes1.Nike;
console.log(myShoes1);

//예제
enum Answer{
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: Answer) {
    if(answer === Answer.Yes){
        console.log('정답입니다.');
    }
    if(answer === Answer.No){
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);    //enum에서 제공하는 데이터만 입력 가능
// askQuestion('yes');
// askQuestion('예스');
// askQuestion('Y');