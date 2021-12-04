SELECT S.FirstName, S.LastName FROM Students S
JOIN Exams E on S.StudentId = E.StudentId -- join Exams table
WHERE E.Result < 3 -- filter by exam result < 3
GROUP BY E.StudentId -- group by studentId (it's needed for count expression knows how to count, for which field)
HAVING count(E.ExamName) > 2; -- filter for count exams with bad mark is more then twoS