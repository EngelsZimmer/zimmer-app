use actix_web::{App, HttpServer};
use std::io;

mod routes;
mod handlers;
mod models;

use routes::general_route;

#[actix_web::main]
async fn main() -> io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .configure(general_route)
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
