create database Meutcc;
use Meutcc;
create table alunos(
    id int primary key auto_increment,
    nome varchar(100)
);

insert into alunos (nome) values ('Descartes');