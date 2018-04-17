package com.shimh.service;

import com.shimh.BlogApiApplicationTests;
import com.shimh.vo.CategoryVO;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CategoryServiceTest extends BlogApiApplicationTests{

	@Autowired
	private CategoryService	categoryService;
	
	
	
	@Test
	public void findAllDetailTest() {
		
		List<CategoryVO> cs = categoryService.findAllDetail();
				
		cs.stream().forEach( c -> System.out.println(c.getCategoryname() + ":" + c.getArticles()));
		System.out.println(cs.size());
		
	}
}
