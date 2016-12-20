package cn.liu5599.controller;


import cn.liu5599.pojo.Article;
import cn.liu5599.pojo.User;
import cn.liu5599.service.ArticleService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/article")
@SessionAttributes("LoginUser")
public class ArticleController
{
    @Resource
    private ArticleService articleService;

    // 新建文章
    @RequestMapping(value = "/add", method = RequestMethod.POST)
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
        // 新建文章时，将点击量设置为0
        article.setClickRate(0);
        this.articleService.insertArticle(article);
        int pid = article.getPid();     // 获取文章id
        article = this.articleService.getById(pid);
        //添加文章url，以便于访问文章详情
        article.setArticleUrl("http://127.0.0.1:18080/myBlog/article/" + pid);
        return this.articleService.updateById(article);
    }

    // 查看文章详情
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ModelAndView toPage(@PathVariable(value = "id") String id)
    {
        System.out.println(id);
        Article article = this.articleService.getById(Integer.parseInt(id));

        //每次阅读，将点击量加1
        article.setClickRate(article.getClickRate() + 1);
        this.articleService.updateById(article);
        //格式化输出时间
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

    // 列出主页文章
    @RequestMapping(value = "/listHome", method = RequestMethod.GET)
    @ResponseBody
    public Map listHome(@RequestParam("index") String index, @RequestParam("pageSize") String pageSize)
    {
        List<Map<String, Object>> list;
        Map<String, List<Map<String, Object>>> map = new HashMap<String, List<Map<String, Object>>>();
        list = this.articleService.getHomeList(index, pageSize);

        map.put("ret", list);
        return map;
    }

    // 获取文章总数
    @RequestMapping(value = "/getCount", method = RequestMethod.GET)
    @ResponseBody
    public int getCount()
    {
        return this.articleService.getCount();
    }
}
