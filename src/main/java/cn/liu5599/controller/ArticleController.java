package cn.liu5599.controller;


import cn.liu5599.pojo.Article;
import cn.liu5599.pojo.User;
import cn.liu5599.service.ArticleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Date;

@Controller
@RequestMapping("/article")
@SessionAttributes("LoginUser")
public class ArticleController
{
    @Resource
    private ArticleService articleService;

    // 新建文章
    @RequestMapping(value = "/add", method = RequestMethod.GET)
    @ResponseBody
    public int add(@ModelAttribute("LoginUser") User user, @RequestParam("title") String title, @RequestParam("classes") String classes, @RequestParam("content") String content)
    {
        Article article = new Article();
        Date date = new Date();

        article.setArticleTitle(title);
        article.setArticleTime(date);
        article.setArticleAuthor(user.getId());
        article.setArticleClasses(classes);
        article.setArticleContent(content);

        return this.articleService.insertArticle(article);
    }
}
