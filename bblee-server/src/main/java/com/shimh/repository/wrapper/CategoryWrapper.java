package com.shimh.repository.wrapper;

import com.shimh.vo.CategoryVO;

import java.util.List;
/**
 * 
 * @author shimh
 *
 * 2018年1月25日
 *
 */
public interface CategoryWrapper{

	List<CategoryVO> findAllDetail();
}
