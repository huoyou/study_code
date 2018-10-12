import * as types from './mutation-type.js';

export default {
    nameAsyn({commit}, name) {
        commit(types.SET_NAME, name);
    },
    ageAsyn({commit}, age) {
        commit(types.SET_AGE, age);
    }
};