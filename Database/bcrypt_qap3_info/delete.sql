
-- delete.sql

-- Delete the row where the first_name is 'Emma'
DELETE FROM bcrypt_qap3_info
WHERE first_name = 'Emma';

-- Display the updated records after deletion
SELECT * FROM bcrypt_qap3_info;