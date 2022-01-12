create table pharmaces (
	logo varchar(30),
	name varchar(30) notnull,
	cnpj int notnull,
	adress varchar(50) notnull,
	operation_hours varchar(20) notnull,
	responsible varchar(30) notnull,
	celular int notnull,
	others varchar(80),
    id serial notnull
);