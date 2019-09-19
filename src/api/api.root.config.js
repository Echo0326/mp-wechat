let base_api_url,base_static_url,base_img_url

const root=process.env.NODE_ENV

if (root==='production'){
  base_api_url="https://marketing.vlinker.com.cn"
  base_static_url="https://img.vlinker.com.cn/mpalipay"
  base_img_url="https://img.vlinker.com.cn"
}else {
  base_api_url="https://uatmarketing.vlinker.com.cn:8442"
  base_static_url="https://sitimg.vlinker.com.cn/mpalipay"
  base_img_url="https://sitimg.vlinker.com.cn"
}

export const BASE_API_URL=base_api_url
export const BASE_STATIC_URL=base_static_url
export const BASE_IMG_URL=base_img_url
