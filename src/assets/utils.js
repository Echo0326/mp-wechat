import MD5 from 'blueimp-md5'

/**
* @author chuwei
* @date 2019/5/16 13:53
* @description:校验手机号
**/
function checkPhone(value){
  if(value){
    let reg=/^1\d{10}$/
    return reg.test(value.toString().trim())
  }
}

/**
* @author chuwei
* @date 2019/6/26 14:43
* @description:深拷贝数组或者是对象,深度克隆（复制）
**/
function copyData(target) {
  let res
  let targetType=checkType(target)
  if (targetType==='Object'){
    res={}
  } else if (targetType==='Array'){
    res=[]
  } else {
    return target
  }
  for (let i in target){
    let value=target[i]
    if (checkType(value)==='Object' || checkType(value)==='Array'){
      res[i]=copy(value)
    } else {
      res[i]=value
    }
  }
  return res
}

/**
* @author chuwei
* @date 2019/7/25 10:17
* @description:获取n到m的随机数
**/
function random(n, m){
  n = +n || 0
  m = +m || 0
  return Math.random() * (m - n) + n;
}

/**
* @author chuwei
* @date 2019/9/18 16:29
* @description:封装uniapp showToast
**/
function layerMsg(msg,cb){
	uni.showToast({
		title:msg.toString(),
		icon:'none',
		success:function(){
			cb && cb()
		}
	})
}



export {
  checkPhone,
  copyData,
  random,
  layerMsg
}
