export const name1 = (state) => {
    return state.name + "getter";
}

export const age1 = (state) => {
    return state.age + "getter"
}
export const price = (state) => {
    return state.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

export const other = (state) => {
    return `My name is ${state.name}, I am ${state.age}.`;
}