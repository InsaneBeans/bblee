package com.shimh.dao;

import com.shimh.BlogApiApplicationTests;
import com.shimh.repository.CategoryRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class CategoryRepositoryTest extends BlogApiApplicationTests{

	@Autowired
	private CategoryRepository	categoryRepository;
	
	@Test
	public void test() {
	}
}
