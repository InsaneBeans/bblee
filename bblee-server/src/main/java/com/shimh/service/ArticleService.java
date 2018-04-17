package com.shimh.service;

import com.shimh.entity.Article;

import java.util.List;
/**
 * 
 * @author shimh
 *
 * 2018年1月25日
 *
 */
public interface ArticleService {

	List<Article> findAll();

	Article getArticleById(Integer id);

	Integer saveArticle(Article article);

	Integer updateArticle(Article article);

	void deleteArticleById(Integer id);

	List<Article> listArticlesByTag(Integer id);

	List<Article> listArticlesByCategory(Integer id);

	Article getArticleAndAddViews(Integer id);

	List<Article> listHotArticles(int limit);

	List<Article> listNewArticles(int limit);

}
