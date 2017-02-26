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

    svr = "article/listHome";

    paras = {
        index:currentPage
        ,pageSize:pageSize
    };

    var title, content, url_a, time;

    // 获取页码总数，并展示第一页内容
    $.ajax({
        type: "get",
        url:"article/listHome",
        dataType: "json",
        data: paras,
        cache: true,
        success:function(data)
        {
            var str = "";
            console.log(data.ret);
            $("#currentPage").html(currentPage + 1);
            var result = data.ret;
            for(var i= 0; i < result.length; i++)
            {
                console.log(result.length);
                title = "title" + i;
                content = "content" + i;
                url_a = "url" + i;
                time = "time" + i;
                // $("#" + title).html(result[i].article_title);
                // $("#" + content).html(result[i].article_content);
                var d = new Date(result[i].article_time);
                // $("#" + time).html(d.toLocaleDateString());
                // $("#" +　url_a).attr("href", result[i].article_url);

                str += "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3\"><div" + " class='tm-content-box'><img"
                + " src=\"img/tm-img-310x180-" + (i + 1) + ".jpg\" alt=\"Image\" class=\"tm-margin-b-20 img-fluid\" />"
                + "<h4 id=\"title0\" class=\"tm-margin-b-20 tm-gold-text\" style=\"height: 100%;width:100%;overflow: hidden;text-overflow:ellipsis;word-break:keep-all;white-space:nowrap;\">"
                    + result[i].article_title + "</h4><div id=\"content0\" style=\"height: 136px;width:100%;overflow:hidden;text-overflow:ellipsis;word-break:keep-all;\">"
                + result[i].article_content + "</div><div id=\"time0\" style=\"margin-top: 20px;\">"
                + d.toLocaleDateString() + "</div><a id=\"url0\" href="
                + result[i].article_url +" class='tm-btn text-uppercase' target=\"_blank\" style=\"margin-top: 20px;\">详情</a></div></div>";
            }
            $("#home_list").html(str);
        },
        error:function()
        {
            alert("出错")
        }
    });

    $.ajax({
        type: "get",
        url:"article/getCount",
        dataType: "json",
        data: {},
        cache: true,
        success:function(data)
        {
            $("#totolPage").html(parseInt(data / pageSize + 1));
        },
        error:function()
        {
            alert("出错")
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

        var paras = {
            index:current
            ,pageSize:pageSize
        };

        $.ajax({
            type: "get",
            url:"article/listHome",
            dataType: "json",
            data: paras,
            cache: true,
            success:function(data)
            {
                console.log(data.ret);
                $("#currentPage").html(currentPage + 1);
                var result = data.ret;
                var str = "";
                for(var i= 0; i < result.length; i++)
                {
                    console.log(result.length);
                    title = "title" + i;
                    content = "content" + i;
                    url_a = "url" + i;
                    time = "time" + i;
                    // $("#" + title).html(result[i].article_title);
                    // $("#" + content).html(result[i].article_content);
                    var d = new Date(result[i].article_time);
                    // $("#" + time).html(d.toLocaleDateString());
                    // $("#" +　url_a).attr("href", result[i].article_url)

                    str += "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3\"><div" + " class='tm-content-box'><img"
                        + " src=\"img/tm-img-310x180-" + (i + 1) + ".jpg\" alt=\"Image\" class=\"tm-margin-b-20 img-fluid\" />"
                        + "<h4 id=\"title0\" class=\"tm-margin-b-20 tm-gold-text\" style=\"height: 100%;width:100%;overflow: hidden;text-overflow:ellipsis;word-break:keep-all;white-space:nowrap;\">"
                        + result[i].article_title + "</h4><div id=\"content0\" style=\"height: 136px;width:100%;overflow:hidden;text-overflow:ellipsis;word-break:keep-all;\">"
                        + result[i].article_content + "</div><div id=\"time0\" style=\"margin-top: 20px;\">"
                        + d.toLocaleDateString() + "</div><a id=\"url0\" href="
                        + result[i].article_url +" class='tm-btn text-uppercase' target=\"_blank\" style=\"margin-top: 20px;\">详情</a></div></div>";
                }
                $("#home_list").html(str);
            },
            error:function()
            {
                alert("出错")
            }
        });


    });
});
