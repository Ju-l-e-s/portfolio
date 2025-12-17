"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

type HistoryLine = { cmd: string; output: string };

export function InteractiveTerminal() {
  const t = useTranslations("hero.terminal");
  const COMMANDS = useMemo(
    () => ({
      help: t("help"),
      whoami: "Jules Laconfourque - DevOps & Backend Developer. Passionate about automation.",
      pwd: "/home/visitor",
      ls: "skills.json  contact.md  projects.txt  stack.txt",
      "cat skills.json": JSON.stringify(
        { backend: ["Node", "Go"], cloud: ["AWS", "K8s"], ci: ["GitHub Actions"] },
        null,
        2,
      ),
      "cat contact.md":
        "Email: jules@example.com\nLinkedIn: https://linkedin.com/in/jules",
      "cat projects.txt": "Check out the projects section below!",
      "cat stack.txt": `${t("line1")}\n${t("line2")}\n${t("line3")}`,
    }),
    [t]
  );
  const [input, setInput] = useState("");
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<HistoryLine[]>([
    {
      cmd: "",
      output: `${t("line1")}\n${t("line2")}\n${t("line3")}`,
    },
    { cmd: "help", output: t("help") },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputContainerRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => inputRef.current?.focus();

  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault(); // Empêche scroll ou soumission

    const command = input.trim();
    let output = "";

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (COMMANDS[command as keyof typeof COMMANDS]) {
      output = COMMANDS[command as keyof typeof COMMANDS];
    } else if (command.startsWith("cat ")) {
      const file = command.replace("cat ", "").trim();
      const key = `cat ${file}`;
      output =
        COMMANDS[key as keyof typeof COMMANDS] ||
        `cat: ${file}: No such file or directory`;
    } else if (command === "") {
      output = "";
    }
    else {
      output = `zsh: command not found: ${command}`;
    }

    setHistory((prev) => [...prev, { cmd: command, output }]);
    setInput("");
  };

  return (
    <div
      className="mx-auto w-full max-w-2xl cursor-text overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] text-sm shadow-2xl"
      style={{
        fontFamily: "Courier, 'Courier New', monospace",
      }}
      onClick={handleFocus}
      onKeyDownCapture={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
      tabIndex={0}
    >
      {isClosed ? (
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3 text-xs text-white/60">
          <span>Terminal fermé</span>
          <button
            onClick={() => setIsClosed(false)}
            className="rounded-md border border-white/20 px-3 py-1 text-white transition hover:border-white/40 hover:text-white"
          >
            Réouvrir
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3 text-xs text-white/50">
            <button
              aria-label="Fermer"
              className="h-3 w-3 rounded-full bg-[#ff5f56] ring-2 ring-transparent transition hover:ring-[#ff5f56]/40"
              onClick={() => setIsClosed(true)}
            />
            <button
              aria-label="Minimiser"
              className="h-3 w-3 rounded-full bg-[#ffbd2e] ring-2 ring-transparent transition hover:ring-[#ffbd2e]/40"
              onClick={() => setIsMinimized((v) => !v)}
            />
            <button
              aria-label="Agrandir"
              className="h-3 w-3 rounded-full bg-[#27c93f] ring-2 ring-transparent transition hover:ring-[#27c93f]/40"
              onClick={() => setIsMaximized((v) => !v)}
            />
            <div className="ml-2 font-sans">jules — -zsh</div>
          </div>

          {!isMinimized && (
            <div
              ref={outputContainerRef}
              className={`space-y-2 overflow-y-auto bg-[#11151b] p-6 text-white/90 no-scrollbar ${
                isMaximized ? "h-[480px]" : "h-[320px]"
              }`}
            >
              {history.map((line, i) => (
                <div key={`${line.cmd}-${i}`} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span style={{ color: "#00FF41" }}>➜</span>
                    <span style={{ color: "#00FF41" }}>~</span>
                    <span style={{ color: "#00FF41" }}>{line.cmd}</span>
                  </div>
                  {line.output && (
                    <div
                      className="whitespace-pre-wrap pl-6 leading-relaxed"
                      style={{ color: "#00FF41" }}
                    >
                      {line.output}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-2">
                <span style={{ color: "#00FF41" }}>➜</span>
                <span style={{ color: "#00FF41" }}>~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 border-none bg-transparent p-0 text-white outline-none ring-0 focus:ring-0"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                  style={{ color: "#00FF41" }}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
