/**
 * 主页分页
 */

var pageSize = 4;
var currentPage = 0;
var total;

$(function ()
{
    var svr;    //请求服务名称
    var paras;  //请求参数，json格式

    // 获取页码总数，并展示第一页内容
    $.ajax({
        type: "get",
        url: svr,
        dataType: "json",
        data: paras,
        cache: true,
        success:function(data)
        {
            if(data == 1)
            {
                alert("发布成功");
            }
        },
        error:function()
        {
            alert("发布失败")
        }
    });

    // 前一页
    $("#previous").bind("click", function ()
    {
        var current;    //保存翻页后的页码
        if(currentPage == 0)
        {
            return;
        }
        else
        {
            //前一页的页码
            current = --currentPage;
        }
    });

    // 后一页
    $("#next").bind("click", function ()
    {
        var current;    //保存翻页后的页码
        if(current == (total / pageSize) == 0 ? (total / pageSize) : (total / pageSize + 1))
        {
            return;
        }
        else
        {
            // 下一页的页码
            current = ++currentPage;
        }
    });
});
