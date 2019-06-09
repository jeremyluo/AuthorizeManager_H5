// common.js
//服务器 
var host = "http://192.168.0.102:8080";
host = "http://10.254.189.190:8080";
//后端接口文档 https://github.com/deif2005/activate

//接口地址
//用户登录
var urlLogin = host + '/user/v1/userLogin';
//用户注册
var urlRegister = host + '/user/v1/register';
//用户登出
var urlLogout = host + '/user/v1/logout';

//新增客户
var urlCustomerAdd = host + '/base/v1/addCustomer';
//更新客户
var urlCustomerUpdate = host + '/base/v1/updateCustomer';
//删除客户
var urlCustomerDelete = host + '/base/v1/deleteCustomer';
//获取客户列表
var urlCustomerList = host + '/base/v1/listCustomer';

//添加订单信息
var urlOrderAdd = host + '/order/v1/addOrderConfig';
//获取订单信息列表
var urlOrderList = host + '/data/v1/listOrderConfig';
//更新订单信息
var urlOrderUpdate = host + '/order/v1/updateOrderConfig';
