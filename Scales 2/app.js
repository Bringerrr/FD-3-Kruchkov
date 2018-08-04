var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getWeight = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_weight) {
        var _this = _super.call(this) || this;
        _this.name = "Apple";
        _this.weight = _weight;
        return _this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_weight) {
        var _this = _super.call(this) || this;
        _this.name = "Tomato";
        _this.weight = _weight;
        return _this;
    }
    return Tomato;
}(Product));
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (Product) {
        this.products.push(Product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        this.products.forEach(function (i) {
            sum += i.getWeight();
        });
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        this.products.forEach(function (i) {
            nameList.push(i.getName());
        });
        return (nameList);
    };
    return Scales;
}());
var apple1 = new Apple(98);
var apple2 = new Apple(76);
var tomato1 = new Tomato(51);
var prodArr = [apple1, apple2, tomato1];
var newScales = new Scales();
newScales.add(apple1);
newScales.add(apple2);
newScales.add(tomato1);
console.log(newScales.getSumScale());
console.log(newScales.getNameList());
//# sourceMappingURL=app.js.map