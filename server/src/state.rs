use sqlx::postgres::PgPool;

pub struct AppState {
    pub health_check_response: String,
    pub db: PgPool,
}
