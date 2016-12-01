/**
 * Created by Mr SJL on 2015/12/19.
 */

exists = function(a) {
    var b = a.split(".")
        , c = !0;
    a = window;
    for (var d = 0; d < b.length; d++) {
        if (!a[b[d]]) {
            c = !1;
            break
        }
        a = a[b[d]]
    }
    return c
}
;
namespace = function(a) {
    var b = a.split(".");
    exists(a) && console.log("\u5df2\u7ecf\u5b58\u5728\u8be5\u547d\u540d\u7a7a\u95f4:" + a);
    a = window;
    for (var c = 0; c < b.length; c++)
        a[b[c]] || (a[b[c]] = {}),
            a = a[b[c]]
}
;
var Fv = {};

Fv.byId = function(a) {
    return (a = Fv.dom.byId(a)) ? a.wnd : null
}
;
Fv.newId = function() {
    return "_" + this._newId++
}
;
Fv.nextZIndex = function() {
    return this._zIndex++
}
;
Fv.getMax = function(a, b) {
    if (0 == a.length)
        return 0;
    for (var c = a[0][b], d = 1; d < a.length; d++)
        c < a[d][b] && (c = a[d][b]);
    return c
}
;
Fv.isDef = function(a) {
    return void 0 !== a
}
;
Fv.isNull = function(a) {
    return null  === a
}
;
Fv.isNNull = function(a) {
    return null  != a
}
;
Fv.isNum = function(a) {
    return "number" == typeof a
}
;
Fv.isStr = function(a) {
    return "string" == typeof a || a instanceof String
}
;
Fv.isArr = function(a) {
    return "array" == typeof a || a instanceof Array
}
;
Fv.isObj = function(a) {
    var b = typeof a;
    return "object" == b && null  != a || "function" == b
}
;
Fv.isFunc = function(a) {
    return "function" == typeof a
}
;
Fv.contains = function(a, b) {
    if (this.isArr(a))
        for (var c = 0; c < a.length; c++) {
            if (a[c] === b)
                return !0
        }
    else if (this.isObj(a))
        for (c in a)
            if (a[c] === b)
                return !0;
    return !1
}
;
Fv.inherits = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
}
;
Fv.base = function(a, b, c) {
    var d = arguments.callee.caller;
    if (d.superClass_) {
        for (var e = Array(arguments.length - 1), f = 1; f < arguments.length; f++)
            e[f - 1] = arguments[f];
        return d.superClass_.constructor.apply(a, e)
    }
    e = Array(arguments.length - 2);
    for (f = 2; f < arguments.length; f++)
        e[f - 2] = arguments[f];
    for (var f = !1, g = a.constructor; g; g = g.superClass_ && g.superClass_.constructor)
        if (g.prototype[b] === d)
            f = !0;
        else if (f)
            return g.prototype[b].apply(a, e)
}
;
Fv.extend = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++)
        for (c in d = arguments[e],
            d)
            a[c] = d[c]
}
;
/*传入的参数a为一个object，包含属性.url（string类型，文件的相对地址）,.className(string类型，必须以‘，’隔开),.id*/
namespace("Fv.link");
Fv.link.linkJs = function(a) {
    for( var t=0;t< a.length;t++)
    {
        var b = document.getElementsByTagName("head")[0];
        var c = document.createElement("script");
        c.setAttribute("type", "text/javascript");
        c.setAttribute("src", a[t]);
        b.appendChild(c);
    }

}
;
Fv.link.linkClass = function(a) {
    var b=document.getElementById(a.id);
    var c= a.className.split(",");
    for( var d=0; d< c.length; d++)
    {
        b.setIdAttribute("class", c[d]);
    }
}
;
Fv.link.linkCss = function(a) {
    for(var t=0;t< a.length;t++)
    {
        var b = document.getElementsByTagName("head")[0]
            , c = document.createElement("link");
        c.setAttribute("rel", "styleFveet");
        c.setAttribute("type", "text/css");
        c.setAttribute("href", a[t]);
        b.appendChild(c);
    }

}
;
Fv.link.linkText = function(a) {

}
;
Fv.link.linkHtml = function(a) {
    var p = "?p=" + Math.random();
    window.location.href= a.url+p;
}
;
namespace("Fv.ajax");
Fv.ajax={
    /**
     * 向服务器发送数据
     * @param svr       请求服务名称，字符串类型
     * @param paras     请求参数，object{cmd:"",exp:"",tabname:""}
     * @param data      返回数据，json
     * @param callFunc  回调函数，function
     */
    post:function(svr, paras, callFunc)
    {
        $.ajax({
            type: "post",
            url: svr,
            dataType: "json",
            data: paras,
            cache: true,
            success:function(data, paras)
            {
                var ret= data;
                callFunc(paras,ret);
            },
            error:function()
            {
                alert("errpror")
            }
        })

    }
    /**
     * 向服务器请求数据
     * @param svr       请求服务名称，字符串类型
     * @param paras     请求参数，object{cmd:"",exp:"",tabname:""}
     * @param data      返回数据，json
     * @param callFunc  回调函数，function
     */
    ,get:function(svr, paras,data,callFunc)
    {
        $.ajax({
            type: "get",
            url: svr,
            dataType: "json",
            data: data,
            cache: true,
            success:function(paras,data)
            {
                var ret= data;

                callFunc(paras,ret);

            },
            error:function()
            {

            }
        })
    }
};

Fv.ajax.loadJs = function(a)
{
    var b = document.getElementsByTagName("head")[0];
    for(var i=0; i<a.length;i++)
    {
        var c = document.createElement("script");
        c.setAttribute("type", "text/javascript");
        c.setAttribute("src", a[i]);
        b.appendChild(c);
    }
    // c.onload = function()
    // {
    //     a.onLoad && a.onLoad.call()
    // };

};
Fv.ajax.loadCss = function(a)
{
    var b = document.getElementsByTagName("head")[0];
    for(var i=0; i<a.length;i++)
    {
        var c = document.createElement("link");
        c.setAttribute("rel", "styleshet");
        c.setAttribute("type", "text/css");
        c.setAttribute("href", a[0]);
    }
    // c.onload = function()
    // {
    //     a.onLoad && a.onLoad.call()
    // };
    b.appendChild(c)
};

Fv.ajax.loadClass = function(a) {
    exists(a.className) ? a.onLoad && a.onLoad.call() : $.ajax({
        type: "POST",
        url: a.url,
        dataType: "text",
        cache: !1,
        success: function(b, c) {
            eval(b);
            a.onLoad && a.onLoad.call(b)
        },
        error: function(b, c, d) {
            a.onError && a.onError.call()
        }
    })
};

Fv.ajax.loadText = function(a)
{
    $.ajax({
        type: "POST",
        url: a.url,
        dataType: "text",
        cache: !0,
        success: function(b, c) {

        },
        error: function(b, c, d) {

        }
    })
};

Fv.ajax.loadHtml = function(a)
{
    $.ajax({
        type: "POST",
        url: a.url,
        dataType: "text",
        cache: !0,
        success: function(b, c)
        {
            window.location.href= b.url;
        },
        error: function()
        {

        }
    });
};

Fv.ajax.loadDiv = function(a,callFunc)
{
    $.ajax({
        type: "POST",
        url: a.url,
        dataType: "text",
        cache: !0,
        success: function(data) {

            //为什么"Lib/EasyUI/Js/jquery.min.js",不能重复加载，否则easyUI特效会重复出现
            //var js=["Lib/EasyUI/Js/jquery.easyui.min.js", a.plu];
            //var css=["Lib/EasyUI/Css/easyui.css","Lib/EasyUI/Css/icon.css"];
            Fv.link.linkJs(a.js);
            Fv.link.linkCss(a.css);
            $("#"+a.id).html(data);
            callFunc();



        },
        error: function()
        {
        }
    });
};

Fv.ajax.loadData = function(a) {
    $.ajax({
        type: "POST",
        url: a.url,
        dataType: "text",
        data: a.data,
        cache: !0,
        success: function (data) {
            a.func;
        },
        error: function () {
            a.func;
        }
    });
};
namespace("Fv.ctrl");
Fv.ctrl=
{
    dialogConfirm: function()
    {
        
    }
};

namespace("Fv.plugin");
Fv.plugin.initPlugin=function(a)
{
    //for(var b=0;b< a.length;b++)
    //{
    var js=["ManagerPage/" +a.name+"/"+ a.name+".js"];
    var css=["ManagerPage/" +a.name+"/"+ a.name+".css"];
        $.ajax({
            type:'post'
            ,url:"ManagerPage/" +a.name+"/"+ a.name+".html"
            ,dataType: a.dataType
            ,success:function(data)
            {

               $("#"+ a.id) .html(data);
                Fv.link.linkJs(js);
                Fv.link.linkCss(css);
            }
            ,error:function()
            {

            }
        })
};
Fv.plugin.loadPlu = function(a)
{
    Fv.ajax.loadDiv(a, function()
    {
        
    });
};


namespace("Fv.msge");
Fv.msge.delete = function (id,OK,Cancel)
{
	var container = document.getElementsByClassName("container");

	var str = "<div class=\"modal fade\" id=" + id + " tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">"
		+" <div class=\"modal-dialog\"> <div class=\"modal-content\">"
		+" <div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">"
		+" </button><h4 class=\"modal-title\">确认删除</h4></div><div class=\"modal-body\"><div><h5>确认删除该条信息？</h5>"
		+" </div></div><div class=\"modal-footer\">"
		+" <button id=\"" + id + "DeleteCancel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>"
		+" <button id=\"" + id + "DeleteOk\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">"
		+" 确认</button></div></div></div></div>";

	container[container.length-1].innerHTML += str;
	var modal = document.getElementById(id);

	$("#" + id + "DeleteOk").click(function ()
	{
		OK();
	});
	$("#" + id + "DeleteCancel").click(function ()
	{
		Cancel();
	});
};

Fv.msge.submit = function (id,OK,Cancel)
{
	var container = document.getElementsByClassName("container");

	var str = "<div class=\"modal fade\" id=" + id + " tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">"
		+" <div class=\"modal-dialog\"> <div class=\"modal-content\">"
		+" <div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">"
		+" </button><h4 class=\"modal-title\">确认发布</h4></div><div class=\"modal-body\"><div><h5>确认发布？</h5>"
		+" </div></div><div class=\"modal-footer\">"
		+" <button id=\"" + id + "SubmitCancel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>"
		+" <button id=\"" + id + "SubmitOk\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">"
		+" 确认</button></div></div></div></div>";

	container[container.length-1].innerHTML += str;
	var modal = document.getElementById(id);

	$("#" + id + "SubmitOk").click(function ()
	{
		OK();
	});

	$("#" + id + "SubmitCancel").click(function ()
	{
		Cancel();
	});
};