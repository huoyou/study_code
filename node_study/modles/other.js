module.exports = {
    fun2: function (res) {
        res.write('我是fun2<br/>')
    },
    fun3: function (res) {
        res.write('我是fun3<br/>')
    },
    User: function (id,name,age) {
        this.id = id;
        this.name = name
        this.age = age
        this.enter = function () {
            console.log(this.name+'进入图书馆<br/>')
        }
    }
}
