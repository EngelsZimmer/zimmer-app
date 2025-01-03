DROP TABLE if exists posts cascade;

DROP TABLE if exists users cascade;

DROP TABLE if exists replies cascade;

CREATE TABLE posts (
    post_id serial PRIMARY KEY,
    post_title varchar(200) not null,
    post_content varchar(2000) not null,
    post_view INT not null default 0,
    post_time TIMESTAMP default now (),
    user_email varchar(140) not null
);

CREATE TABLE users (
    user_email varchar(140) PRIMARY KEY,
    user_password varchar(200) NOT NULL,
    user_name varchar(200) NOT NULL,
    created_at TIMESTAMP
);

CREATE TABLE replies (
    reply_id serial PRIMARY KEY,
    reply_content varchar(2000),
    reply_time TIMESTAMP,
    user_email varchar(140),
    post_id INT
);

ALTER TABLE posts ADD FOREIGN KEY (user_email) REFERENCES users (user_email);

ALTER TABLE replies ADD FOREIGN KEY (user_email) REFERENCES users (user_email);

ALTER TABLE replies ADD FOREIGN KEY (post_id) REFERENCES posts (post_id);

GRANT ALL PRIVILEGES ON TABLE posts to admin;

GRANT ALL PRIVILEGES ON TABLE users to admin;

GRANT ALL PRIVILEGES ON TABLE replies to admin;

GRANT ALL PRIVILEGES ON all sequences in schema public to admin;

INSERT INTO
    users (user_email, user_password, user_name, created_at)
VALUES
    ('user@example.com', '1234', 'user', NOW ());

INSERT INTO
    posts (
        post_id,
        post_title,
        post_content,
        post_view,
        post_time,
        user_email
    )
VALUES
    (
        1,
        'Post Title',
        'This is the content.',
        0,
        NOW (),
        'user@example.com'
    );
