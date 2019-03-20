SELECT (
    SELECT DISTINCT Salary from Employee
    order by Salary
    desc
    limit 1, 1
) as SecondHighestSalary
