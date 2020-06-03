/**
method     接口方法
url        访问哪个路径
permeters  参数
callback   回滚函数
 */
var get_data = function (method,url,parameters,callback) {
    //创建接口对象
    var ajax = new XMLHttpRequest()
    //与服务器建立连接并表明接口
    ajax.open(method , 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c' + url);
    //设置请求头，传递数据类型
    ajax.setRequestHeader("content-type" , "application/x-www-form-urlencoded");
    //传参
    ajax.send(parameters);
    //接收服务器返回数据
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            var responseData = JSON.parse(ajax.responseText);
            callback(responseData.data,ajax.responseText);
        }
    }
}
