import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import avatarImg from './image/fundo-linktree.jpg';
import CodeLinesBackground from './CodeLinesBackground';

// ====== Styled Components ======
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #111; // preto puro
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
`;

const Card = styled(motion.div)`
  position: relative;
  z-index: 2;
  background: ${({ dark }) =>
    dark
      ? 'rgba(28,28,28,0.56)'
      : 'rgba(255,255,255,0.63)'};
  box-shadow: 0 1.5px 4px rgba(0,0,0,0.08);
  backdrop-filter: blur(32px);
  padding: 2rem 3vw 1.7rem 3vw;
  width: 100%;
  max-width: 340px;
  min-width: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  border: ${({ dark }) => (dark ? '2.5px solid #232323' : '2.5px solid #f7f7f7')};
  box-sizing: border-box;
  transition: background 0.4s, border 0.4s, box-shadow 0.3s;

  @media (max-width: 360px) {
    padding-left: 2vw;
    padding-right: 2vw;
    max-width: 98vw;
  }
`;

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${({ dark }) => (dark ? '#fff' : '#191919')};
  box-shadow: 0 2px 14px rgba(0,0,0,0.22);
  margin-top: -90px;
  background: #eee;
  transition: border 0.4s;

  @media (max-width: 600px) {
    width: 110px;
    height: 110px;
    margin-top: -60px;
  }
`;

const Marca = styled.h1`
  font-family: 'Fira Mono', 'Roboto Mono', monospace;
  font-size: 2.6rem;
  margin: 0 0 0.1rem 0;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: ${({ dark }) => (dark ? '#fff' : '#222')};
  transition: color 0.4s;

  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
`;

const Subtitulo = styled.div`
  font-family: 'Fira Mono', 'Roboto Mono', monospace;
  font-size: 1.07rem;
  color: ${({ dark }) => (dark ? '#bebebe' : '#444')};
  margin-bottom: 1rem;
  letter-spacing: 0.01em;
  text-align: center;
  transition: color 0.4s;

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;

const SwitchButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.8rem;
  background: none;
  border: none;
  z-index: 3;
  cursor: pointer;
  font-size: 1.7rem;
  color: ${({ dark }) => (dark ? '#fff' : '#222')};
  transition: color 0.35s;
  outline: none;

  &:focus-visible {
    outline: 2.5px solid #54fdfd;
    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    top: 0.8rem;
    right: 1rem;
    font-size: 1.25rem;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.10rem;
  margin-top: 0.3rem;
  align-items: center;
`;

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  justify-content: flex-start;
  width: 90%;
  max-width: 350px;
  text-align: left;
  font-family: 'Fira Mono', 'Roboto Mono', monospace;
  font-size: 1.17rem;
  font-weight: 700;
  color: ${({ dark }) => (dark ? '#fff' : '#111')};
  background: ${({ dark }) => (dark ? '#111' : '#fff')};
  border-radius: 1.13rem;
  border: 2px solid ${({ dark }) => (dark ? '#fff' : '#111')};
  padding: 1.12rem 1.1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  text-decoration: none;
  outline: none;
  margin: 0 auto;
  transition:
    background 0.3s cubic-bezier(.68,-0.55,.27,1.55),
    color 0.3s cubic-bezier(.68,-0.55,.27,1.55),
    border 0.3s,
    box-shadow 0.18s,
    transform 0.13s;

  &:hover, &:focus-visible {
    background: ${({ dark }) => (dark ? '#fff' : '#111')};
    color: ${({ dark }) => (dark ? '#111' : '#fff')};
    border: 2px solid ${({ dark }) => (dark ? '#111' : '#fff')};
    box-shadow: 0 7px 22px rgba(0,0,0,0.16);
    outline: none;
  }
  &:active {
    background: ${({ dark }) => (dark ? '#111' : '#fff')};
    color: ${({ dark }) => (dark ? '#fff' : '#111')};
    transform: scale(0.97);
    box-shadow: 0 2px 4px rgba(0,0,0,0.13);
  }

  &:focus-visible {
    outline: 2.5px solid #54fdfd;
    outline-offset: 4px;
  }

  @media (max-width: 600px) {
    font-size: 0.99rem;
    padding: 0.89rem 0.6rem;
    border-radius: 0.91rem;
  }
`;

const IconBox = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.37em;
`;

const Clicks = styled.span`
  font-size: 0.87em;
  color: ${({ dark }) => (dark ? '#76ffd8' : '#276c4f')};
  margin-left: 8px;
  font-family: 'Fira Mono', monospace;
  opacity: 0.74;
`;

// ========== Framer Motion Configs ==========
const cardMotion = {
  initial: { opacity: 0, scale: 0.96, y: 22 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [.45, .2, .25, 1] } }
};

const buttonMotion = {
  whileHover: { scale: 1.05, boxShadow: "0 10px 24px rgba(0,0,0,0.20)" },
  whileTap: { scale: 0.97 }
};

// ========== APP COMPONENT ==========
const LINKS = [
  {
    href: "https://instagram.com/rcastro.dev",
    label: "Instagram",
    icon: FaInstagram,
    id: "instagram"
  },
  {
    href: "https://wa.me/+5521995600274",
    label: "WhatsApp",
    icon: FaWhatsapp,
    id: "whatsapp"
  },
  {
    href: "https://github.com/RafaelCastro12Dev",
    label: "GitHub",
    icon: FaGithub,
    id: "github"
  }
];

function getSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [clicks, setClicks] = useState(() => {
    try {
      const saved = localStorage.getItem('linktree-clicks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    const saved = localStorage.getItem('linktree-theme');
    if (saved === 'dark' || saved === 'light') {
      setDark(saved === 'dark');
    } else {
      setDark(getSystemTheme() === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('linktree-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    localStorage.setItem('linktree-clicks', JSON.stringify(clicks));
  }, [clicks]);

  const handleClick = (id) => {
    setClicks((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const isAdmin = window.location.search.includes('admin=1412');

  return (
    <Background>
      <CodeLinesBackground />
      <Overlay />
      <Card {...cardMotion} dark={dark ? 1 : 0}>
        <SwitchButton
          aria-label={dark ? "Modo claro" : "Modo escuro"}
          dark={dark ? 1 : 0}
          tabIndex={0}
          onClick={() => setDark((v) => !v)}
          onKeyDown={e => {
            if (e.key === ' ' || e.key === 'Spacebar') {
              e.preventDefault();
              setDark((d) => !d);
            }
          }}
          title={dark ? "Modo claro" : "Modo escuro"}
        >
          {dark ? <FaSun /> : <FaMoon />}
        </SwitchButton>
        <Avatar src={avatarImg} alt="Foto de perfil de Rafael Castro" dark={dark ? 1 : 0} />
        <Marca dark={dark ? 1 : 0}>castrodev</Marca>
        <Subtitulo dark={dark ? 1 : 0}>
          Front-end Developer • React & UI • Brasil
        </Subtitulo>
        <LinksContainer>
          {LINKS.map(({ href, label, icon: Icon, id }) => (
            <LinkButton
              href={href}
              key={id}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} de castrodev`}
              dark={dark ? 1 : 0}
              {...buttonMotion}
              tabIndex={0}
              onClick={() => handleClick(id)}
              onKeyDown={e => {
                if (e.key === ' ') {
                  e.preventDefault();
                  handleClick(id);
                  e.currentTarget.click();
                }
              }}
            >
              <IconBox>{Icon && <Icon />}</IconBox>
              {label}
              {isAdmin && typeof clicks[id] === "number" ? (
                <Clicks dark={dark ? 1 : 0}>
                  {`${clicks[id]} clique${clicks[id] === 1 ? '' : 's'}`}
                </Clicks>
              ) : null}
            </LinkButton>
          ))}
        </LinksContainer>
      </Card>
    </Background>
  );
}
