

-- add_name.sql
-- Define a function to generate random IDs
CREATE OR REPLACE FUNCTION generate_random_id() RETURNS BIGINT AS $$
DECLARE
    random_id BIGINT;
BEGIN
    random_id := floor(random() * 10000000000); -- Generate a random 10-digit number
    RETURN random_id;
END;
$$ LANGUAGE plpgsql;


INSERT INTO bcrypt_qap3_info (id, first_name, number, last_name, email, password)
VALUES (
	generate_random_id(),
	'Mohamed',
	'7093305254',
	'Maghrebi',
	'mohamed.maghrebi@keyin.com',
	'123456'
	)
	
