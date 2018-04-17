package com.shimh.repository.impl;

import com.shimh.repository.wrapper.CategoryWrapper;
import com.shimh.vo.CategoryVO;
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
public class CategoryRepositoryImpl implements CategoryWrapper{
	
	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional(readOnly=true)
	public List<CategoryVO> findAllDetail() {
		
		String sql = "select c.*, count(a.category_id) as articles from me_category c "
			+ "left join me_article a on a.category_id = c.id group by c.id";
		
		SQLQuery query = getSession().createSQLQuery(sql);
		query.addScalar("id");
		query.addScalar("categoryname");
		query.addScalar("description");
		query.addScalar("avatar");
		query.addScalar("articles", IntegerType.INSTANCE);
		
		query.setResultTransformer(Transformers.aliasToBean(CategoryVO.class));
		return query.list();
		
	}
	
	private Session getSession(){
		return em.unwrap(Session.class);
	}

}
