
abstract class Product {

    name:string;
    weight:number;

    getWeight(){
        return this.weight;
    }

    getName(){
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

class Scales{
    products:Array<Product>;

    add(product:Array<Product>):void {
        this.products.push(product)
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
let tomato1:Tomato=new Tomato(76)

let prodArr=[apple1,apple2]
let prod3 = [tomato1]

let newScales:Scales=new Scales();

newScales.add(prodArr)

// newScales.add(prod3)
newScales.getSumScale();
newScales.getNameList();
