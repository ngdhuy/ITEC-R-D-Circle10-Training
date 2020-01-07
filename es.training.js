class Animal{
    constructor(type = 'animal'){
        this.type = type
   }
   get type(){
       return this._type
   }

   set type(val){
       this._type = val.toUpperCase()
   }

   makeSound(){
       console.log('Making animal sound')
   }
}

let a = new Animal()
console.log(a.type)

class Cat extends Animal 
{
    constructor(){
        super('cat')
    }

    makeSound(){
        super.makeSound()
        console.log('Meow!')
    }
}

let b = new Cat()
console.log(b.type)

console.log(a)
console.log(b)
