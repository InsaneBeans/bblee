package com.shimh.repository;

import com.shimh.entity.Message;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * TODO completion javadoc.
 *
 * @author hong.hu
 * @since 25 四月 2018
 */
@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
}
