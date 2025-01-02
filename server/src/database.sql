DROP TABLE if exists posts CASCADE;

CREATE TABLE posts (
    post_id integer PRIMARY KEY,
    post_title varchar,
    post_content text,
    post_view integer,
    post_time timestamp,
    user_email varchar
);

DROP TABLE if exists users CASCADE;

CREATE TABLE users (
    user_email varchar PRIMARY KEY,
    user_password varchar NOT NULL,
    user_name varchar NOT NULL,
    created_at timestamp
);

DROP TABLE if exists replies CASCADE;

CREATE TABLE replies (
    reply_id integer PRIMARY KEY,
    reply_content text,
    reply_time timestamp,
    user_email varchar,
    post_id integer
);

ALTER TABLE posts ADD FOREIGN KEY (user_email) REFERENCES users (user_email);

ALTER TABLE replies ADD FOREIGN KEY (user_email) REFERENCES users (user_email);

ALTER TABLE replies ADD FOREIGN KEY (post_id) REFERENCES posts (post_id);

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
