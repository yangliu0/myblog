package cn.liu5599.service;


import cn.liu5599.pojo.Article;

import java.util.List;
import java.util.Map;

public interface ArticleService
{
    public int insertArticle(Article article);
    public int updateById(Article article);
    public Article getById(int id);
    public List<Map<String, Object>> getHomeList(String index, String pageSize);
    public int getCount();
}
