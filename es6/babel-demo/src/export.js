// export let a = 666;
// export let fn1 = () => 'hello';


let a = 666;
let fn1 = () => 'hello';
export { a, fn1 }

class Person {
  constructor(name) {
    this.name = name
  }
  sleep() {
    console.log(this.name + ' is sleeping');
  }
}

export default Person