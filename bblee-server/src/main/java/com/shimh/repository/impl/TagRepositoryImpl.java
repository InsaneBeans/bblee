package com.shimh.repository.impl;

import com.shimh.repository.wrapper.TagWrapper;
import com.shimh.vo.TagVO;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;
import org.hibernate.type.IntegerType;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
/**
 * 
 * @author shimh
 *
 * 2018年1月25日
 *
 */
public class TagRepositoryImpl implements TagWrapper{
	
	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional(readOnly=true)
	public List<TagVO> findAllDetail() {
		
		String sql = "select t.*,count(at.tag_id ) as articles from me_article_tag at "
				+ "right join me_tag t on t.id = at.tag_id group by t.id ";
		
		SQLQuery query = getSession().createSQLQuery(sql);
		query.addScalar("id");
		query.addScalar("tagname");
		query.addScalar("avatar");
		query.addScalar("articles", IntegerType.INSTANCE);
		
		query.setResultTransformer(Transformers.aliasToBean(TagVO.class));
		return query.list();
		
	}
	
	private Session getSession(){
		return em.unwrap(Session.class);
	}

}
