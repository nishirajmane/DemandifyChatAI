/**
 * Security utilities for safe logging and data handling
 */

/**
 * Safely masks sensitive data for logging
 * @param value - The sensitive value to mask
 * @param showStart - Number of characters to show at the start (default: 4)
 * @param showEnd - Number of characters to show at the end (default: 4)
 * @returns Masked string
 */
export function maskSensitiveData(
    value: string | undefined | null,
    showStart: number = 4,
    showEnd: number = 4
): string {
    if (!value || value.length === 0) {
        return "[EMPTY]";
    }

    if (value.length <= showStart + showEnd) {
        return "*".repeat(value.length);
    }

    const start = value.substring(0, showStart);
    const end = value.substring(value.length - showEnd);
    const middle = "*".repeat(Math.max(0, value.length - showStart - showEnd));

    return `${start}${middle}${end}`;
}

/**
 * Safely logs API key usage without exposing the actual key
 * @param keyType - Type of key being used (e.g., "OpenAI", "Anthropic")
 * @param keyIndex - Index of the key being used
 * @param totalKeys - Total number of keys available
 * @param key - The actual key (will be masked)
 */
export function logApiKeyUsage(
    keyType: string,
    keyIndex: number,
    totalKeys: number,
    key?: string
): void {
    const maskedKey = key ? maskSensitiveData(key, 8, 4) : "[NOT_PROVIDED]";
    console.log(
        `[Security] Using ${keyType} API key ${keyIndex + 1}/${totalKeys} - ${maskedKey}`
    );
}

/**
 * Removes sensitive data from objects for safe logging
 * @param obj - Object that might contain sensitive data
 * @returns Object with sensitive fields masked
 */
export function sanitizeForLogging(obj: any): any {
    if (!obj || typeof obj !== "object") {
        return obj;
    }

    const sensitiveFields = [
        "apiKey",
        "api_key",
        "token",
        "password",
        "secret",
        "authorization",
        "bearer",
        "key",
    ];

    const sanitized = { ...obj };

    for (const field of sensitiveFields) {
        if (sanitized[field]) {
            sanitized[field] = maskSensitiveData(sanitized[field]);
        }
    }

    return sanitized;
}

/**
 * Safe console.log that automatically masks sensitive data
 * @param message - Log message
 * @param data - Optional data to log (will be sanitized)
 */
export function safeLog(message: string, data?: any): void {
    if (data) {
        console.log(message, sanitizeForLogging(data));
    } else {
        console.log(message);
    }
}