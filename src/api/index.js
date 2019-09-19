
import api from './api'

export const reqWeiXin=()=>(
  api.post('/api/sign_get',{},true)
)
