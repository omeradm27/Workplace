-- select * from customer where city='Ankara' and id=3 or city='Kayseri'
-- select* from customer
-- insert into customer(id,name,surname,city) values (10,'mehmet','kaya','İstanbul')
-- select* from customer where salary>=2500 and salary<=4000
-- select* from customer where name not like '%e%'
-- delete from customer where id=1
-- select * from customer order by id
-- update customer set salary =3000 where id=5

-- update customer set city='Ankara' Where city='Kayseri' 
-- Count MAX Min Sum Avg
-- Select count(*) from customer where city='ankara'
-- select sum(salary)from customer where city!= 'İstanbul'
-- select avg(salary) from customer where city='İstanbul'
-- select min(salary),max(salary),(max(salary)-min(salary)) from customer
-- select * from customer where salary>3000
-- update customer set city='Ankara' where city='ankara'
-- select city,count(*)As Kişi from customer group by city order by count(*) desc
-- select city,sum(salary) as SalarySum from  customer group by city
-- select city,count(*) as kişi from  customer group by city order by count(*) 
-- select city,sum(salary)As sumSalary from customer group by city
-- select city,avg(salary) as Average from customer group by city
-- select city,count(*) from customer group by city having count(*)>1
-- select city ,avg(salary) as average from customer group by city having avg(salary)>3750 and city like '%s%' 
--  select * from  customer where salary=(select max(salary) from customer)order by id
-- select * from customer where salary=(select max(salary) from customer where city='Ankara') 

-- insert into job(id,name) values(1,'Doktor')
-- insert into job(id,name) values(2,'Mühendislilk')
-- insert into job(id,name) values(3,'Eczacılık')
-- insert into job(id,name) values(4,'Aşçılık')

-- select* from customer where job=(select id from job where name='Doktor') order by id
-- select name,surname,city,(salary*1.25) from customer where job=(select id from job where name ='Mühendis') order by id
-- update customer set salary=salary*0.25  where job=(select id from job where name ='Mühendis') 
-- select * from product
-- truncate table product
select customer.name,surname,city,job.name from customer inner join job on customer.job=job.id




