import axios from '.'


export const queryUser = params => axios.file('/user/queryUser', params);