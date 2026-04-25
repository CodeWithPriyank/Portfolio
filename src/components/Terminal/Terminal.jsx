import { useEffect, useRef, useState, useCallback } from 'react';
import { VscTerminal } from 'react-icons/vsc';
import { VscChromeClose } from 'react-icons/vsc';
import './Terminal.css';

const PROMPT = 'priyank@portfolio:~$';

const HELP_TEXT = `Available commands:
  whoami       — who is Priyank?
  skills       — tech stack
  experience   — work history
  projects     — featured projects
  contact      — get in touch
  open <n>     — open project by number
  clear        — clear terminal
  exit         — close terminal`;

const PROJECT_LINKS = {
  1: { name: 'PJContext', url: 'https://github.com/CodeWithPriyank' },
  2: { name: 'Sip Detection ML', url: 'https://github.com/CodeWithPriyank' },
  3: { name: 'Clipboard History', url: 'https://github.com/CodeWithPriyank/Extension/tree/main/clipboard_snippet' },
};

const processCommand = (input) => {
  const cmd = input.trim().toLowerCase();

  if (cmd === 'help') return { text: HELP_TEXT, type: 'info' };

  if (cmd === 'whoami')
    return {
      text: `Priyank Goswami — Python Developer @ Yudiz Solutions, Ahmedabad
Building ML models, REST APIs, and backend systems.
Passionate about Computer Vision, AI Agents & clean code.`,
      type: 'output',
    };

  if (cmd === 'skills')
    return {
      text: `Languages  →  Python · JavaScript
Frameworks →  Django · FastAPI · Flask · React
ML / AI    →  Scikit-learn · OpenCV · LLMs · RAG · AI Agents
Infra      →  AWS · Docker · Redis · RabbitMQ · Celery
Databases  →  MySQL · MongoDB · VectorDB`,
      type: 'output',
    };

  if (cmd === 'experience')
    return {
      text: `Yudiz Solutions  (Jan 2025 – Present)
├─ Jr. Python Developer   Jul 2025 – Present
└─ Trainee Python Dev     Jan 2025 – Jun 2025`,
      type: 'output',
    };

  if (cmd === 'projects')
    return {
      text: `[1] PJContext           — AI coding context capture tool
[2] Sip Detection ML   — Bottle-sensor ML classification model
[3] Clipboard History  — Developer Chrome extension

Type 'open <number>' to visit a project.`,
      type: 'output',
    };

  if (cmd === 'contact')
    return {
      text: `Email    →  priyankgoswmi01@gmail.com
GitHub   →  github.com/CodeWithPriyank
LinkedIn →  linkedin.com/in/priyank-goswami-711495247`,
      type: 'output',
    };

  if (cmd === 'clear') return { text: '', type: 'clear' };

  if (cmd === 'exit') return { text: '', type: 'exit' };

  const openMatch = cmd.match(/^open\s+(\d+)$/);
  if (openMatch) {
    const n = parseInt(openMatch[1]);
    const project = PROJECT_LINKS[n];
    if (project) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
      return { text: `Opening ${project.name}...`, type: 'output' };
    }
    return { text: `No project #${n}. Type 'projects' to see the list.`, type: 'error' };
  }

  if (cmd === '') return null;

  return { text: `command not found: ${input.trim()}. Type 'help' for available commands.`, type: 'error' };
};

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'info', text: "Welcome to Priyank's portfolio terminal.\nType 'help' to see available commands." },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Keyboard shortcut: backtick to toggle
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const tag = document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50);
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const raw = input;
    const result = processCommand(raw);

    if (result?.type === 'exit') { close(); setInput(''); return; }

    setHistory(prev => {
      const withCmd = [...prev, { type: 'input', text: raw }];
      if (!result) return withCmd;
      if (result.type === 'clear') return [];
      return [...withCmd, result];
    });

    if (raw.trim()) {
      setCmdHistory(prev => [raw, ...prev]);
    }
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistoryIndex(prev => {
        const next = Math.min(prev + 1, cmdHistory.length - 1);
        setInput(cmdHistory[next] ?? '');
        return next;
      });
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistoryIndex(prev => {
        const next = Math.max(prev - 1, -1);
        setInput(next === -1 ? '' : cmdHistory[next] ?? '');
        return next;
      });
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <button className="terminal-trigger" onClick={open} aria-label="Open terminal" title="Open terminal (`)">
        <VscTerminal />
      </button>

      {/* Terminal panel */}
      {isOpen && (
        <div className="terminal-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="terminal-window">
            {/* Title bar */}
            <div className="terminal-titlebar">
              <div className="terminal-dots">
                <span className="dot dot--red" onClick={close} />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="terminal-title">priyank@portfolio: ~</span>
              <button className="terminal-close" onClick={close} aria-label="Close"><VscChromeClose /></button>
            </div>

            {/* Output */}
            <div className="terminal-body">
              {history.map((entry, i) => (
                <div key={i} className={`terminal-line terminal-line--${entry.type}`}>
                  {entry.type === 'input' && (
                    <span className="terminal-prompt">{PROMPT} </span>
                  )}
                  <pre>{entry.text}</pre>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form className="terminal-input-row" onSubmit={handleSubmit}>
              <span className="terminal-prompt">{PROMPT}</span>
              <input
                ref={inputRef}
                className="terminal-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Terminal;
