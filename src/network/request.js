import axios from 'axios'

export default function(config){
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/vip',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    //这里是拦截逻辑
    return config
  }, err => {

  })
  // // 响应拦截
  // instance.interceptors.response.use(res => {
  //   //执行响应的拦截逻辑
  //   console.log(res);
  //   return res.data
  // }, err => {
  //
  // })
  //发送真正的网络请求
  return instance(config)
}
