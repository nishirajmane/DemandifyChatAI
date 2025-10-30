/**
 * Security audit utilities to check for potential vulnerabilities
 */

/**
 * Audit the application for potential security issues
 */
export function performSecurityAudit(): {
  issues: string[];
  warnings: string[];
  recommendations: string[];
} {
  const issues: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Check environment variables
  const hasApiKeys = !!(
    process.env.OPENAI_API_KEY ||
    process.env.ANTHROPIC_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.DEEPSEEK_API_KEY
  );

  if (hasApiKeys && process.env.NODE_ENV === "production") {
    recommendations.push(
      "Consider using a secure key management service in production"
    );
  }

  // Check for access code
  if (!process.env.CODE && hasApiKeys) {
    warnings.push(
      "No access code set - anyone can use your API keys"
    );
  }

  // Check for sensitive logging
  if (process.env.NODE_ENV === "production" && !process.env.DISABLE_SENSITIVE_LOGGING) {
    warnings.push(
      "Sensitive logging is not disabled in production - consider setting DISABLE_SENSITIVE_LOGGING=true"
    );
  }

  // Check for default passwords
  if (process.env.CODE === "your-password") {
    issues.push(
      "Default password detected - change the CODE environment variable"
    );
  }

  // Check for HTTPS in production
  if (process.env.NODE_ENV === "production" && process.env.BASE_URL?.startsWith("http://")) {
    warnings.push(
      "HTTP detected in production - consider using HTTPS for security"
    );
  }

  return {
    issues,
    warnings,
    recommendations,
  };
}

/**
 * Log security audit results
 */
export function logSecurityAudit(): void {
  const audit = performSecurityAudit();

  if (audit.issues.length > 0) {
    console.error("🚨 SECURITY ISSUES DETECTED:");
    audit.issues.forEach((issue, index) => {
      console.error(`  ${index + 1}. ${issue}`);
    });
  }

  if (audit.warnings.length > 0) {
    console.warn("⚠️  SECURITY WARNINGS:");
    audit.warnings.forEach((warning, index) => {
      console.warn(`  ${index + 1}. ${warning}`);
    });
  }

  if (audit.recommendations.length > 0) {
    console.info("💡 SECURITY RECOMMENDATIONS:");
    audit.recommendations.forEach((rec, index) => {
      console.info(`  ${index + 1}. ${rec}`);
    });
  }

  if (audit.issues.length === 0 && audit.warnings.length === 0) {
    console.info("✅ No critical security issues detected");
  }
}