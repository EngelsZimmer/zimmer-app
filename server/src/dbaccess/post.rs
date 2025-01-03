use sqlx::postgres::PgPool;
use crate::models::post::*;
use crate::errors::ZimmerError;

pub async fn new_post_db(pool: &PgPool, new_post: NewPost) -> Result<Post, ZimmerError> {
    let email = String::from("user@example.com");
    let post_row = sqlx::query!(
        "INSERT INTO posts (post_title, post_content, user_email)
        VALUES ($1, $2, $3)
        RETURNING post_id, post_title, post_content, post_view, post_time, user_email",
        new_post.post_title,
        new_post.post_content,
        email,
    )
    .fetch_one(pool)
    .await?;

    Ok(Post {
        post_id: post_row.post_id,
        post_title: post_row.post_title.clone(),
        post_content: post_row.post_content.clone(),
        post_view: post_row.post_view,
        post_time: Some(chrono::NaiveDateTime::from(post_row.post_time.unwrap())),
        user_email: post_row.user_email.clone(),
    })
}

pub async fn get_post_details_db(pool: &PgPool, post_id: i32) -> Result<Post, ZimmerError> {
    let post_row = sqlx::query!(
        "SELECT *
        FROM posts
        WHERE post_id=$1",
        post_id
    )
    .fetch_one(pool)
    .await?;

    Ok(Post {
        post_id: post_row.post_id,
        post_title: post_row.post_title.clone(),
        post_content: post_row.post_content.clone(),
        post_view: post_row.post_view,
        post_time: Some(chrono::NaiveDateTime::from(post_row.post_time.unwrap())),
        user_email: post_row.user_email.clone(),
    })
}

pub async fn update_post_details_db(pool: &PgPool, post_id: i32, update_post: UpdatePost) -> Result<Post, ZimmerError> {
    let current_post_row = sqlx::query!(
        "SELECT *
        FROM posts
        WHERE post_id=$1",
        post_id
    )
    .fetch_one(pool)
    .await
    .map_err(|_err| ZimmerError::NotFound("Post id not found".into()))?;

    let title: String = if let Some(title) = update_post.post_title {
        title
    } else {
        current_post_row.post_title
    };
    let content: String = if let Some(content) = update_post.post_content {
        content
    } else {
        current_post_row.post_content
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
    .await?;

    Ok(Post {
        post_id: post_row.post_id,
        post_title: post_row.post_title.clone(),
        post_content: post_row.post_content.clone(),
        post_view: post_row.post_view,
        post_time: Some(chrono::NaiveDateTime::from(post_row.post_time.unwrap())),
        user_email: post_row.user_email.clone(),
    })
}

pub async fn delete_post_db(pool: &PgPool, post_id: i32) -> Result<String, ZimmerError> {
    let post_row = sqlx::query!(
        "DELETE FROM posts
        WHERE post_id=$1",
        post_id
    )
    .execute(pool)
    .await?;

    Ok(format!("Deleted {:#?} record", post_row))
}
