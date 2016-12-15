package cn.liu5599.controller;


import cn.liu5599.pojo.Article;
import cn.liu5599.pojo.User;
import cn.liu5599.service.ArticleService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

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
        this.articleService.insertArticle(article);
        int pid = article.getPid();     // 获取文章id
        article = this.articleService.getById(pid);
        //添加文章url，以便于访问文章详情
        article.setArticleUrl("127.0.0.1:18080/myBlog/article/details?id=" + pid);
        return this.articleService.updateById(article);
    }

    // 查看文章详情
    @RequestMapping(value = "/details", method = RequestMethod.GET)
    public ModelAndView toPage(@RequestParam("id") String id)
    {
        Article article = this.articleService.getById(Integer.parseInt(id));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Map<String, Object> map = new HashMap<String, Object>();
        JSONObject json = new JSONObject();
        json.put("article_author", article.getArticleAuthor());
        json.put("article_time", sdf.format(article.getArticleTime()));
        json.put("article_title", article.getArticleTitle());
        json.put("article_content", article.getArticleContent());
        json.put("article_classes", article.getArticleClasses());
        json.put("click_rate", article.getClickRate());
        json.put("article_url", article.getArticleUrl());
        map.put("page", json);
        return new ModelAndView("details", map);
    }
}
