use actix_web::web;
use chrono::NaiveDateTime;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize)]
pub struct Post {
    pub post_id: i32,
    pub title: String,
    pub content: String,
    pub created_at: NaiveDateTime,
    pub user_email: String,
    pub views: i32,
}

#[derive(Debug, Clone, Deserialize)]
pub struct CreatePost {
    pub title: String,
    pub content: String,
}

impl From<web::Json<CreatePost>> for CreatePost {
    fn from(new_post: web::Json<CreatePost>) -> CreatePost {
        CreatePost {
            title: new_post.title.clone(),
            content: new_post.content.clone(),
        }
    }
}

#[derive(Debug, Clone, Deserialize)]
pub struct UpdatePost {
    pub title: Option<String>,
    pub content: Option<String>,
}

impl From<web::Json<UpdatePost>> for UpdatePost {
    fn from(update_post: web::Json<UpdatePost>) -> UpdatePost {
        UpdatePost {
            title: update_post.title.clone(),
            content: update_post.content.clone(),
        }
    }
}
