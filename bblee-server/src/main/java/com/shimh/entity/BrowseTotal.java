package com.shimh.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.shimh.common.entity.BaseEntity;

/**
 * TODO completion javadoc.
 *
 * @author hong.hu
 * @since 26 四月 2018
 */
@Entity
@Table(name = "browser_total")
public class BrowseTotal extends BaseEntity<Integer> {

	private Long totalCount;

	private Long timeCount;

	private String time;

	public Long getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(Long totalCount) {
		this.totalCount = totalCount;
	}

	public Long getTimeCount() {
		return timeCount;
	}

	public void setTimeCount(Long timeCount) {
		this.timeCount = timeCount;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
}
