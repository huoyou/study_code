import HttpRequest from '@/common/js/axios'
import config from '@/config'

const axios = new HttpRequest(config.apiUrl)
export default axios