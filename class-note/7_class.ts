class Person2{
    //ts 에서는 미리 type 지정(멤버변수 접근범위도 지정 가능)
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}