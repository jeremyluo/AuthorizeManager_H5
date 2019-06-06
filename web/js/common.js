// common.js
//服务器 
var host = "http://192.168.0.102:8080";
host = 'http://192.168.1.102:8081'

//接口地址
//用户登录
var urlLogin = host + '/userLogin';
//用户注册
var urlRegister = host + '/v1/register';
//用户登出
var urlLogout = host + '/v1/logout';

//新增客户
var urlCustomerAdd = host + '/v1/addCustomer';
//更新客户
var urlCustomerUpdate = host + '/v1/updateCustomer';
//删除客户
var urlCustomerDelete = host + '/v1/deleteCustomer';
//获取客户列表
var urlCustomerList = host + '/v1/listCompany';

//添加订单信息
var urlOrderAdd = host + '/v1/addOrderConfig';
//获取订单信息列表
var urlOrderList = host + '/v1/listOrderConfig';
//更新订单信息
var urlOrderUpdate = host + '/v1/updateOrderConfig';
