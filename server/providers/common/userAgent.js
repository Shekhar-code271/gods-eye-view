/** Identify each provider while keeping the project contact URL consistent. */
export function providerUserAgent(name) {
  return `gods-eye-view-${name}-proxy/1.0 (+https://github.com/Shekhar/gods-eye-view)`;
}
