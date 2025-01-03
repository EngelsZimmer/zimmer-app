use actix_web::{http::StatusCode, HttpResponse, Result};
use serde::Serialize;
use std::fmt;

#[derive(Debug, Serialize)]
pub enum ZimmerError {
    DBError(String),
    WebError(String),
    NotFound(String),
}

impl fmt::Display for ZimmerError {
    fn fmt(&self, f: &mut fmt::Formatter) -> Result<(), fmt::Error> {
        write!(f, "{}", self)
    }
}

impl From<sqlx::error::Error> for ZimmerError {
    fn from(err: sqlx::error::Error) -> ZimmerError {
        ZimmerError::DBError(err.to_string())
    }
}

impl From<actix_web::error::Error> for ZimmerError {
    fn from(err: actix_web::error::Error) -> ZimmerError {
        ZimmerError::WebError(err.to_string())
    }
}

#[derive(Debug, Serialize)]
pub struct ZimmerErrorResponse {
    error_message: String,
}

impl ZimmerError {
    fn error_response(&self) -> String {
        match self {
            ZimmerError::DBError(msg) => {
                println!("Database error occured: {:?}", msg);
                "Database error".into()
            }
            ZimmerError::WebError(msg) => {
                println!("Server error occured: {:?}", msg);
                "Internal server error".into()
            }
            ZimmerError::NotFound(msg) => {
                println!("Not Found error occured: {:?}", msg);
                msg.into()
            }
        }
    }
}

impl actix_web::error::ResponseError for ZimmerError {
    fn status_code(&self) -> StatusCode {
        match self {
            ZimmerError::DBError(_msg) | ZimmerError::WebError(_msg) => {
                StatusCode::INTERNAL_SERVER_ERROR
            }
            ZimmerError::NotFound(_msg) => StatusCode::NOT_FOUND,
        }
    }
    fn error_response(&self) -> HttpResponse {
        HttpResponse::build(self.status_code()).json(ZimmerErrorResponse {
            error_message: self.error_response(),
        })
    }
}
