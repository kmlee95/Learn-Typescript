function add(a : number, b : number) : number{
    return a+b;
}

var result = add(10, 20);
result.toLocaleString();    //미리 타입을 선언 해주었기 때문에 api속성(정확한 자동완성, vscode intellisense) 제공받을 수 있다.