use actix_web::{web, HttpResponse};
use crate::state::AppState;

pub async fn health_check_handler(app_state: web::Data<AppState>) -> HttpResponse {
    let health_check_response = &app_state.health_check_response.clone();
    HttpResponse::Ok().json(&health_check_response)
}

#[cfg(test)]
mod tests {
    use super::*;
    use actix_web::http::StatusCode;
    use dotenv::dotenv;
    use sqlx::postgres::PgPool;
    use std::env;

    #[actix_web::test]
    async fn health_check_success() {
        dotenv().ok();
        let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file");
        let db_pool = PgPool::connect(&database_url).await.unwrap();
        let app_state = web::Data::new(AppState {
            health_check_response: "".to_string(),
            db: db_pool,
        });
        let resp = health_check_handler(app_state).await;
        assert_eq!(resp.status(), StatusCode::OK);
    }
}
