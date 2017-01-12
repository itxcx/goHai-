/**
 * @description wehcatAPI
 * @author 黄腾
 * @time 2017-1-10
 */
const Promise = require("./bluebird")

/**
 * 获取用户登录
 */
function login(){
    return new Promise((resolve,reject)=>{
       wx.login({
          success: resolve,
          fail: reject
       })
    })
}

/**
 * 应用内跳转页面
 */
function navigatorTo(url){
    return new Promise((resolve,reject)=>{
        wx.navigateTo({
          url: url,
          success: resolve,
          fail: reject
        })
    })
}
/**
 * 重定向到一个页面
 */
function redirectTo(url){
    return new Promise((resolve,reject)=>{
        wx.redirectTo({
          url: url,
          success: resolve,
          fail: reject
        })
    })
}
/**
 * 跳转到tabBar页面，关闭其他页面
 */
function switchTab(url){
    return new Promise((resolve,reject)=>{
        wx.switchTab({
          url: url,
          success: resolve,
          fail: reject
        })
    })
}
/**
 * 获取用户信息
 */
function getUserInfo(){
    return new Promise((resolve,reject)=>{
        wx.getUserInfo({
          success:resolve,
          fail: reject
        })
    })
}
/**
 * 设置缓存
 */
function setStorage(key,value){
    return new Promise((resolve,reject)=>{
        wx.setStorage({
          key: key,
          data: value,
          success: resolve,
          fail: reject
        })
    })
}
/**
 * 获取缓存
 */
function getStorage(key){
    return new Promise((resolve,reject)=>{
        wx.getStorage({
          key: key,
          success: resolve,
          fail: reject
        })
    })
}
/**
 * 清理缓存
 */
function clearStorage(key){
    return new Promise((resolve,reject)=>{
        wx.clearStorage({
          key: key,
          success: resolve,
          fail: reject
        })
    })
}
/**
 * 获取用户位置
 */
function getUserLocation(){
    return new Promise((resolve,reject)=>{
        wx.getLocation({
          type: 'wgs84', 
          success: resolve,
          fail: reject
        })
    })
}
/**
 * 动态设置title
 */
function setNavigatorTitle(title){
    return new Promise((resolve,reject)=>{
        wx.setNavigationBarTitle({
          title: title,
          success: resolve
        })
    })
}
module.exports = {
    login:login,
    navigatorTo:navigatorTo,
    redirectTo:redirectTo,
    switchTab:switchTab,
    getUserInfo:getUserInfo,
    setStorage:setStorage,
    getStorage:getStorage,
    clearStorage:clearStorage,
    getUserLocation:getUserLocation,
    setNavigatorTitle:setNavigatorTitle
}