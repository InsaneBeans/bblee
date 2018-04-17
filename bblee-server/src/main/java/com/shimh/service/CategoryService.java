package com.shimh.service;

import com.shimh.entity.Category;
import com.shimh.vo.CategoryVO;

import java.util.List;
/**
 * 
 * @author shimh
 *
 * 2018年1月25日
 *
 */
public interface CategoryService {

	List<Category> findAll();

	Category getCategoryById(Integer id);

	Integer saveCategory(Category category);

	Integer updateCategory(Category category);

	void deleteCategoryById(Integer id);

	List<CategoryVO> findAllDetail();

}
