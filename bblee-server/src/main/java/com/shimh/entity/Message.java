package com.shimh.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.shimh.common.entity.BaseEntity;
import org.hibernate.validator.constraints.NotBlank;

/**
 * TODO completion javadoc.
 *
 * @author hong.hu
 * @since 25 四月 2018
 */
@Entity
@Table(name = "bblee_message")
public class Message extends BaseEntity<Integer> {

	@NotBlank
	@Column(name = "user_name", length = 40)
	private String userName;

	@NotBlank
	@Column(name = "user_message", length = 200)
	private String message;

	@NotBlank
	@Column(name = "user_address")
	private String address;

	@Column(name = "msg_anonymous")
	private int anonymous = 0;

	@Column(name = "msg_other")
	private String other;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getOther() {
		return other;
	}

	public void setOther(String other) {
		this.other = other;
	}

	public int getAnonymous() {
		return anonymous;
	}

	public void setAnonymous(int anonymous) {
		this.anonymous = anonymous;
	}
}
