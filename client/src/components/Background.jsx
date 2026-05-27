import { useEffect, useRef } from "react";

function Background() {
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const codeSnippets = [
    "componentDidMount",
    "componentDidUpdate",
    "useLayoutEffect",
    "Object.keys()",
    "Object.values()",
    "Array.from()",
    "JSON.parse()",
    "JSON.stringify()",
    "console.log()",
    "typeof",
    "instanceof",
    "prototype",
    "this",
    "super",
    "extends",
    "interface",
    "mongoose.connect()",
    "app.listen()",
    "app.use()",
    "router.get()",
    "res.status()",
    "req.params",
    "req.query",
    "bcrypt",
    "dotenv",
    "cors()",
    "helmet()",
    "morgan()",
    "nodemon",
    "webpack",
    "vite",
    "useState()",
    "useEffect()",
    "props.children",
    "key={}",
    "ref={}",
    "flex-col",
    "grid-cols",
    "rounded-lg",
    "shadow-md",
    "z-index",
    "@media",
    "transform",
    "transition",
    "animation",
    "keyframes",
    "const",
    "=>",
    "async",
    "await",
    "useState",
    "useEffect",
    "{}",
    "[]",
    "npm",
    "git",
    "API",
    "POST",
    "GET",
    "req",
    "res",
    "mongoose",
    "express",
    ".map()",
    ".then()",
    "import",
    "export",
    "return",
    "null",
    "undefined",
    "true",
    "false",
    "&&",
    "||",
    "http://",
    "localhost",
    "Schema",
    "model",
    "fetch",
    "axios",
    "function",
    "try",
    "catch",
    "for",
    "while",
    "class",
    "new",
    "render()",
    "props",
    "state",
    "router",
    "middleware",
    "jwt",
    "index.js",
    "package.json",
    ".env",
    "PORT",
    "npm run dev",
    "404",
    "200",
    "500",
    "req.body",
    "res.json()",
    "next()",
    "$match",
    "$group",
    "aggregate",
    "populate",
    "find()",
    "setLoading",
    "setError",
    "formData",
    "handleChange",
    "border",
    "flex",
    "grid",
    "tailwind",
    "className",
    "jsx",
    "useRef",
    "useCallback",
    "useMemo",
    "useContext",
    "reducer",
    "Promise",
    "resolve",
    "reject",
    "callback",
    "event",
    "onClick",
    "onChange",
    "onSubmit",
    "preventDefault",
  ];

  const snippetsData = codeSnippets.map((text, i) => ({
    text,
    x: (i * 37 + 5) % 95,
    y: i * (800 / codeSnippets.length), // ← evenly distributed across 800vh
    rotation: ((i * 17) % 30) - 15,
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grain texture */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Code snippets */}
      {snippetsData.map((snippet, index) => (
        <SnippetItem key={index} snippet={snippet} mouseRef={mouseRef} />
      ))}
    </div>
  );
}

function SnippetItem({ snippet, mouseRef }) {
  const ref = useRef(null);

  useEffect(() => {
    let animFrame;
    let currentOpacity = 0.3;
    let currentScale = 1;

    const animate = () => {
      if (ref.current) {
        const el = ref.current;
        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;
        const dx = mouseRef.current.x - elCenterX;
        const dy = mouseRef.current.y - elCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        let targetOpacity, targetScale;

        if (dist < maxDist) {
          const intensity = 1 - dist / maxDist;
          targetOpacity = 0.3 + intensity * 0.7;
          targetScale = 1 + intensity * 0.4;
          el.style.color = `rgba(232, 197, 71, ${0.6 + intensity * 0.4})`;
        } else {
          targetOpacity = 0.08;
          targetScale = 1;
          el.style.color = "#777777";
        }

        // lerp — smooth interpolation towards target
        currentOpacity += (targetOpacity - currentOpacity) * 0.08;
        currentScale += (targetScale - currentScale) * 0.08;

        el.style.opacity = String(currentOpacity);
        el.style.transform = `rotate(${snippet.rotation}deg) scale(${currentScale})`;
      }
      animFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute font-mono select-none"
      style={{
        left: `${snippet.x}%`,
        top: `${snippet.y}vh`,
        opacity: "0.08",
        color: "#777777",
        transform: `rotate(${snippet.rotation}deg)`,
        fontSize: "1.1rem",
      }}
    >
      {snippet.text}
    </div>
  );
}

export default Background;
