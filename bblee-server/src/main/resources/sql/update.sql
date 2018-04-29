create table bblee_message (
 id bigint(11) not null auto_increment comment 'ID自增',
 user_name varchar(50) not null default '' comment '姓名',
 usr_email varchar(50) not null default '' comment '个人邮箱',
 user_message varchar(255) not null default '' comment '留言内容',
 user_address varchar(100) not null default '' comment '用户地址',
 msg_anonymous tinyint(2) not null DEFAULT 0 comment '是否匿名',
 msg_other varchar(255) not null default '' comment '其他信息',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='留言信息';


create table browse_total (
  id bigint(11) not null auto_increment comment 'ID自增',
  total_count bigint(11) not null default 0 comment '总次数',
  time_count bigint(11) not null default 0 comment '今日访问次数',
  time varchar(50) not null default '' comment '时间字符串，按日期YYYYMMDD存储',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='网站访问次数';