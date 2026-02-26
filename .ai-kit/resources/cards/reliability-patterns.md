# Resource Card: Reliability Patterns

> **Domain:** Reliability
> **Authority:** PRIMARY

---

## What It Is
A cross-language error handling and resilience reference. Covers custom exception hierarchies, Result/Either types, retry with exponential backoff, circuit breakers, error aggregation, graceful degradation, and user-facing error messaging patterns.

## When to Use
- Implementing error handling for a new feature or API
- Hardening an existing system against failures (network, database, third-party APIs)
- Debugging production failures and improving resilience
- Adding retry logic, fallbacks, or circuit breakers to critical paths

## Outputs
- **Error class hierarchy** — Base error → domain errors → user-facing errors with codes
- **Retry configuration** — Backoff strategy, max attempts, jitter, retryable vs non-retryable errors
- **Circuit breaker spec** — Failure threshold, reset timeout, half-open probe strategy
- **Error response contract** — Standard error shape: `{ code, message, details, retryable }`

## Activation Phrase
```
Apply Reliability Patterns for this feature.
```

## Conflicts / Overlaps
- **No domain conflicts** — Reliability is a standalone concern that complements all other domains.
- **Pairs well with** Debugging-Protocol as SUPPORT when fixing issues before hardening.

## Extracted Rules

### 1. Errors Are Domain Objects
Define a base error class with `code`, `message`, `statusCode`, and `retryable` properties. Every module extends this base with domain-specific errors. No raw `throw new Error("string")`.

### 2. Fail Fast, Recover Gracefully
Validate inputs at boundaries (API entry, function params, config load). If validation fails, reject immediately with a clear error. If a dependency fails, degrade gracefully.

### 3. Retry Only What Is Retryable
Network timeouts and 503s are retryable. 400s and 404s are not. Tag every error as `retryable: true/false`. Retry with exponential backoff: `delay * 2^attempt + jitter`.

### 4. Circuit Breakers Prevent Cascades
If a dependency fails N times in a window, stop calling it (OPEN state). After a cooldown, send one probe request (HALF-OPEN). If it succeeds, resume (CLOSED). Log state transitions.

### 5. User-Facing Errors Are Friendly
Never expose stack traces, internal codes, or raw database errors to users. Map every internal error to a user-facing message: "Something went wrong. Please try again." with an action button.

### 6. Aggregate, Don't Swallow
When processing a batch (file upload, multi-record import), collect all errors and report them together. Never stop at the first error and never silently skip failures.

### 7. Log With Context
Every error log must include: timestamp, error code, message, stack trace, request ID, user ID (if available), and the operation that failed. Structured JSON logs, not console.log strings.
