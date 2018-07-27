
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
    products:any[];
    sum:number = 0;
    nameList:string[]=[];

    constructor(products:object[]=[]) {
        this.products=products;
    }

    add(product:object):void {
        this.products.push(product)
    }

    getSumScale():void{
        this.products.forEach(i =>{
            this.sum += i.getWeight()
        })
        console.log(this.sum)
    }

    getNameList():void{
        this.products.forEach(i =>{
            this.nameList.push(i.getName())
        })
        console.log(this.nameList)
    }
}

let apple1:Apple=new Apple(98)
let apple2:Apple=new Apple(76)
let tomato1:Tomato=new Tomato(76)

let prodArr=[apple1,apple2]
let prod3 = tomato1

let newScales:Scales=new Scales(prodArr);

newScales.add(prod3)
newScales.getSumScale();
newScales.getNameList();
