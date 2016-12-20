package cn.liu5599.svr.imp;

import cn.liu5599.dao.ArticleMapper;
import cn.liu5599.pojo.Article;
import cn.liu5599.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ArticleServiceImpl implements ArticleService
{
    @Autowired(required=false)
    private ArticleMapper articleDao = null;

    public int insertArticle(Article article)
    {
        return this.articleDao.insertSelective(article);
    }

    public int updateById(Article article)
    {
        return this.articleDao.updateByPrimaryKeySelective(article);
    }

    public Article getById(int id)
    {
        return this.articleDao.selectByPrimaryKey(id);
    }

    // 列出主页上的一个分页的文章内容
    public List<Map<String, Object>> getHomeList(String index, String pageSize)
    {
        int index_int = Integer.parseInt(index);
        int pageSize_int = Integer.parseInt(pageSize);
        // article表中倒数start到end行的记录
        int start = index_int * pageSize_int;
        int end = pageSize_int;

        return this.articleDao.selectHomeList(start, end);
    }

    // 获取文章总数
    public int getCount()
    {
        return this.articleDao.selectCount();
    }
}
