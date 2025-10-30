/**
 * Production-safe logging utilities
 */

import { sanitizeForLogging, maskSensitiveData } from "./security";

// Check if we're in production
const isProduction = process.env.NODE_ENV === "production";

/**
 * Safe logger that automatically sanitizes sensitive data
 */
export class SafeLogger {
  private static shouldLog(level: "debug" | "info" | "warn" | "error"): boolean {
    // In production, only log warnings and errors
    if (isProduction) {
      return level === "warn" || level === "error";
    }
    return true;
  }

  static debug(message: string, data?: any): void {
    if (this.shouldLog("debug")) {
      if (data) {
        console.debug(`[DEBUG] ${message}`, sanitizeForLogging(data));
      } else {
        console.debug(`[DEBUG] ${message}`);
      }
    }
  }

  static info(message: string, data?: any): void {
    if (this.shouldLog("info")) {
      if (data) {
        console.info(`[INFO] ${message}`, sanitizeForLogging(data));
      } else {
        console.info(`[INFO] ${message}`);
      }
    }
  }

  static warn(message: string, data?: any): void {
    if (this.shouldLog("warn")) {
      if (data) {
        console.warn(`[WARN] ${message}`, sanitizeForLogging(data));
      } else {
        console.warn(`[WARN] ${message}`);
      }
    }
  }

  static error(message: string, error?: any): void {
    if (this.shouldLog("error")) {
      if (error) {
        // For errors, we still sanitize but show more detail
        const sanitizedError = error instanceof Error 
          ? { message: error.message, stack: error.stack }
          : sanitizeForLogging(error);
        console.error(`[ERROR] ${message}`, sanitizedError);
      } else {
        console.error(`[ERROR] ${message}`);
      }
    }
  }

  /**
   * Log API usage safely
   */
  static apiUsage(provider: string, endpoint: string, status?: number): void {
    this.info(`API Request: ${provider} - ${endpoint}${status ? ` (${status})` : ""}`);
  }

  /**
   * Log authentication events safely
   */
  static auth(message: string, userId?: string): void {
    const maskedUserId = userId ? maskSensitiveData(userId, 4, 4) : "anonymous";
    this.info(`Auth: ${message} - User: ${maskedUserId}`);
  }
}

// Export convenience methods
export const logger = SafeLogger;