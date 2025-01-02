use actix_web::{web, HttpResponse};
use crate::state::AppState;
use crate::models::post::*;
use crate::dbaccess::post::*;

pub async fn new_post(
    app_state: web::Data<AppState>,
    new_post: web::Json<CreatePost>,
) -> HttpResponse {
    let post = new_post_db(&app_state.db, new_post.into()).await;
    HttpResponse::Ok().json(post)
}

pub async fn get_post_details(
    app_state: web::Data<AppState>,
    params: web::Path<i32>
) -> HttpResponse {
    let post_id = params.into_inner();
    let post = get_post_details_db(&app_state.db, post_id).await;
    HttpResponse::Ok().json(post)
}

pub async fn update_post_details(
    app_state: web::Data<AppState>,
    params: web::Path<i32>,
    update_post: web::Json<UpdatePost>,
) -> HttpResponse {
    let post_id = params.into_inner();
    let updated_post = update_post_details_db(&app_state.db, post_id, update_post.into()).await;
    HttpResponse::Ok().json(updated_post)
}

pub async fn delete_post(
    app_state: web::Data<AppState>,
    params: web::Path<i32>,
) -> HttpResponse {
    let post_id = params.into_inner();
    let resp = delete_post_db(&app_state.db, post_id).await;
    HttpResponse::Ok().json(resp)
}
