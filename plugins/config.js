const baseUrl = "http://192.168.1.118:18081/bioaitech-api";
export default {
  baseUrl: baseUrl,
  baseImagePath: baseUrl+'/unauth/SlideImage/thumbnail',
  slideLabelPath: baseUrl+'/unauth/SlideImage/label',
  //说明页芯片图像显示
  chipBaseImagePath: baseUrl+'/unauth/SlideImage/thumbnailQcode',
  shareLinkImage: baseUrl +"/qrcode/getQRCode?content="
}
