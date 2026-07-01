# Security Policy

## The threat model

Skills are markdown instructions that agents follow with real tool access. Importing a community skill is importing *executable intent* — which makes this repository a prompt-injection surface. A malicious "skill" could instruct an agent to exfiltrate credentials, install a backdoor, or quietly override its other instructions.

## The gate

Every PR runs `scripts/safety-lint.mjs` over the changed skills. The deny-pattern list lives in [`scripts/deny-patterns.json`](./scripts/deny-patterns.json) — versioned, in-repo, PRs welcome to extend it. It currently covers:

- Downloads piped to shells (`curl … | sh`, `wget … | bash`)
- Base64-decode-then-execute chains
- Writes to `~/.ssh`, shell rc files, or crontabs
- Raw-IP or non-HTTPS URLs
- Credential-file reads (`.env`, keychains, `~/.aws`, ssh keys)
- Instruction-override phrases ("ignore previous instructions" and kin)

**A hit does not auto-reject the PR.** Legitimate skills sometimes mention these patterns to warn against them. A hit blocks merge until a maintainer reviews the context and applies the `security-reviewed` label. Attempted obfuscation around the patterns is treated as malicious and closed.

## What the gate does NOT do

- It does not sandbox or execute anything — it's a static lint.
- It does not review your *own* forging. SkDD has no review gate on creating skills in your own colony; the gate here exists because the Commons crosses a trust boundary: strangers shipping instructions to strangers' agents.
- It is not a guarantee. Read what you import. `skdd add` validates and records provenance, but the instructions still run with your agent's permissions.

## Reporting a vulnerability

- **A malicious or dangerous skill in this repo:** open a [private security advisory](https://github.com/zakelfassi/skdd-commons/security/advisories/new). Do not open a public issue first.
- **A gap in the deny-pattern list:** a public PR against `scripts/deny-patterns.json` is fine — the list is deliberately public.
- **Vulnerabilities in the `skdd` CLI itself:** report at the [main repo](https://github.com/zakelfassi/skills-driven-development/security).
