-- insert into fakulte(id,ad) values(1,'mühendislik');
-- insert into fakulte(id,ad) values(2,'İibf');
-- insert into fakulte(id,ad) values(3,'Fen Edebiyat');
-- insert into fakulte(id,ad) values(4,'Tıp');
-- insert into fakulte(id,ad) values(5,'Eczacılık');

-- select * from fakulte;

-- create table bolum(
-- bolumid serial not null primary key,
-- 	bolumad VARCHAR(15) not null,
-- 	bolumf integer not null
-- )
-- insert into bolum(bolumid,bolumad,bolumf) values(1,'mekatronik',1);
-- insert into bolum(bolumid,bolumad,bolumf) values(2,'yazılım',1);
-- insert into bolum(bolumid,bolumad,bolumf) values(3,'bilgisayar',1);
-- insert into bolum(bolumid,bolumad,bolumf) values(4,'ybs',2);
-- insert into bolum(bolumid,bolumad,bolumf) values(5,'matematik',3);
-- insert into bolum(bolumid,bolumad,bolumf) values(6,'kimya',3);
-- insert into bolum(bolumid,bolumad,bolumf) values(7,'fizik',3);
-- insert into bolum(bolumid,bolumad,bolumf) values(8,'işletme',2);
-- insert into bolum(bolumid,bolumad,bolumf) values(9,'metalurji',1);

-- select * from bolum;
-- select ad,count(*) from bolum inner join fakulte on bolum.bolumf=fakulte.id group by fakulte.ad 
-- select ad,count(*) as toplam from bolum inner join fakulte on bolum.bolumf=fakulte.id group by fakulte.ad order by toplam desc limit 1 
-- select bolumid,bolumad,ad from fakulte left join bolum on fakulte.id=bolum.bolumf
-- select bolumid,bolumad,ad from fakulte right join bolum on fakulte.id=bolum.bolumf
-- select bolumid,bolumad,ad from fakulte full join bolum on fakulte.id=bolum.bolumf
-- select bolumid,bolumad,ad from fakulte cross join bolum 
-- select * from table A
-- intersect--A n B
-- select * from table B
 
 
-- select * from table A
-- except-- A/B
-- select * from table B

-- select * from table B
-- except-- B/A
-- select * from table A

-- select * from table A
-- union-- A U B
-- select * from table B

-- Select concat_ws('*lan','Merhaba','Dünya','Ay')

-- select left ('Merhaba Dünya',3);
-- select right ('Merhaba Dünya',3);
-- select length('aşlskdşladma');

-- select bolumid,replace(bolumad,'a','e') from bolum
-- select reverse(bolumad) from bolum
-- select substring('murat yücedaa',4,2)
-- select lower(bolumad),upper()
-- select abs(-5)
-- select ceiling(4.54)
-- select floor(4.83)
-- select pi()
-- select power(2,4)
-- select Random()
-- select round(18.123,2)
-- select sqrt(363)
-- select current_date;
-- select current_time;
-- select now()
-- select age(timestamp '25.12.1993')
-- insert into kitaplar values (1,'Satranç','Stephan Zweig','01.09.2020');
-- insert into kitaplar values (2,'Kuyucaklı Yusuf','Sabahattin Ali','01.02.2021');
-- insert into kitaplar values (3,'Yer Altından Notlar','Dostoyevski ','03.01.2022');
-- insert into kitaplar values (4,'Vadideki Zambak','Gogol','11.04.2021');
-- insert into kitaplar values (5,'Devlet','Aristo ','01.08.2021');
-- insert into kitaplar values (6,'Palto','Gogol ','16.07.2020');
-- insert into kitaplar values (7,'Beyaz Diş','Jack London','03.05.2019');
-- insert into kitaplar values (8,'Olasılıksız','Adam Fawer','02.03.2018');

-- create view fakultedekiBolumSayısı as 
-- select ad,count(*) from bolum inner join fakulte on bolum.bolumf=fakulte.id group by fakulte.ad 
-- SELECT * From fakultedekiBolumSayısı

-- drop view view1

-- do $$
-- declare toplam int;
-- toplam2 int;

-- begin

-- toplam:=(select count(*) from kitaplar);
-- toplam2:=(select count (*) from kitaplar where length(ad)>10);
-- raise notice 'Kitap sayısı : %',toplam;
-- raise notice 'Kitap Adı 10 dan Büyüklerin sayısı : %',toplam2;
-- if toplam>10 then 
-- raise notice 'Kitap Sayısı 10 dan büyük';
-- else 
-- raise notice 'Kitap Sayısı 10 dan küçük';
-- end if;

-- end $$
-- select * from kitaplar

-- ÖDEV
-- fakülte mühendislik olan 3 den az mı fazla mı bölümü var

-- do $$
-- declare bolumSayısı int;
-- begin

-- bolumSayısı:=(select count(*)from bolum inner join fakulte on bolum.bolumf=fakulte.id  where fakulte.ad='mühendislik' );
-- if bolumSayısı < 3 then
-- raise notice 'Mühendislik Fakültesi 3 den az';
-- else
-- raise notice 'Mühendislik fakültesi 3 den fazla';
-- end if;
-- end$$

--Procedure

-- Create Procedure deneme()
-- language plpgsql
-- as $$
-- begin 
-- raise notice 'POSTGRESQL ';
-- end;
-- $$
-- call deneme();

-- create procedure fakulte_ekle (p1 integer,p2 text)
-- language plpgsql
-- as $$
-- begin 
-- insert into fakulte(id,ad) values (p1,p2);
-- end$$;
-- drop procedure fakulte_ekle(p1 integer,p2 text);
-- select  * from fakulte;
-- call fakulte_ekle(9,'Teknoloji');

-- create function toplam(s1 int,s2 int)
-- returns int
-- language plpgsql
-- as
-- $$
-- declare 
-- sonuc integer;
-- begin
-- sonuc:=s1+s2;
-- return sonuc;
-- end;
-- $$;

-- select toplam(4,6);

-- create function getBook(param varchar)
-- returns table
-- (
-- 	kitap_id int,
-- 	kitap_ad varchar,
-- 	kitap_yazar varchar
-- )
-- language plpgsql
-- as
-- $$
-- begin
-- return query 
-- 	select id,ad,yazar from kitaplar
-- 		where ad like param;
-- end;
-- $$;
--  select * from  getBook('%as%');


-- create or replace function test()
-- returns trigger
-- as 
-- $$
-- begin 
-- update bolum2 set id=id+1;
-- return new;
-- end;
-- $$
-- language plpgsql;
-- create trigger testtrig
-- after insert
--  on bolum
--  for each row
--  execute procedure test();
-- select * from bolum
-- insert into bolum(bolumid,bolumad,bolumf) values(11,'Malzeme',1);

-- select * from bolum2

create or replace function test2()
returns trigger 
as
$$
declare uzunluk int;
begin
uzunluk:=(select length(bolumad) from bolum order by bolumid desc limit 1 );
update bolum2 set id=id+uzunluk;
return new;
end;
$$
language plpgsql

create trigger tsttrg
after insert on bolum for each row
execute procedure test2();

insert into bolum(bolumid,bolumad,bolumf) values(13,'Elektronik',1);

select * from bolum2
 
