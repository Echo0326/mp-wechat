import {BASE_API_URL} from './api.root.config'
import md5 from 'blueimp-md5'
import qs from 'qs'
import {layerMsg} from "../assets/utils"

//request请求
function request(url="", method="GET", data={},isLoading=false ) {
  return new Promise((resolve, reject) => {
    let promise
    if (isLoading){
		  uni.showLoading({title:'努力加载中'})
    }
    if (method==="GET"){
      promise=uni.request({
        url:BASE_API_URL+url,
        method:'GET',
        data:data,
      })
    }else {
      promise=uni.request({
      		  url:BASE_API_URL+url,
      		  method:'POST',
      		  data:data,
      })
    }
    promise.then(res => {
      uni.hideLoading()
      if(res[0]){
        layerMsg('请求出错，请稍后再试！')
        reject(res[0])
      }else if(res[1].data.code===100){
        resolve(res[1].data)
      }else if(res[1].data.msg){
        layerMsg(res[1].data.msg)
        reject(res[1])
      }else{
        layerMsg('请求出错，请稍后再试！')
        reject(res)
      }
    }).catch(error => {
		  uni.hideLoading()
      layerMsg('请求出错，请稍后再试！')
		  reject(error)
    })
  })
}
//上传文件
function uploadFile(url="",filePath=[],data={}){
  let i=0
  if (i===0){
    uni.showLoading({title:'信息上传中'})
  }
  function fn() {
    data=Object.assign({},getAuth(),data)
    uni.uploadFile({
      url:BASE_API_URL+url,
      method:'POST',
      header:{
        'content-type':'multipart/form-data'
      },
      filePath:filePath[i],
      name:'file',
      formData:data,
      success:()=>{
        i++
        if (i===filePath.length){
          uni.hideLoading()
          layerMsg('信息上传成功')
        } else {
          fn()
        }
      },
      fail:()=>{
        uni.hideLoading()
        layerMsg(`第${i}个文件上传失败`)
      }
    })
  }
  fn()
}
//get请求
function get(url,isLoading=false) {
  let params=getAuth()
  return request(url,"GET", params,isLoading)
}
//post请求
function post(url,data,isLoading=false) {
  let params=getAuth()
  if (data){
    params=Object.assign(params,data)
  }
  return request(url,"POST", params,isLoading)
}
//授权签名验证
function getAuth() {
  let timestamp=new Date().valueOf()
  let expires_in=1800
  let secret_key='40809bd2cadc8a1ad40c777fba04bbaa';
  let encryped_str=md5([secret_key,timestamp,expires_in].join(''))
  return {timestamp,expires_in,encryped_str}
}


export default {
  request,
  get,
  post,
  uploadFile
}
