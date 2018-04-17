package com.shimh.repository;

import com.shimh.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 * 
 * @author shimh
 *
 * 2018年1月23日
 *
 */
public interface UserRepository extends JpaRepository <User, Long>{

	User findByAccount(String account);

}
