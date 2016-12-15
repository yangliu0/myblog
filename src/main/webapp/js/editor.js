$(function ()
{
    // 点击发布按钮
    $("#publish").bind("click", function ()
    {
        var title = $("#title").val();      // 标题
        var classes = $("#classes").val();  // 分类
        var content = UE.getEditor('editor').getContent();         // 内容

        var svr = "/myBlog/article/add";
        var paras = {
            title:title
            ,classes:classes
            ,content:content
        };

        $.ajax({
            type: "post",
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
        })
    })
});
