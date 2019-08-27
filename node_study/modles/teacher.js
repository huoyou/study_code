var user = require('./user');
function Teacher(id,name,age) {
    user.apply(this,[id,name,age])
    this.teach = function (res) {
        res.write(this.name + '讲课</br>')
    }
}
module.exports = Teacher;
