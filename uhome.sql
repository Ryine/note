explain SELECT * FROM bill_return_fee_task WHERE task_id = 67
explain SELECT * FROM bill_return_fee_task limit 1

explain SELECT * FROM bill_return_fee_task WHERE task_id = 13 or task_id = 12
show create table bill_receipt_type

# leetcode
select * from Person p left join Address a on p.PersonId = a.PersonId;

select IFNULL(select distinct Salary from Employee order by Salary desc limit1,1, NUll) as SecondHighestSalary;

select a.Score as Score, (select count(distinct b.Score) from Scores b where b.Score >= a.Score) as `Rank` from Scores a order by a.Score desc
select Score, dense_rank() over (order by Score desc) `Rank` from Scores
# 也可试试变量排名

# 连续出现的数字
select distinct num as ConsecutiveNums from (select num, @total := IF(@pre = num, @total + 1, 1) as total, @pre := num  from Logs as l1, (select @pre := null, @total := 0) as l2) as a where a.total >= 3

select a.Name Employee from Employee a inner join Employee b on a.ManagerId = b.Id where a.Salary > b.Salary

select Email from Person group by Email having count(Email) > 1

select distinct c.Name Customers from Customers c left join Orders o on c.Id = o.CustomerId where o.CustomerId is Null

select d.name Department, e.Name Employee , e.Salary from Employee e inner join Department d on e.DepartmentId = d.Id where (DepartmentId, Salary) in (select DepartmentId, Max(Salary) from Employee group by DepartmentId)

delete p1 from Person p1 , Person p2 where p1.Email = p2.Email and p1.Id > p2.Id

select w1.id from Weather w1 inner join Weather w2 on DATEDIFF(w1.recordDate, w2.recordDate) = 1 and w1.Temperature > w2.Temperature

select name, population, area from World where area >= 3000000 or population >= 25000000

select class from courses  group by class having count(student) >= 5

select * from cinema where mod(id, 2) = 1 and description != 'boring' order by rating desc

select IF(id % 2 = 0, id - 1, IF(id = (select count(id) from seat), id, id + 1)) as id, student from seat order by id

update Salary set sex = IF(sex = 'm', 'f', 'm')

select * from Trips t, Users u where t.client_id = u.users_id and 

select Request_at Day, ROUND(sum(IF(status = 'completed', 0, 1)) / count(*), 2) `Cancellation Rate` from Trips t where
 client_id in (select users_id from Users where banned = 'No') 
 and driver_id in (select users_id from Users where banned = 'No') 
 and Request_at BETWEEN '2013-10-01' AND '2013-10-03'
 group by Request_at