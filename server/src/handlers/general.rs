use actix_web::HttpResponse;

pub async fn health_check_handler() -> HttpResponse {
    HttpResponse::Ok().json("Hello, zimmer")
}

#[cfg(test)]
mod tests {
    use super::*;
    use actix_web::http::StatusCode;
    #[actix_web::test]
    async fn health_check_success() {
        let resp = health_check_handler().await;
        assert_eq!(resp.status(), StatusCode::OK);
    }
}
