package cn.liu5599.svr.imp;

import cn.liu5599.dao.ArticleMapper;
import cn.liu5599.pojo.Article;
import cn.liu5599.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService
{
    @Autowired(required=false)
    private ArticleMapper articleDao = null;

    public int insertArticle(Article article)
    {
        return this.articleDao.insertSelective(article);
    }
}
