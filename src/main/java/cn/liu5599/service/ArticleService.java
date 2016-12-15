package cn.liu5599.service;


import cn.liu5599.pojo.Article;

public interface ArticleService
{
    public int insertArticle(Article article);
    public int updateById(Article article);
    public Article getById(int id);
}
