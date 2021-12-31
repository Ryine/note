# mysql

## 数据类型
常用数据类型
int
varchar
date
datetime

整数
tinyint smallint mediumint int bigint
分别使用8位 16位 24位 32位 64位的存储空间

字符串
char 定长字符串，不足用空格填充 大小0-255 
varchar 变长字符串 大小0-65535
超长都会被截断


小数
decimal(m,d)-精确计算
DECIMAL(M,D)中，M范围是1到65，D范围是0到30。
M默认为10，D默认为0，D不大于M。
存储数值时，小数位不足会自动补0
存储空间m+2

float(m,d)-近似计算
大小4字节，尽量不要指定精度
double(m,d)-近似计算
大小8字节

时间
date time datetime timestamp

## 数据定义(DDL)
### 数据库操作
CREATE DATABASE text
DROP DATABASE text
USE text

### 表操作
SHOW TABLES
DESC nideshop_ad
SHOW CREATE TABLE nideshop_ad
CREATE TABLE `bill_receipt_type` (
  `receipt_type_id` int NOT NULL AUTO_INCREMENT COMMENT '序号',
  `organ_id` int DEFAULT NULL COMMENT '项目ID',
  `receipt_type_name` varchar(128) DEFAULT NULL COMMENT '票据类型名称',
  `receipt_type_code` varchar(64) DEFAULT NULL COMMENT '票据类型编码',
  `is_system_print` int DEFAULT NULL COMMENT '是否系统打印 0 否 1是',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `status` int DEFAULT NULL COMMENT '状态：0 无效  1有效',
  `is_receive` int DEFAULT '1' COMMENT '是否需要领用 1 是  0  否',
  `is_restrict_number` int DEFAULT '0' COMMENT '是否限制行数 1 是  0  否',
  PRIMARY KEY (`receipt_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8 COMMENT='票据类型定义'
DROP TABLE bill_receipt_type
ALTER TABLE bill_receipt_type ADD COLUMN birth VARCHAR(10) NOT NULL
ALTER TABLE bill_receipt_type CHANGE COLUMN birth birthday VARCHAR(20) NOT NULL
ALTER TABLE bill_receipt_type MODIFY COLUMN birth VARCHAR(120)
ALTER TABLE bill_receipt_type DROP COLUMN birthday

CREATE TABLE `bill_receipt_type` (   `receipt_type_id` int(11) NOT NULL COMMENT '序号',   `organ_id` int(11) DEFAULT NULL COMMENT '项目ID',   `receipt_type_name` varchar(128) DEFAULT NULL COMMENT '票据类型名称',   `receipt_type_code` varchar(64) DEFAULT NULL COMMENT '票据类型编码',   `is_system_print` int(1) DEFAULT NULL COMMENT '是否系统打印 0 否 1是',   `create_time` datetime DEFAULT NULL COMMENT '创建时间',   `status` int(1) DEFAULT NULL COMMENT '状态：0 无效  1有效',   `is_receive` int(1) DEFAULT '1' COMMENT '是否需要领用 1 是  0  否',   `is_restrict_number` int(1) DEFAULT '0' COMMENT '是否限制行数 1 是  0  否',   PRIMARY KEY (`receipt_type_id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='票据类型定义'

#### 索引
CREATE INDEX index_name ON bill_receipt_type(receipt_type_code)
DROP INDEX index_name ON bill_receipt_type

## 数据操纵(DML)
INSERT INTO bill_receipt_type(organ_id, receipt_type_name, receipt_type_code, is_system_print, create_time, status, is_receive, is_restrict_number)
values(67, '打印票据', 'dypj', 1, now(), 1, 1, 1)
UPDATE bill_receipt_type SET receipt_type_name = '流水票据' WHERE receipt_type_id  = 1
DELETE FROM bill_receipt_type WHERE receipt_type_id = 2

## 数据查询(DQL)
单表查询
多表查询
嵌套查询
集合查询

### 函数
IFNULL IF  DATE_FORMAT  GROUP_CONCAT  sum  count DATEDIFF Rank

### 锁
锁的类型：读锁(共享锁)、写锁（排他锁）
锁的粒度：表锁、行锁

### 事务
事务的四个特性
1. 原子性
2. 一致性
3. 隔离性
4. 持久性

隔离级别
2.read uncommitted：未提交读
3.read committed：提交读
4.repeatable read：可重复读(mysql默认隔离级别)
5.serializable：串行化

MVCC多版本并发控制


### 索引
[MySQL 索引知识点总结](https://cloud.tencent.com/developer/article/1761267)

B+Tree索引 
哈希索引
全文索引

### 全文搜索
其他实现:elasticsearch
[全文检索原理](https://cloud.tencent.com/developer/article/1658694)

### 性能测试
EXPLAIN

### 性能优化
延迟关联

## 实例
狼人杀
- 表设计
表名:werewolf_play
属性:
  paly_id 房间号，游戏id
  create_time 创建时间
  create_user_id 创建用户id
  nums 游戏总人数
  wolf 狼人
  villager 村民
  prophet 预言家
  witch 女巫
  hunter 猎人
  cupid 丘比特
  guard 守卫
  idiot 白痴

表名:play_role_detail
属性:
  res_id 关系id
  paly_id 游戏id
  user_id 用户id
  create_time 创建时间
  play_name 角色名称
  play_num 编号




权责切分设置
- 查询列表
select GROUP_CONCAT( ab_cycle_id ) AS abCycleIds, c.group_organ_id as groupOrganId, c.organ_id as organId, c.organ_name as organName, c.ab_cycle as abCycle, GROUP_CONCAT( CONCAT(fee_item_type_id,'-',fee_item_type_Name) ) AS feeItemType, GROUP_CONCAT(fee_item_type_name) as feeItemTypeName, MAX( c.create_time ) AS createTime, c.status from bill_accrual_basis_cycle c WHERE c.group_organ_id = ? GROUP BY c.organ_id, c.ab_cycle ORDER BY createTime DESC limit 10,10

- 新增
insert into bill_accrual_basis_cycle ( ab_cycle_id,group_organ_id,organ_id,organ_name,ab_cycle,fee_item_type_id,fee_item_type_name, remark,create_user_id,create_time,update_user_id,update_time,status) values (?,?,?, ?,?,?, ?,?,?, ?,?,?, ? ) , (?,?,?, ?,?,?, ?,?,?, ?,?,?, ? ) , (?,?,?, ?,?,?, ?,?,?, ?,?,?, ? ) , (?,?,?, ?,?,?, ?,?,?, ?,?,?, ? )

- 编辑
select ab_cycle_id, group_organ_id, organ_id, organ_name, ab_cycle, fee_item_type_id, fee_item_type_name, remark, create_user_id, create_time, update_user_id, update_time, status from bill_accrual_basis_cycle where ab_cycle_id in (120007,120009)
UPDATE bill_accrual_basis_cycle SET ab_cycle=?, update_user_id=?, update_time=? WHERE ab_cycle_id = ? ; UPDATE bill_accrual_basis_cycle SET ab_cycle=?, update_user_id=?, update_time=? WHERE ab_cycle_id = ?

- 启用禁用
update bill_accrual_basis_cycle set status = ? where ab_cycle_id in (120007,120009,120010)

上上签接口设置
<!-- SELECT SQL_CALC_FOUND_ROWS * from bill_bestsign_interface where organ_id = 1000 ORDER BY create_time limit 10 OFFSET 0;
SELECT FOUND_ROWS();
UPDATE bill_bestsign_interface SET `status` = 1 where bestsign_Interface_id = 18; -->

- 查询列表
select bestsign_Interface_id, organ_id, client_Id, signature, private_key, client_Secret, status, interface_host, interface_mothed, interface_use, user_Account, enter_priseName, notification, interface_name, create_time, create_user_id, create_user_name, update_time, update_user_id, update_user_name from bill_bestsign_interface WHERE ( organ_id = ? ) limit 15
select count(1) from (select
  bestsign_Interface_id, organ_id, client_Id, signature, private_key, client_Secret, 
  status, interface_host, interface_mothed, interface_use, user_Account, enter_priseName, 
  notification, interface_name, create_time, create_user_id, create_user_name, update_time, 
  update_user_id, update_user_name
  from bill_bestsign_interface
  WHERE (  organ_id = 1000 )) tmp_count
- 查询详情
 select bestsign_Interface_id, organ_id, client_Id, signature, private_key, client_Secret, status, interface_host, interface_mothed, interface_use, user_Account, enter_priseName, notification, interface_name, create_time, create_user_id, create_user_name, update_time, update_user_id, update_user_name from bill_bestsign_interface where bestsign_Interface_id = ?

- 启用禁用
select count(*) from bill_bestsign_interface WHERE ( organ_id = ? and interface_use = ? and status = ? and bestsign_Interface_id <> ? )
UPDATE bill_bestsign_interface 
SET organ_id = ?,
STATUS = ?,
interface_use = ?,
update_user_id = ?,
update_user_name = ? 
WHERE
bestsign_Interface_id = ?

- 编辑
UPDATE bill_bestsign_interface 
SET organ_id = ?,
client_Id = ?,
signature = ?,
private_key = ?,
client_Secret = ?,
STATUS = ?,
interface_host = ?,
interface_mothed = ?,
interface_use = ?,
user_Account = ?,
enter_priseName = ?,
notification = ?,
interface_name = ?,
create_user_id = ?,
create_user_name = ?,
update_time = ?,
update_user_id = ?,
update_user_name = ? 
WHERE
bestsign_Interface_id = ?

- 新增
select count(*) from bill_bestsign_interface WHERE ( organ_id = ? and interface_use = ? and status = ? )

经营业务分配
- 查询经营业务
SELECT a.business_name, b.business_name, c.business_name from tb_uhome_business_type_def a inner join tb_uhome_business_type_def b on b.parent_id = a.business_type inner join tb_uhome_business_type_def c on c.parent_id = b.business_type where a.CODE = 'BTYPE_ONCE' and c.organ_id = 1300 and c.status = 1

SELECT * from tb_uhome_business_type_def a where parent_id in (SELECT business_type from tb_uhome_business_type_def b where parent_id in (SELECT business_type from tb_uhome_business_type_def c WHERE code = 'BTYPE_ONCE')) AND `STATUS` = 1 AND organ_id = 1300

查询省市
select r.region_id as regionId, r.name as cityName, r.parent_region_id as parentRegionId, (select c.name from tb_uhome_region c where r.parent_region_id = c.region_id) as provinceName from tb_uhome_region r where r.region_id in ( select financial_city from tb_uhome_organ where organ_id in ( , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? ) group by financial_city ) and r.status = 1 and r.level =1 group by r.region_id

### 收款记录
SELECT * FROM tb_uhome_pay_log a left JOIN tb_uhome_pay_log_detail b ON a.PAY_SERIAL_NBR = b.PAY_SERIAL_NBR
where a.COMMUNITY_ID = 1007 GROUP BY a.PAY_SERIAL_NBR
SELECT * FROM tb_uhome_pay_log a where a.COMMUNITY_ID = 1007
SELECT a.* FROM tb_uhome_pay_log a, tb_uhome_pay_log_detail b, bill_vch_act_data_log c, eas_pay_check_order d
where a.COMMUNITY_ID = 1007 and a.PAY_SERIAL_NBR = b.PAY_SERIAL_NBR and c.VOUCHER_ID = d.order_id GROUP BY a.PAY_SERIAL_NBR and c.pay_detail_id = b.pay_detail_id
select * from eas_pay_check_order

SELECT a.* FROM tb_uhome_pay_log a left JOIN tb_uhome_pay_log_detail b ON a.PAY_SERIAL_NBR = b.PAY_SERIAL_NBR left JOIN bill_vch_act_data_log c on b.pay_detail_id = c.pay_detail_id LEFT JOIN eas_pay_check_order d on c.VOUCHER_ID = d.order_id where a.COMMUNITY_ID = 1007 GROUP BY a.PAY_SERIAL_NBR


## 计划
尝试之前业务的sql

## 问题记录
