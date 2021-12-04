-- create Students Table
-- auto-generated definition
create table Students
(
    StudentId int auto_increment,
    FirstName varchar(255) not null,
    LastName  varchar(255) not null,
    `Group`   varchar(255) not null,
    constraint Students_StudentId_uindex
        unique (StudentId)
);

alter table Students
    add primary key (StudentId);

-- create Students Table
-- auto-generated definition
create table Exams
(
    Id        int auto_increment,
    StudentId int           not null,
    ExamName  varchar(1023) not null,
    Result    int           not null,
    constraint Exams_Id_uindex
        unique (Id),
    constraint StudentId
        foreign key (StudentId) references Students (StudentId)
);

alter table Exams
    add primary key (Id);