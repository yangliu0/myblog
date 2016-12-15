package cn.liu5599.pojo;

import java.util.Date;

public class Article {
    private Integer id;

    private Integer articleAuthor;

    private Date articleTime;

    private String articleTitle;

    private String articleClasses;

    private Integer clickRate;

    private String articleContent;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getArticleAuthor() {
        return articleAuthor;
    }

    public void setArticleAuthor(Integer articleAuthor) {
        this.articleAuthor = articleAuthor;
    }

    public Date getArticleTime() {
        return articleTime;
    }

    public void setArticleTime(Date articleTime) {
        this.articleTime = articleTime;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle == null ? null : articleTitle.trim();
    }

    public String getArticleClasses() {
        return articleClasses;
    }

    public void setArticleClasses(String articleClasses) {
        this.articleClasses = articleClasses == null ? null : articleClasses.trim();
    }

    public Integer getClickRate() {
        return clickRate;
    }

    public void setClickRate(Integer clickRate) {
        this.clickRate = clickRate;
    }

    public String getArticleContent() {
        return articleContent;
    }

    public void setArticleContent(String articleContent) {
        this.articleContent = articleContent == null ? null : articleContent.trim();
    }
}