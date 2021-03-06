<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Love Story</title>

    <!-- load stylesheets -->
    <!--<link rel="stylesheet" href="http://fonts.useso.com/css?family=Open+Sans:300,400">  &lt;!&ndash; Google web font "Open Sans" &ndash;&gt;-->
    <link rel="stylesheet" href="../css/bootstrap.min.css">                                      <!-- Bootstrap style -->
    <link rel="stylesheet" href="../css/templatemo-style.css">                                   <!-- Templatemo style -->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
          <![endif]-->
</head>

    <body>
       
        <div class="tm-header">
            <div class="container-fluid">
                <div class="tm-header-inner">
                    <a href="#" class="navbar-brand tm-site-name">Love Story</a>
                    
                    <!-- navbar -->
                    <nav class="navbar tm-main-nav">

                        <button class="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                            &#9776;
                        </button>
                        
                        <div class="collapse navbar-toggleable-sm" id="tmNavbar">
                            <ul class="nav navbar-nav">
                                <li class="nav-item active">
                                    <a href="index.html" class="nav-link">主页</a>
                                </li>
                                <li class="nav-item">
                                    <a href="view/editor.html" class="nav-link">编写博客</a>
                                </li>
                                <li class="nav-item">
                                    <a href="view/blog.html" class="nav-link">博客</a>
                                </li>
                                <li class="nav-item">
                                    <a href="view/center.html" class="nav-link">个人中心</a>
                                </li>
                                <li id="titlename" class="nav-item">
                                    欢迎你！<br/>

                                </li>
                                <li id="logoutTitle" class="nav-item">

                                </li>
                            </ul>                        
                        </div>
                        
                    </nav>  

                </div>                                  
            </div>            
        </div>

        <div class="tm-home-img-container">
            <img src="../img/tm-home-img.jpg" alt="Image" class="hidden-lg-up img-fluid">
        </div>

        <section class="tm-section">
            <div class="container-fluid">

                <div class="row tm-margin-t-big">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div class="tm-2-col-left">
                            
                            <h3 id = "articleTitle"class="tm-gold-text tm-title"></h3>
                            <div id="articleContent"></div>
                            <%--<p class="tm-margin-b-30">Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien</p>--%>
                            <%--<img src="../img/tm-img-660x330-1.jpg" alt="Image" class="tm-margin-b-40 img-fluid">--%>
                            <%--<p>--%>
                                <%--Donec tempor lobortis tortor, in feugiat massa facilisis sed. Ut dignissim viverra pretium. In eu justo maximus turpis feugiat finibus scelerisque nec eros. Cras nec lectus tempor nibh vestibulum eleifend et ac elit.--%>
                            <%--</p>--%>
                            <%--<p>Morbi vel pharetra massa, non iaculis tortor. Nulla porttitor tincidunt felis et feugiat. Vivamus fermentum ligula justo, sit amet blandit nisl volutpat id. Fusce sagittis ultricies felis, non luctus mauris lacinia quis.</p>--%>
                            <%--<p class="m-b-2"> Ut fringilla lacus ac tempor ullamcorper. Mauris iaculis placerat ex et mattis. Mauris id vulputate lectus, id fermentum sapien.--%>
                            <%--</p>--%>

                        </div>
                    </div>


                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">

                        <div class="tm-2-col-right">

                            <div class="tm-2-rows-md-swap">
                                <div class="tm-overflow-auto row tm-2-rows-md-down-2">
                                </div>

                                <div class="row tm-2-rows-md-down-1 tm-margin-t-mid">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <h3 class="tm-gold-text tm-title tm-margin-b-30">作者</h3>
                                        <div class="media tm-related-post">
                                            <div class="media-left media-middle">
                                                <p id="author"></p>
                                            </div>
                                        </div>

                                        <h3 class="tm-gold-text tm-title tm-margin-b-30">发布时间</h3>
                                        <div class="media tm-related-post">
                                            <div class="media-left media-middle">
                                                <p id="time"></p>
                                            </div>
                                        </div>

                                        <h3 class="tm-gold-text tm-title tm-margin-b-30">分类</h3>
                                        <div class="media tm-related-post">
                                            <div class="media-left media-middle">
                                                <p id="article_classes"></p>
                                            </div>
                                        </div>

                                        <h3 class="tm-gold-text tm-title tm-margin-b-30">阅读量</h3>
                                        <div class="media tm-related-post">
                                            <div class="media-left media-middle">
                                                <p id="clickrate"></p>
                                            </div>
                                        </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div> <!-- row -->

            </div>
        </section>

        <!-- load JS files -->
        <script src="../jslib/jquery-1.9.1.min.js"></script>             <!-- jQuery (https://jquery.com/download/) -->
        <script src="../jslib/tether.min.js"></script> <!-- Tether for Bootstrap, http://stackoverflow.com/questions/34567939/how-to-fix-the-error-error-bootstrap-tooltips-require-tether-http-github-h -->
        <script src="../jslib/bootstrap.min.js"></script>                 <!-- Bootstrap (http://v4-alpha.getbootstrap.com/) -->
        <script src="../js/register_login.js"></script>
       <script>
           $(function ()
           {
               var article = ${page};
               console.log(article);

               switch (article.article_classes)
               {
                   case "1":
                       $("#article_classes").html("我们的故事");
                       break;
                   case "2":
                       $("#article_classes").html("奇闻趣事");
                       break;
                   case "3":
                       $("#article_classes").html("美食风景");
                       break;
                   case "4":
                       $("#article_classes").html("其他");
                       break;
                   default:
                       $("#article_classes").html("无分类");
               }

               $("#articleTitle").html(article.article_title);  //文章标题
               $("#articleContent").html(article.article_content);      //文章内容
               $("#time").html(article.article_time);           //文章发布时间
               $("#clickrate").html(article.click_rate);         //文章点击量

               var svr = "/myBlog/user/showUser";
               var paras = {
                   id:article.article_author
               }
               $.ajax({
                   type: "post",
                   url: svr,
                   dataType: "json",
                   data: paras,
                   cache: true,
                   success:function(data)
                   {
                       var user = data;
                       // 如果设置了nickname，就显示nickname不然就显示username
                       if(user.nickname == null)
                       {
                           $("#author").html(user.username);
                       }
                       else
                       {
                           $("#author").html(user.nickname);
                       }
                   },
                   error:function()
                   {

                   }
               })
           })
       </script>
</body>
</html>