SELECT Tmp.Group FROM (
        SELECT S.StudentId, S.`Group` FROM Students S -- the same query as in firstQuery.sql but we need StudentId field instead FirstName and LastName
        JOIN Exams E on S.StudentId = E.StudentId
        WHERE E.Result < 3
        GROUP BY E.StudentId
        HAVING count(E.ExamName) > 2 -- end the same query
    ) Tmp
GROUP BY Tmp.Group -- group by student group name to "count" expression may know how to count, for which field
HAVING COUNT(Tmp.StudentId) > 10; -- filter for groups which have more then 10 students with bad marks
