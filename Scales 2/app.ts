interface IWeighing {
    getWeight():number
}

interface ICalled {
    getName():string
}

interface IListed {
    getNameList():string[]
}

interface IScalable {
    getSumScale():number
}

abstract class Product implements IWeighing, ICalled  {

    name:string;
    weight:number;

    getWeight():number{
        return this.weight;
    }

    getName():string{
        return this.name;
    }
}

class Apple extends Product {
    name:string="Apple"
    weight:number;

    constructor(_weight:number) {
        super(); 
        this.weight=_weight;
    }
}

class Tomato extends Product {
    name:string="Tomato"
    weight:number;

    constructor(_weight:number) {
        super(); 
        this.weight=_weight;
    }
}

class Scales implements IScalable, IListed{
    products:Array<Product>;

    constructor(){
        this.products = []
    }

    add(Product):void {
        this.products.push(Product)
    }

    getSumScale():number{
        let sum:number = 0
        this.products.forEach(i =>{
            sum += i.getWeight()
        })
        return sum
    }

    getNameList():string[]{
        let nameList:string[]=[];
        this.products.forEach(i =>{
            nameList.push(i.getName())
        })
        return (nameList)
    }
}

let apple1:Apple=new Apple(98)
let apple2:Apple=new Apple(76)
let tomato1:Tomato=new Tomato(51)

let prodArr=[apple1,apple2,tomato1]

let newScales:Scales=new Scales();

newScales.add(apple1)
newScales.add(apple2)
newScales.add(tomato1)

console.log( newScales.getSumScale() );
console.log( newScales.getNameList() );