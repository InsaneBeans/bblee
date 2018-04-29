package com.shimh.service.impl;

import java.util.List;

import com.shimh.common.request.RequestParam;
import com.shimh.common.result.Result;
import com.shimh.entity.Message;
import com.shimh.repository.MessageRepository;
import com.shimh.service.MessageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * TODO completion javadoc.
 *
 * @author hong.hu
 * @since 25 四月 2018
 */
@Service
public class MessageServiceImpl implements MessageService {

	@Autowired
	private MessageRepository messageRepository;

	@Override
	public Result saveMsg(RequestParam param) {
		Message message = new Message();
		message.setAddress(param.getAddress());
		message.setAnonymous(param.getAnonymous());
		message.setMessage(param.getMessage());
		message.setOther(param.getOther());
		message.setUserName(param.getUserName());

		Message saved = messageRepository.save(message);
		return Result.success(saved);
	}

	@Override
	public Result listMsg(RequestParam param) {
		int pageNo = param.getPageNo();
		int pageSize = param.getPageSize();

		if (pageSize > 0) {
			if (pageNo == 1) {
				pageNo = 0;
			}
			PageRequest pageRequest = new PageRequest(pageNo, pageSize);
			Page<Message> result = messageRepository.findAll(pageRequest);
			return Result.success(result);
		} else {
			List<Message> result = messageRepository.findAll();
			return Result.success(result);
		}

	}
}
