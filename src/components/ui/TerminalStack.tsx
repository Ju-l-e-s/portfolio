"use client";

const terminalCommands = [
  {
    command: "pwd",
    output: ["/home/jules/portfolio"],
  },
  {
    command: "ls -1",
    output: ["api/", "infra/", "packages/", "package.json", "README.md"],
  },
  {
    command: "git status -sb",
    output: ["## main", "M api/server.ts", "?? infra/terraform.tfvars.example"],
  },
  {
    command: "cat stack.txt",
    output: [
      "CLOUD NATIVE : AWS / Terraform / Kubernetes",
      "DELIVERY     : CI/CD · Observability · SRE",
      "BACKEND      : Node.js · Go · Services distribués",
    ],
  },
  {
    command: "npm run test:ci",
    output: ["✓ lint", "✓ unit: 142 tests passed", "✓ e2e: smoke (staging)"],
    status: "ok",
  },
  {
    command: "curl -I https://api.dev/health",
    output: ["HTTP/1.1 200 OK", "x-trace-id: 4f8c1a9e", "server: fly.io edge"],
  },
  {
    command: "tail -n 2 deploy.log",
    output: ["[deploy] image pushed : gcr.io/prod/api:2024.06.01", "[deploy] status      : ✅ live"],
    status: "ok",
  },
];

export function TerminalStack() {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D10] shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-muted">
        <span className="text-accent-a">{">"} uptime</span>
        <span>system scan</span>
      </div>

      <div className="space-y-4 p-6 font-mono text-sm text-text">
        {terminalCommands.map((item) => (
          <div key={item.command} className="space-y-2">
            <div className="flex items-center gap-2 text-muted">
              <span className="text-accent-a">➜</span>
              <span className="text-muted">jules@terminal</span>
              <span className="text-muted">~</span>
              <span className="text-text">{item.command}</span>
            </div>

            <div className="pl-6 text-[13px] leading-relaxed text-muted">
              {item.output.map((line, idx) => (
                <div
                  key={idx}
                  className={item.status === "ok" ? "text-green-300" : "text-muted"}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
