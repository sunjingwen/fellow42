/* function sayHello(name: string, age: number = 18, ...params: any[]){
    
    var str: string = "";
    for(var i=0; i<params.length; i++){
        str += params[i] + " ";
    }
    
    console.log(name, age, str);
    
}

sayHello('lisi', 23, 180, "男", 1234567); */

function fn1(): string{
    return "";
}

function fn2(): void{

}

// 函数重载 overload
// function sayHello(name: string): string;
// function sayHello(name: string, age: number): string;

function sayHello(name: any, age?: any): string{
    if(age){
        console.log(name, age);
    }else{
        console.log(name);
    }
    return "";
}

sayHello('lisi', 12);
