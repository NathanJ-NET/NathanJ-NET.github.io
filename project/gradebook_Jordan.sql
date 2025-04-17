-- Create the `gradebook` database
CREATE DATABASE gradebook;
USE gradebook;

-- Create `assignments` table
CREATE TABLE assignments (
    assignment_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    description TEXT,
    due_date DATE,
    student_id INT,
    PRIMARY KEY (assignment_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

-- Create `students` table
CREATE TABLE students (
    student_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    enrollment_date DATE,
    PRIMARY KEY (student_id)
);

-- Insert sample data into `assignments`
INSERT INTO assignments (title, description, due_date, student_id) VALUES
('Lab7 PostgreSQL', 'Set up a database and insert records as described in the instructions.', '2025-01-15', 1);

-- Insert sample data into `students`
INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES
('Nathan', 'Jordan', 'nzjordan1@my.waketech.edu', NULL);


