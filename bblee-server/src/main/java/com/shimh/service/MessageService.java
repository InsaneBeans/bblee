package com.shimh.service;

import com.shimh.common.request.RequestParam;
import com.shimh.common.result.Result;
import com.shimh.entity.Message;

/**
 * TODO completion javadoc.
 *
 * @author hong.hu
 * @since 25 四月 2018
 */
public interface MessageService {
	Result saveMsg(RequestParam param);

	Result listMsg(RequestParam param);
}
