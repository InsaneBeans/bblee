package com.shimh.controller;

import com.shimh.common.constant.Base;
import com.shimh.common.constant.ResultCode;
import com.shimh.common.result.Result;
import com.shimh.entity.Tag;
import com.shimh.service.TagService;
import com.shimh.vo.TagVO;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * 标签api
 * 
 * @author shimh
 *
 * 2018年1月25日
 *
 */
@RestController
@RequestMapping(value="/tags")
public class TagController {

	
	@Autowired
	private TagService tagService;
	
	@GetMapping
	public Result listTags(){
		List<Tag> tags = tagService.findAll();
		
		return Result.success(tags);
	}
	
	@GetMapping("detail")
	public Result listCategorysDetail(){
		List<TagVO> categorys = tagService.findAllDetail();
		
		return Result.success(categorys);
	}
	
	@GetMapping("/hot")
	public Result listHotTags(){
		int limit = 6;
		List<Tag> tags = tagService.listHotTags(limit);
		
		return Result.success(tags);
	}
	
	@GetMapping("/{id}")
	public Result getTagById(@PathVariable("id") Integer id){
		
		Result r = new Result();
		
		if(null == id){
			r.setResultCode(ResultCode.PARAM_IS_BLANK);
			return r;
		}
		
		Tag tag = tagService.getTagById(id);
		
		r.setResultCode(ResultCode.SUCCESS);
		r.setData(tag);
		return r;
	}
	
	@PostMapping("/create")
	@RequiresRoles(Base.ROLE_ADMIN)
	public Result saveTag( @Validated @RequestBody Tag tag){
		
		Integer tagId = tagService.saveTag(tag);
		
		Result r = Result.success();
		r.simple().put("tagId", tagId);
		return r;
	}
	
	@PostMapping("/update")
	@RequiresRoles(Base.ROLE_ADMIN)
	public Result updateTag(@RequestBody Tag tag){
		Result r = new Result();
		
		if(null == tag.getId()){
			r.setResultCode(ResultCode.USER_NOT_EXIST);
			return r;
		}
		
		Integer tagId = tagService.updateTag(tag);
		
		r.setResultCode(ResultCode.SUCCESS);
		r.simple().put("tagId", tagId);
		return r;
	}
	
	@GetMapping("/delete/{id}")
	@RequiresRoles(Base.ROLE_ADMIN)
	public Result deleteTagById(@PathVariable("id")Integer id){
		Result r = new Result();
		
		if(null == id){
			r.setResultCode(ResultCode.PARAM_IS_BLANK);
			return r;
		}
		
		tagService.deleteTagById(id);
		
		r.setResultCode(ResultCode.SUCCESS);
		return r;
	}
	
	
	
}
