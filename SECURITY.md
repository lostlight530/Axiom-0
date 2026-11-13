# Security Policy


## Supported code

Security fixes target the current `main` branch. Historical research and generated artifacts are preserved as records and may not receive retroactive correction.

### 私密漏洞通报与声明强度 / Private disclosure and claim scope

漏洞报告应包含 Git revision、明确边界及可复现的实际行为，不在公开 Issue／PR 发布密钥、令牌或未修复漏洞细节；仓库范围保护脚本、模式检查与固定输入测试不能自动证明整个 Agent／Runtime 系统安全

Reports should identify Git revision, the relevant boundary and reproducible behavior without exposing secrets or unpatched exploits publicly. Scope guards, pattern checks and fixed-fixture tests do not certify whole-agent or runtime security

## Private reporting

Do not open a public issue for a suspected vulnerability. Use GitHub’s private vulnerability reporting when enabled; otherwise contact the repository owner through the private route listed on their GitHub profile. Include the affected commit and path, prerequisites, minimal reproduction, impact, and suggested mitigation. Remove tokens and unnecessary personal data.

## Response expectations

Maintainers should acknowledge a report within 7 days and provide a triage update within 14 days when capacity permits. These are service targets, not guarantees. Coordinated disclosure timing is agreed case by case.

## Security boundaries

Axiom is a reference implementation, not a sandbox or authorization system. Callers must enforce identity, authorization, quotas, network and filesystem isolation, and secret handling. Logs expose event types and timestamps only; never log prompts, credentials, raw tool output, or private payloads by default.

GitHub workflows use least-privilege job permissions, immutable action SHAs, and no pull-request code with write credentials. Dependency updates require passing tests and human review.