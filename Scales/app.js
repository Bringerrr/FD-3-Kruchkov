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
    function Scales(products) {
        if (products === void 0) { products = []; }
        this.sum = 0;
        this.nameList = [];
        this.products = products;
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var _this = this;
        this.products.forEach(function (i) {
            _this.sum += i.getWeight();
        });
        console.log(this.sum);
    };
    Scales.prototype.getNameList = function () {
        var _this = this;
        this.products.forEach(function (i) {
            _this.nameList.push(i.getName());
        });
        console.log(this.nameList);
    };
    return Scales;
}());
var apple1 = new Apple(98);
var apple2 = new Apple(76);
var tomato1 = new Tomato(76);
var prodArr = [apple1, apple2];
var prod3 = tomato1;
var newScales = new Scales(prodArr);
// newScales.change()
newScales.add(prod3);
newScales.getSumScale();
newScales.getNameList();
//# sourceMappingURL=app.js.map