class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

/**
 * Informational response (100 - 199)
 * Successful response (200 - 299)
 * Redirection message (300 - 399)
 * Client error response (400 - 499)
 * Server error responses (500 - 599)
 */
