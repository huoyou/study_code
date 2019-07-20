export default {
    name1(state) {
        return state.name + "getter";
    },
    age1(state) {
        return state.age + "getter"
    },
    price(state) {
        return state.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    },
    other(state) {
        return `My name is ${state.name}, I am ${state.age}.`;
    }
}