package com.shimh.service;

import com.shimh.entity.Comment;

import java.util.List;
/**
 * 
 * @author shimh
 *
 * 2018年1月25日
 *
 */
public interface CommentService {

	List<Comment> findAll();

	Comment getCommentById(Integer id);

	Integer saveComment(Comment comment);

	void deleteCommentById(Integer id);

	List<Comment> listCommentsByArticle(Integer id);

	Comment saveCommentAndChangeCounts(Comment comment);

	void deleteCommentByIdAndChangeCounts(Integer id);


}
