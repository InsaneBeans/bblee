package com.shimh.repository;

import com.shimh.entity.Article;
import com.shimh.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
/**
 * 
 * @author shimh
 *
 * 2018年1月25日
 *
 */
public interface CommentRepository extends JpaRepository <Comment, Integer>{

	List<Comment> findByArticleOrderByCreateDateDesc(Article a);


}
