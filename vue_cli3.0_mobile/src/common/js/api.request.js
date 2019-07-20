import HttpRequest from '@/libs/axios'
import { baseUrl } from '@/config'

const axios = new HttpRequest(baseUrl)
export default axios