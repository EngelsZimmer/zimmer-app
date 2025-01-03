use actix_web::{web, HttpResponse};
use crate::state::AppState;
use crate::models::post::*;
use crate::dbaccess::post::*;
use crate::errors::ZimmerError;

pub async fn new_post(
    app_state: web::Data<AppState>,
    new_post: web::Json<NewPost>,
) -> Result<HttpResponse, ZimmerError> {
    new_post_db(&app_state.db, new_post.into())
        .await
        .map(|post| HttpResponse::Ok().json(post))
}

pub async fn get_post_details(
    app_state: web::Data<AppState>,
    params: web::Path<i32>
) -> Result<HttpResponse, ZimmerError> {
    let post_id = params.into_inner();
    get_post_details_db(&app_state.db, post_id)
        .await
        .map(|post| HttpResponse::Ok().json(post))
}

pub async fn update_post_details(
    app_state: web::Data<AppState>,
    params: web::Path<i32>,
    update_post: web::Json<UpdatePost>,
) -> Result<HttpResponse, ZimmerError> {
    let post_id = params.into_inner();
    update_post_details_db(&app_state.db, post_id, update_post.into())
        .await
        .map(|post| HttpResponse::Ok().json(post))
}

pub async fn delete_post(
    app_state: web::Data<AppState>,
    params: web::Path<i32>,
) -> Result<HttpResponse, ZimmerError> {
    let post_id = params.into_inner();
    delete_post_db(&app_state.db, post_id)
        .await
        .map(|resp| HttpResponse::Ok().json(resp))
}

#[cfg(test)]
mod test {
    use super::*;
    use actix_web::{http::StatusCode, web};
    use dotenv::dotenv;
    use sqlx::postgres::PgPool;
    use std::env;
    #[actix_web::test]
    async fn new_post_success() {
        dotenv().ok();
        let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file.");
        let db_pool = PgPool::connect(&database_url).await.unwrap();

        let tx = db_pool.begin().await.unwrap();

        let app_state = web::Data::new(AppState {
            health_check_response: "".to_string(),
            db: db_pool,
        });
        let post = web::Json(NewPost {
            post_title: "First Post".to_string(),
            post_content: "This is the content.".to_string(),
        });
        let resp = new_post(app_state, post).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        tx.rollback().await.unwrap();
    }

    #[actix_web::test]
    async fn get_post_details_success() {
        dotenv().ok();
        let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file.");
        let db_pool = PgPool::connect(&database_url).await.unwrap();
        let app_state = web::Data::new(AppState {
            health_check_response: "".to_string(),
            db: db_pool,
        });
        let params: web::Path<i32> = web::Path::from(2);
        let resp = get_post_details(app_state, params).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
    }

    #[actix_web::test]
    async fn update_post_details_success() {
        dotenv().ok();
        let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file.");
        let db_pool = PgPool::connect(&database_url).await.unwrap();

        let tx = db_pool.begin().await.unwrap();

        let app_state = web::Data::new(AppState {
            health_check_response: "".to_string(),
            db: db_pool,
        });
        let params: web::Path<i32> = web::Path::from(2);
        let post = web::Json(UpdatePost {
            post_title: Some("Updated post".to_string()),
            post_content: Some("This is the updated post.".to_string()),
        });
        let resp = update_post_details(app_state, params, post).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        tx.rollback().await.unwrap();
    }

    #[actix_web::test]
    async fn delete_post_success() {
        dotenv().ok();
        let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file.");
        let db_pool = PgPool::connect(&database_url).await.unwrap();

        let tx = db_pool.begin().await.unwrap();

        let app_state = web::Data::new(AppState {
            health_check_response: "".to_string(),
            db: db_pool,
        });
        let params: web::Path<i32> = web::Path::from(1);
        let resp = delete_post(app_state, params).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        tx.rollback().await.unwrap();
    }
}
