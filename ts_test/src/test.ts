// function aaa(name:string) {
//     return('hi' + ',' + name)
// }
// function alertName() {
//     return function():void {
//         console.log('hello ,world !')
//     }
// }
// let user = 'Machel';
// console.log(aaa(user))
// let bbb = alertName();
// bbb();
// let name1:string = 'jack';
// name1 = 'bob'
// console.log(name1)
// let name2:any = 'jack';
// name2 = 777
// console.log(name2)
// let name3:string | number = 'jack';
// name3 = 999
// console.log(name3)
// function ggg(something:Array<number> ):number {
//     return something.length;
// }
// let arr = ['a','b','c','d'];
// let arr1 = [1,2,3,4,5];
// console.log(ggg(arr1))
interface Person {
    mingzi: string;
    age?: number;
    readonly id: number;
    [propName: string]: any;
}
let tom: Person = {
    mingzi: 'jack',
    age: 7,
    id: 9,
    aaa: 9,
    bbb: 'aaaa'
}
console.log(tom)
let lists: number[] = [1, 2, 3, 4, 5];
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(5, 6))
let mySum: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b;
}
console.log(mySum(8, 9))


interface getNumber {
    (a: number, b: number): number
}
let getNum: getNumber;
getNum = function (a: number, b: number): number {
    return a + b;
}
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}


let tomcat = buildName('Tom1', 'Cat');
let cat = buildName(undefined, 'Cat');
console.log(tomcat)
console.log(cat)
type name9 = string | number | number[];
function aname(x: name9): void {
    console.log(x)
}
console.log(aname([1, 2]))


enum days { wd, wr, ef, ger, hr, hret, htr }
console.log(days['wd'])
console.log(days['ger'])

function zhengXing(): void {
    var yangzia: string = '刘德华'
    {
        let yangzib: string = '小沈阳'
        console.log('技术胖整形成了' + yangzib + '的样子')
    }
    console.log('技术胖整形成了' + yangzia + '的样子')
    console.log('技术胖整形成了' + yangzia + '的样子')
}
zhengXing()

let jspang: string = '技术胖'
let jspanga: String = new String("jspang.com")
console.log(jspang)
console.log(jspanga)

class XiaoTianTian {
    public name: string;
    public age: number;
    protected height: string;
    public constructor(name:string,age:number,height:string) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    public say():void {
        console.log(this.name,this.age,this.height)
    }
    protected sayLove():void {
        console.log('i love you')
    }
}
let xiaotiantian: XiaoTianTian = new XiaoTianTian('李冰冰',18,'170cm')
console.log(xiaotiantian.name)
xiaotiantian.say()

class XiaoMeiNv extends XiaoTianTian {
    public tedian: string;
    constructor(name:string,age:number,height:string,tedian:string) {
        super(name,age,height);
        this.tedian = tedian;
        this.name = name;
        this.height = height;
        this.age = age;
    }
    public skill() {
        console.log(this.name,this.age,this.height,this.tedian)
    }
    public say() {
        super.say()
        console.log('建立工厂')
    }
}

let xiaomeinv = new XiaoMeiNv('李美女',8,'170cm','lol')
console.log(666,xiaomeinv)
xiaomeinv.say()
xiaomeinv.skill()

interface Husband{
    sex:string;
    interest:string;
    buy?:boolean;
}
let myHusband:Husband = {
    sex: '男',
    interest: '看书',
    buy: true
}
console.log(myHusband)

interface SearchWife{
    (source:string,subString:string):boolean 
}
let mySearch:SearchWife;
mySearch = function(source:string,subString:string):boolean {
    let flag = source.search(subString)
    return(flag != -1)
}
console.log(mySearch('高、富','高'))

namespace shuaige{
    export class dehua{
        public name:string = '刘德华';
        public talk() {
            console.log('我是'+this.name)
        }
    }
}
namespace bajie{
    export class dehua{
        public name:string = '马德华';
        public talk() {
            console.log('我是二师兄'+this.name)
        }
    }
}
let dehua1:shuaige.dehua = new shuaige.dehua()
let dehua2:bajie.dehua = new bajie.dehua()
dehua1.talk()
console.log(dehua1.name)
dehua2.talk()