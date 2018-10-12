var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var tom = {
    mingzi: 'jack',
    age: 7,
    id: 9,
    aaa: 9,
    bbb: 'aaaa'
};
console.log(tom);
var lists = [1, 2, 3, 4, 5];
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6));
var mySum = function (a, b) {
    return a + b;
};
console.log(mySum(8, 9));
var getNum;
getNum = function (a, b) {
    return a + b;
};
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom1', 'Cat');
var cat = buildName(undefined, 'Cat');
console.log(tomcat);
console.log(cat);
function aname(x) {
    console.log(x);
}
console.log(aname([1, 2]));
var days;
(function (days) {
    days[days["wd"] = 0] = "wd";
    days[days["wr"] = 1] = "wr";
    days[days["ef"] = 2] = "ef";
    days[days["ger"] = 3] = "ger";
    days[days["hr"] = 4] = "hr";
    days[days["hret"] = 5] = "hret";
    days[days["htr"] = 6] = "htr";
})(days || (days = {}));
console.log(days['wd']);
console.log(days['ger']);
function zhengXing() {
    var yangzia = '刘德华';
    {
        var yangzib = '小沈阳';
        console.log('技术胖整形成了' + yangzib + '的样子');
    }
    console.log('技术胖整形成了' + yangzia + '的样子');
    console.log('技术胖整形成了' + yangzia + '的样子');
}
zhengXing();
var jspang = '技术胖';
var jspanga = new String("jspang.com");
console.log(jspang);
console.log(jspanga);
var XiaoTianTian = /** @class */ (function () {
    function XiaoTianTian(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    XiaoTianTian.prototype.say = function () {
        console.log(this.name, this.age, this.height);
    };
    XiaoTianTian.prototype.sayLove = function () {
        console.log('i love you');
    };
    return XiaoTianTian;
}());
var xiaotiantian = new XiaoTianTian('李冰冰', 18, '170cm');
console.log(xiaotiantian.name);
xiaotiantian.say();
var XiaoMeiNv = /** @class */ (function (_super) {
    __extends(XiaoMeiNv, _super);
    function XiaoMeiNv(name, age, height, tedian) {
        var _this = _super.call(this, name, age, height) || this;
        _this.tedian = tedian;
        _this.name = name;
        _this.height = height;
        _this.age = age;
        return _this;
    }
    XiaoMeiNv.prototype.skill = function () {
        console.log(this.name, this.age, this.height, this.tedian);
    };
    XiaoMeiNv.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log('建立工厂');
    };
    return XiaoMeiNv;
}(XiaoTianTian));
var xiaomeinv = new XiaoMeiNv('李美女', 8, '170cm', 'lol');
console.log(666, xiaomeinv);
xiaomeinv.say();
xiaomeinv.skill();
var myHusband = {
    sex: '男',
    interest: '看书',
    buy: true
};
console.log(myHusband);
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、富', '高'));
var shuaige;
(function (shuaige) {
    var dehua = /** @class */ (function () {
        function dehua() {
            this.name = '刘德华';
        }
        dehua.prototype.talk = function () {
            console.log('我是' + this.name);
        };
        return dehua;
    }());
    shuaige.dehua = dehua;
})(shuaige || (shuaige = {}));
var bajie;
(function (bajie) {
    var dehua = /** @class */ (function () {
        function dehua() {
            this.name = '马德华';
        }
        dehua.prototype.talk = function () {
            console.log('我是二师兄' + this.name);
        };
        return dehua;
    }());
    bajie.dehua = dehua;
})(bajie || (bajie = {}));
var dehua1 = new shuaige.dehua();
var dehua2 = new bajie.dehua();
dehua1.talk();
console.log(dehua1.name);
dehua2.talk();
//# sourceMappingURL=test.js.map