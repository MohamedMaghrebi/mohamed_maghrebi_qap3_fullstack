

-- update_table.sql

-- Create a temporary table to hold the updated values
CREATE TEMP TABLE temp_login_table (id VARCHAR(50), login VARCHAR(50));

-- Use ROW_NUMBER() to generate sequential numbers for login column
INSERT INTO temp_login_table (id, login)
SELECT id, ROW_NUMBER() OVER ()::VARCHAR AS login
FROM bcrypt_qap3_info;

-- Update the bcrypt_qap3_info table with the updated login values
UPDATE bcrypt_qap3_info
SET login = temp.login
FROM temp_login_table temp
WHERE bcrypt_qap3_info.id = temp.id;

-- Drop the temporary table
DROP TABLE temp_login_table;

-- Display the updated records
SELECT * FROM bcrypt_qap3_info;