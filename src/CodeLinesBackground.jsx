import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  0% { transform: translateX(-125vw);}
  100% { transform: translateX(125vw);}
`;
const slideLeft = keyframes`
  0% { transform: translateX(125vw);}
  100% { transform: translateX(-125vw);}
`;

const codeColors = [
  '#f5f5f5', '#d0f2ff', '#e1ffde', '#ffd3fa', '#faf3d3', '#cccccc'
];

const CodeLayer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  mix-blend-mode: lighten;
`;

const Line = styled.pre`
  position: absolute;
  top: ${({ top }) => top}%;
  left: 0;
  font-size: ${({ size }) => size}rem;
  opacity: ${({ opacity }) => opacity};
  color: ${({ color }) => color};
  font-family: 'Fira Mono', 'Consolas', 'Roboto Mono', monospace;
  letter-spacing: 0.04em;
  white-space: pre;
  text-shadow: 0 1px 8px rgba(0,0,0,0.18);
  animation: ${({ reverse }) => reverse ? slideLeft : slideRight} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  pointer-events: none;
`;

const codeSnippets = [
  'import React from "react";',
  'import styled from "styled-components";',
  'const username = "castrodev";',
  'const skills = ["React", "TypeScript", "CSS-in-JS"];',
  'const location = "Brasil";',
  'function Portfolio() { return <Main /> }',
  'export default Portfolio;',
  'const contato = "rcastro.dev@gmail.com";',
  'const github = "github.com/RafaelCastro12Dev";',
  'function connect(network) { return `https://` + network + `/rcastro.dev`; }',
  'if (openToWork) hireMe();',
  'let message = "Hello, World!";',
  'for (let skill of skills) { learn(skill); }',
  'while (!success) { keepTrying(); }',
  'const isCoding = true;',
  'const year = new Date().getFullYear();',
  'useEffect(() => { deploy(); }, []);',
  'const theme = darkMode ? "dark" : "light";',
  'try { code(); } catch(e) { debug(); }',
  'const favoriteStack = ["React", "Styled", "Node"];',
  'switch(area) { case "Front-end": break; default: explore(); }',
  'setTimeout(() => celebrate(), 3000);',
  'const coffee = { type: "espresso", cups: 2 };',
  'const professional = true;',
  'const motivation = "focus";',
  'async function evoluir() { await aprender(); }',
  'const frameworks = ["React", "Next.js", "Node"];',
  '// Construa. Aprenda. Compartilhe.',
  'const network = ["Instagram", "WhatsApp", "GitHub"];',
  'if (!desistir) { persist(); }',
  'const desafio = "novo projeto";',
  'console.log("🚀 Deploy realizado!");',
  'const objetivo = "UI eficiente e bela";',
  'let projetoAtual = "Linktree tech";',
  'const experiencia = ["esporte", "código", "timework"];',
  'const disciplina = true;',
  'const resultado = disciplina && trabalho;',
  'const aprendizado = dailyCoding + feedback;',
  'const nextLevel = aprendizado > ontem;',
  'const openSource = true;',
  'const deploy = project => { return "Vercel" };',
  'const render = () => <CastroDevSite />;',
  'const jornada = ["início", "processo", "crescimento"];',
  'const contact = network.map(connect);',
  'const sonho = "código e criatividade";',
  'if (erro) { debug(); corrigir(); }',
  'const legacy = "deixar algo melhor";',
  'const motto = "Keep coding, keep growing";',
  'const portfolio = { github, contato, skills };',
  '// continue, mesmo que devagar.',
  'const impact = code * atitude;',
  'const version = "1.0.0";',
  'const passion = "front-end";',
  'const projeto = "transformar ideias em UI";',
  '// coding everyday',
  'const desafioAtual = "superar limites";',
  'const mensagem = "Você chegou até aqui, siga!"',
  'const devLife = true;',
  'const alwaysLearning = true;',
  'const tempo = "agora";',
  'const challenge = "seu melhor projeto";',
  'const inspiração = ["código", "arte", "movimento"];'
];

export default function CodeLinesBackground() {
  // 72 linhas, espaçamento bem pequeno
  return (
    <CodeLayer>
      {[...Array(72)].map((_, i) => {
        const reverse = i % 2 === 0;
        const snippet = codeSnippets[i % codeSnippets.length];
        return (
          <Line
            key={i}
            top={0.2 + (i * 1.35)}
            size={0.85 + 0.09 * (i % 3)}
            opacity={0.08 + 0.10 * (i % 5) + (reverse ? 0.04 : 0)}
            color={codeColors[i % codeColors.length]}
            duration={7 + (i % 7) * 1.7}
            delay={-i * 0.9}
            reverse={reverse}
          >
            {snippet}
          </Line>
        );
      })}
    </CodeLayer>
  );
}
