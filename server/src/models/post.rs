use actix_web::web;
use chrono::NaiveDateTime;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize)]
pub struct Post {
    pub post_id: i32,
    pub post_title: String,
    pub post_content: String,
    pub post_view: i32,
    pub post_time: Option<NaiveDateTime>,
    pub user_email: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct CreatePost {
    pub post_title: String,
    pub post_content: String,
}

impl From<web::Json<CreatePost>> for CreatePost {
    fn from(new_post: web::Json<CreatePost>) -> CreatePost {
        CreatePost {
            post_title: new_post.post_title.clone(),
            post_content: new_post.post_content.clone(),
        }
    }
}

#[derive(Debug, Clone, Deserialize)]
pub struct UpdatePost {
    pub post_title: Option<String>,
    pub post_content: Option<String>,
}

impl From<web::Json<UpdatePost>> for UpdatePost {
    fn from(update_post: web::Json<UpdatePost>) -> UpdatePost {
        UpdatePost {
            post_title: update_post.post_title.clone(),
            post_content: update_post.post_content.clone(),
        }
    }
}
