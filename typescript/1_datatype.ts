var num: number = 5; //定义number类型的变量：num
var str: string = "abc"; //定义string类型的变量：str
var bool: boolean = true; //定义boolean类型的变量：bool

// array
var arr = ["abc", 123, true];
// java语言中
// int[] arr2 = new int[5];
var arr2: number[] = [11, 22, 33];
var arr3: string[] = ["aa", "bb"];

// tupple元组: 它就是一种有顺序的数组
// 1. 元组中的元素的类型可以不一样
// 2. 元组中的声明元素的数据类型与赋值时的数据类型必须一致
var tup: [string, number, boolean] = ["abc", 123, true];
// tup[0] = "def";
tup.push(false);

// 枚举
enum Gender{
    Male = 'male',
    Female = 'female'
}
var gender = Gender.Male;
console.log(Gender.Male);

if(gender == Gender.Male){
    console.log('男');
}else if(gender == Gender.Female){
    console.log('女');
}

// any
var x: any = 5;
x = "abc";
// 1. 当编程阶段，你不确定用户输入的类型是什么
// var input: any = prompt();
// 2. 你需要一个使用多种类型的数组
// var arr4: any = ["abc", 123, true];

// void
/* function fn1(): void{
    
} */

// never: 类型表示的是那些永不存在的值的类型
/* function fn2(): never{
    // if(1 == 1){
        throw new Error('出错啦！！');
    // }
}
fn2();

function infiniteLoop(): never {
    while (true) {
    }
} */

// 类型推论
var xx = 5;
// xx = "abc";

class Animal{}
class Dog extends Animal{}
class Cat extends Animal{}
class Fish extends Animal{}

var zoo: Animal[] = [new Dog(), new Cat()];
// 1. any
// 2. Dog | Cat
// 3. Animal
// zoo.push(123);
zoo.push(new Fish()); 

// 上下文类型
window.onmousedown = function(event: MouseEvent) {
    console.log(event.button);  //<- Error
};

window.onkeydown = function(event: KeyboardEvent) {
    // console.log(event.button);  //<- Error
};

// 联合类型
var xxx: string | number = "abc";
xxx = 123;

var arr5: (string | number)[] = ["abc", 123];

// 类型断言
var someValue: any = "abc";

console.log(   <string>someValue.length    );


// console.log(zoo);




