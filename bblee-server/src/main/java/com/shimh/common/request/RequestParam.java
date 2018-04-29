package com.shimh.common.request;

/**
 * TODO completion javadoc.
 *
 * @author hong.hu
 * @since 25 四月 2018
 */
public class RequestParam {

	private Integer id;

	// message request
	private String userName;

	private String message;

	private String address;

	private int anonymous = 0;

	private String other;

	private int pageNo;

	private int pageSize;

	public RequestParam() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

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

	public int getAnonymous() {
		return anonymous;
	}

	public void setAnonymous(int anonymous) {
		this.anonymous = anonymous;
	}

	public String getOther() {
		return other;
	}

	public void setOther(String other) {
		this.other = other;
	}


	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageNo() {
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
}
