/*
 *  管理注册以及登录
 */

$(function ()
{
    //点击注册按钮
    $("#register").bind("click", function ()
    {
        var username = $("#username").val();
        var password = $("#password").val();
        var password1 = $("#password2").val();

        //清空提示
        $("#tip").html("&nbsp;");

        if(password != password1)
        {
            $("#tip").html("两次输入的密码不同");
        }
        else
        {
            var svr = "user/reg";

            var paras ={
                username:username
                ,password:password
            };

            //当信息插入成功，返回1的时候注册成功
            $.ajax({
                type: "post",
                url: svr,
                dataType: "json",
                data: paras,
                cache: true,
                success:function(data)
                {
                    var retNum = data.ret;
                    if(retNum == 1)
                    {
                        alert("注册成功");
                        $("#username").val("");
                        $("#password").val("");
                        $("#password2").val("");
                        window.location.href = "login.html";
                    }
                },
                error:function()
                {
                    $("#tip").html("用户名已存在");
                }
            })
        }
    });

    // 点击登录按钮
    $("#login").bind("click", function ()
    {
        var username_l = $("#username_l").val();
        var password_l = $("#password_l").val();

        var svr = "user/login";

        var paras = {
            username_l:username_l
            ,password_l:password_l
        };

        $.ajax({
            type: "post",
            url: svr,
            dataType: "json",
            data: paras,
            cache: true,
            success:function(data)
            {
                if(data == 0)
                {
                    window.location = "../myBlog/index.html";
                }
                else if(data == 1)
                {
                    alert("用户不存在");
                }
                else if(data == 2)
                {
                    alert("密码错误");
                }
            },
            error:function()
            {
                alert("err");
            }
        })
    })
});
