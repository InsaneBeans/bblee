package com.shimh.controller;

import com.shimh.common.request.RequestParam;
import com.shimh.common.result.Result;
import com.shimh.service.MessageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TODO completion javadoc.
 *
 * @author hong.hu
 * @since 25 四月 2018
 */
@RestController
@RequestMapping(value="/message")
public class MessageController {

	@Autowired
	private MessageService messageService;

	@RequestMapping("add")
	public Result message(@RequestBody RequestParam requestParam) {
		return messageService.saveMsg(requestParam);
	}

	@RequestMapping("list")
	public Result list(@RequestBody RequestParam requestParam) {
		return messageService.listMsg(requestParam);
	}

}
