import  types from './mutation-type.js';

export default {
    [types.SET_NAME](state, name) {
        state.name = name;
    },
    [types.SET_AGE](state, age) {
        state.age = age;
    },
    [types.SET_HAS_GET_INFO](state, hasGetInfo) {
        state.hasGetInfo = hasGetInfo;
    }
};  