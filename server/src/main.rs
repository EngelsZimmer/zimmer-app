use actix_web::{web, App, HttpServer};
use dotenv::dotenv;
use sqlx::postgres::PgPool;
use std::io;
use std::env;

mod routes;
mod handlers;
mod models;
mod state;
mod dbaccess;

use routes::*;
use state::AppState;

#[actix_web::main]
async fn main() -> io::Result<()> {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set in .env file");
    let db_pool = PgPool::connect(&database_url).await.unwrap();
    let shared_data = web::Data::new(AppState{
        health_check_response: "Zimmer is running on port 8000".to_string(),
        db: db_pool,
    });

    HttpServer::new(move || {
        App::new()
            .app_data(shared_data.clone())
            .configure(general_route)
            .configure(post_route)
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
