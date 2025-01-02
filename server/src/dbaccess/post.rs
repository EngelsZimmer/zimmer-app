use sqlx::postgres::PgPool;
use crate::models::post::*;

pub async fn new_post_db(pool: &PgPool, new_post: CreatePost) -> Post {
    let post_row = sqlx::query!(
        "INSERT INTO posts (post_title, post_content) VALUES ($1, $2)
        RETURNING post_id, post_title, post_content, post_view, post_time,user_email",
        new_post.post_title,
        new_post.post_content,
    )
    .fetch_one(pool)
    .await
    .unwrap();

    Post {
        post_id: post_row.post_id,
        post_title: post_row.post_title.clone().unwrap(),
        post_content: post_row.post_content.clone().unwrap(),
        post_view: post_row.post_view.unwrap(),
        post_time: Some(chrono::NaiveDateTime::from(post_row.post_time.unwrap())),
        user_email: post_row.user_email.clone().unwrap(),
    }
}

pub async fn get_post_details_db(pool: &PgPool, post_id: i32) -> Post {
    let post_row = sqlx::query!(
        "SELECT *
        FROM posts
        WHERE post_id=$1",
        post_id
    )
    .fetch_one(pool)
    .await
    .unwrap();

    Post {
        post_id: post_row.post_id,
        post_title: post_row.post_title.clone().unwrap(),
        post_content: post_row.post_content.clone().unwrap(),
        post_view: post_row.post_view.unwrap(),
        post_time: Some(chrono::NaiveDateTime::from(post_row.post_time.unwrap())),
        user_email: post_row.user_email.clone().unwrap(),
    }
}

pub async fn update_post_details_db(pool: &PgPool, post_id: i32, update_post: UpdatePost) -> Post {
    let current_post_row = sqlx::query!(
        "SELECT *
        FROM posts
        WHERE post_id=$1",
        post_id
    )
    .fetch_one(pool)
    .await
    .unwrap();

    let title: String = if let Some(title) = update_post.post_title {
        title
    } else {
        current_post_row.post_title.unwrap_or_default()
    };
    let content: String = if let Some(content) = update_post.post_content {
        content
    } else {
        current_post_row.post_content.unwrap_or_default()
    };

    let post_row = sqlx::query!(
        "UPDATE posts
        SET post_title=$1, post_content=$2
        WHERE post_id=$3
        RETURNING post_id, post_title, post_content,
        post_view, post_time, user_email",
        title,
        content,
        post_id
    )
    .fetch_one(pool)
    .await
    .unwrap();

    Post {
        post_id: post_row.post_id,
        post_title: post_row.post_title.clone().unwrap(),
        post_content: post_row.post_content.clone().unwrap(),
        post_view: post_row.post_view.unwrap(),
        post_time: Some(chrono::NaiveDateTime::from(post_row.post_time.unwrap())),
        user_email: post_row.user_email.clone().unwrap(),
    }
}

pub async fn delete_post_db(pool: &PgPool, post_id: i32) -> String {
    let post_row = sqlx::query!(
        "DELETE FROM posts
        WHERE post_id=$1",
        post_id
    )
    .execute(pool)
    .await
    .unwrap();

    format!("Deleted {:#?} record", post_row)
}
