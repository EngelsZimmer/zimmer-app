use crate::handlers::{general::*, post::*};
use actix_web::web;

pub fn general_route(cfg: &mut web::ServiceConfig) {
    cfg.route("/health_check", web::get().to(health_check_handler));
}

pub fn post_route(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/post")
            .route("/", web::post().to(new_post))
            .route("/{post_id}", web::get().to(get_post_details))
            .route("/{post_id}", web::put().to(update_post_details))
            .route("/{post_id}", web::delete().to(delete_post)),
    );
}
