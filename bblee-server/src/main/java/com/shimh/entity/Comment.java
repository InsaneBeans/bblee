package com.shimh.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.shimh.common.entity.BaseEntity;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import java.util.Date;
/**
 * 评论
 * 
 * @author shimh
 *
 * 2018年1月30日
 *
 */
@Entity
@Table(name = "me_comment")
public class Comment extends BaseEntity<Integer>{

	private static final long serialVersionUID = 7346271954336613146L;

	@NotBlank
	private String content;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="author_id")
	private User author;
	
	
    /**
     * 创建时间
     */
	@JSONField(format = "yyyy.MM.dd HH:mm")
    @Column(name = "create_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="article_id")
	private Article article;


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public User getAuthor() {
		return author;
	}


	public void setAuthor(User author) {
		this.author = author;
	}


	public Date getCreateDate() {
		return createDate;
	}


	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}


	public Article getArticle() {
		return article;
	}


	public void setArticle(Article article) {
		this.article = article;
	}
	
	
	
	
}
