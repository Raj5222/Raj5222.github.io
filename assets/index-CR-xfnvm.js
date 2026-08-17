import{R as pe,r as s,j as e,F as ne,H as fe,a as ue,b as ge,c as me,d as O,e as te,q as o,f as ye,g as be,h as ce,i as le,k as W,S as T,l as je,m as N,n as F,o as we,s as Y,p as de,t as ve}from"./index-WvtAhiDa.js";const Se=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(6, 7, 16, 0.94);
  backdrop-filter: blur(28px) saturate(200%);
  -webkit-backdrop-filter: blur(28px) saturate(200%);
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;

  @media (max-width: 480px) {
    padding: 10px 6px;
  }
`,ke=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
`,Ce=o.div`
  width: 100%;
  max-width: ${({isFullscreen:t})=>t?"100vw":"min(96vw, 980px)"};
  height: ${({isFullscreen:t})=>t?"100vh":"auto"};
  background: ${({theme:t})=>t.card};
  backdrop-filter: blur(24px) saturate(180%);
  border: ${({isFullscreen:t,theme:a})=>t?"none":`1px solid ${a.glassBorder||a.primary+"40"}`};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 35px ${({theme:t})=>t.primaryGlow||"rgba(133, 76, 230, 0.3)"};
  border-radius: ${({isFullscreen:t})=>t?"0px":"28px"};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 640px) {
    border-radius: ${({isFullscreen:t})=>t?"0px":"20px"};
  }
`,$e=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${({theme:t})=>t.bgLight};
  border-bottom: 1px solid ${({theme:t})=>t.glassBorder||"rgba(255, 255, 255, 0.12)"};
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 12px 14px;
  }
`,Re=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,ze=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ae=o.h2`
  font-size: 20px;
  font-weight: 800;
  margin: 0;
  background: ${({theme:t})=>t.gradient||`linear-gradient(225deg, ${t.primary} 0%, #be1adb 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Me=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,oe=o.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({theme:t})=>t.card_light||"rgba(255, 255, 255, 0.1)"};
  color: ${({theme:t})=>t.text_primary};
  border: 1px solid ${({theme:t})=>t.glassBorder||"rgba(255, 255, 255, 0.2)"};
  border-radius: 12px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({theme:t})=>t.primary};
    color: #ffffff;
    border-color: transparent;
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    padding: 6px 10px;
    font-size: 11px;
    border-radius: 10px;
  }
`,Ge=o.button`
  background: rgba(255, 255, 255, 0.1);
  color: ${({theme:t})=>t.text_primary};
  border: 1px solid ${({theme:t})=>t.glassBorder||"rgba(255, 255, 255, 0.2)"};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.25s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(239, 68, 68, 0.9);
    color: #ffffff;
    transform: scale(1.1) rotate(90deg);
    border-color: transparent;
  }

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
    font-size: 15px;
  }
`,Le=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: ${({theme:t})=>t.bgLight};
  border-top: 1px solid ${({theme:t})=>t.glassBorder||"rgba(255, 255, 255, 0.12)"};
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:t})=>t.text_secondary};
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 8px 14px;
    font-size: 11px;
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }
`,Ee=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: ${({theme:t})=>t.text_secondary};
  opacity: 0.85;
  letter-spacing: 0.4px;

  strong {
    color: ${({theme:t})=>t.primary};
  }
`,Be=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 8px;
  }
`,Ie=o.div`
  padding: ${({isFullscreen:t})=>t?"16px 24px":"24px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 640px) {
    padding: 12px 8px;
    gap: 12px;
  }
`,q=o.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: ${({isFullscreen:t})=>t?"36px":"24px"};
  width: 100%;
  max-width: ${({isFullscreen:t})=>t?"100%":"900px"};
  height: ${({isFullscreen:t})=>t?"100%":"auto"};
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`,U=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: ${({isFullscreen:t})=>t?"100%":"auto"};
`,X=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: ${({isFullscreen:t})=>t?"340px":"300px"};
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,D=o.div`
  background: ${({theme:t})=>t.bgLight};
  border: 1px solid ${({theme:t})=>t.glassBorder||"rgba(255, 255, 255, 0.15)"};
  border-radius: 20px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`,K=o.h4`
  font-size: 13px;
  font-weight: 800;
  color: ${({theme:t})=>t.text_primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  svg {
    color: ${({theme:t})=>t.primary};
  }
`,P=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:t})=>t.text_primary};
  padding: 4px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`,H=o.span`
  font-size: 18px;
  font-weight: 900;
  color: ${({highlight:t,theme:a})=>t?"#10b981":a.primary};
`,V=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,Z=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({theme:t})=>t.gradient||t.primary};
  color: #ffffff;
  font-weight: 800;
  font-size: 13px;
  padding: 10px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px ${({theme:t})=>t.primaryGlow||"rgba(133,76,230,0.4)"};
  width: 100%;

  &:hover {
    transform: translateY(-2px) scale(1.02);
  }
`,re=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({isAuto:t})=>t?"#10b981":"rgba(255, 255, 255, 0.1)"};
  color: #ffffff;
  font-weight: 800;
  font-size: 13px;
  padding: 10px;
  border: 1px solid ${({isAuto:t})=>t?"#10b981":"rgba(255, 255, 255, 0.2)"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({isAuto:t})=>t?"0 0 18px rgba(16,185,129,0.5)":"none"};
  width: 100%;

  &:hover {
    transform: translateY(-2px);
  }
`,Q=o.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: rgba(133, 76, 230, 0.12);
  border: 1px solid ${({theme:t})=>t.primary+"40"};
  padding: 12px;
  border-radius: 14px;
  color: ${({theme:t})=>t.text_secondary};
  font-size: 12px;
  line-height: 1.4;

  svg {
    color: ${({theme:t})=>t.primary};
    font-size: 16px;
    flex-shrink: 0;
    margin-top: 2px;
  }
`,Pe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  max-width: min(96vw, 900px);
  box-sizing: border-box;
`,He=o.h3`
  font-size: 20px;
  font-weight: 800;
  color: ${({theme:t})=>t.text_primary};
  margin: 0;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`,_e=o.p`
  font-size: 13px;
  color: ${({theme:t})=>t.text_secondary};
  margin: 0;
  text-align: center;
`,Te=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  width: 100%;
  box-sizing: border-box;
`,De=o.div`
  background: ${({theme:t})=>t.card_light||t.bgLight};
  border: 1px solid ${({theme:t})=>t.glassBorder||t.primary+"30"};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: ${({theme:t})=>t.primary};
    box-shadow: 0 12px 30px ${({theme:t})=>t.primaryGlow||"rgba(133,76,230,0.4)"};
  }
`,Ke=o.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Ne=o.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${({theme:t})=>t.gradient||t.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 22px;
  box-shadow: 0 4px 14px ${({theme:t})=>t.primaryGlow||"rgba(133,76,230,0.4)"};
  flex-shrink: 0;
`,Oe=o.h4`
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  color: ${({theme:t})=>t.text_primary};
`,We=o.span`
  font-size: 11px;
  font-weight: 700;
  color: ${({theme:t})=>t.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Fe=o.p`
  font-size: 13px;
  color: ${({theme:t})=>t.text_secondary};
  line-height: 1.5;
  margin: 0;
`,Ye=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`,qe=o.span`
  font-size: 12px;
  font-weight: 700;
  color: #10b981;
  display: flex;
  align-items: center;
  gap: 4px;
`,Ue=o.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 50px;
  background: ${({theme:t})=>t.gradient||t.primary};
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px ${({theme:t})=>t.primaryGlow||"rgba(133,76,230,0.35)"};

  &:hover {
    transform: scale(1.06);
  }
`,Xe=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  width: 100%;
  max-width: ${({isFullscreen:t})=>t?"min(85vw, 760px)":"520px"};
  box-sizing: border-box;

  @media (max-width: 520px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
`,Ve=o.div`
  aspect-ratio: 1;
  perspective: 1000px;
  cursor: pointer;
  width: 100%;
`,Ze=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  transform: ${({isFlipped:t,isMatched:a})=>t||a?"rotateY(180deg)":"rotateY(0deg)"};
`,xe=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;
  box-sizing: border-box;
`,Qe=o(xe)`
  background: ${({theme:t})=>t.bgLight};
  border: 2px solid ${({theme:t})=>t.glassBorder||"rgba(255, 255, 255, 0.2)"};
  color: ${({theme:t})=>t.primary};
  font-size: 28px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    font-size: 20px;
    border-radius: 12px;
  }
`,Je=o(xe)`
  background: ${({theme:t,isMatched:a})=>a?"rgba(16, 185, 129, 0.18)":t.card_light};
  border: 2px solid ${({theme:t,isMatched:a})=>a?"#10B981":t.primary};
  transform: rotateY(180deg);
  gap: 6px;
  box-shadow: 0 4px 14px
    ${({theme:t,isMatched:a})=>a?"rgba(16, 185, 129, 0.45)":t.primaryGlow||"rgba(133,76,230,0.35)"};

  @media (max-width: 480px) {
    border-radius: 12px;
    gap: 4px;
  }
`,et=o.img`
  width: clamp(24px, 6vw, 48px);
  height: clamp(24px, 6vw, 48px);
  object-fit: contain;
`,tt=o.span`
  font-size: clamp(9px, 2.2vw, 13px);
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,J=[{id:"react",name:"React",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"},{id:"node",name:"Node.js",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"},{id:"typescript",name:"TypeScript",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"},{id:"python",name:"Python",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},{id:"docker",name:"Docker",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"},{id:"mongodb",name:"MongoDB",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"}],rt=({onUpdateBest:t,isFullscreen:a})=>{const[b,z]=s.useState([]),[w,A]=s.useState([]),[R,M]=s.useState([]),[L,k]=s.useState(0),[G,v]=s.useState(null),[E,c]=s.useState(!1),[f,i]=s.useState(!1),u=s.useRef({});s.useEffect(()=>{"caches"in window&&caches.open("portfolio-media-v1").then(n=>{J.forEach(l=>{n.add(l.image).catch(()=>{})})})},[]);const h=()=>{const n=[...J,...J].map((l,r)=>({...l,uniqueId:`${l.id}-${r}`}));for(let l=n.length-1;l>0;l--){const r=Math.floor(Math.random()*(l+1));[n[l],n[r]]=[n[r],n[l]]}z(n),A([]),M([]),k(0),c(!1),u.current={}};s.useEffect(()=>{W(T.SKILLS,"game_memory_best").then(n=>{n&&(v(n),t(n))}),h()},[]);const g=n=>{if(w.length===2||w.includes(n)||R.includes(b[n].id))return;u.current[n]=b[n].id;const l=[...w,n];if(A(l),l.length===2){k(C=>C+1);const[r,d]=l;if(b[r].id===b[d].id){const C=[...R,b[r].id];if(M(C),A([]),C.length===J.length){c(!0),i(!1);const $=L+1;(G===null||$<G)&&(v($),t($),Y(T.SKILLS,"game_memory_best",$))}}else setTimeout(()=>A([]),850)}};return s.useEffect(()=>{if(!f||E||b.length===0)return;const n=setInterval(()=>{if(w.length<2){const l=b.map((d,C)=>C).filter(d=>!R.includes(b[d].id)&&!w.includes(d));if(l.length===0)return;let r=null;if(w.length===1){const d=b[w[0]].id,C=Object.keys(u.current).find($=>Number($)!==w[0]&&u.current[Number($)]===d&&!R.includes(d));C!==void 0&&(r=Number(C))}r===null&&(r=l[Math.floor(Math.random()*l.length)]),g(r)}},700);return()=>clearInterval(n)},[f,E,w,R,b]),e.jsxs(q,{isFullscreen:a,children:[e.jsxs(U,{isFullscreen:a,children:[E&&e.jsxs("div",{style:{color:"#10b981",fontWeight:800,fontSize:"16px",marginBottom:"12px",textAlign:"center"},children:["🎉 Victory! Matched all tech cards in ",L," moves!"]}),e.jsx(Xe,{isFullscreen:a,children:b.map((n,l)=>{const r=w.includes(l),d=R.includes(n.id);return e.jsx(Ve,{isFlipped:r,isMatched:d,onClick:()=>g(l),children:e.jsxs(Ze,{isFlipped:r,isMatched:d,children:[e.jsx(Qe,{children:e.jsx(je,{})}),e.jsxs(Je,{isMatched:d,children:[e.jsx(et,{src:n.image,alt:n.name}),e.jsx(tt,{children:n.name})]})]})},n.uniqueId)})})]}),e.jsxs(X,{isFullscreen:a,children:[e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(O,{})," Scoreboard"]}),e.jsxs(P,{children:[e.jsx("span",{children:"Current Moves"}),e.jsx(H,{children:L})]}),e.jsxs(P,{children:[e.jsx("span",{children:"Best Record"}),e.jsx(H,{highlight:!0,children:G!==null?`${G} Moves`:"N/A"})]})]}),e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(N,{})," Game Controls"]}),e.jsxs(V,{children:[e.jsxs(re,{isAuto:f,onClick:()=>i(!f),children:[e.jsx(N,{})," ",f?"Auto Play ON 🤖":"Enable Auto Play 🤖"]}),e.jsxs(Z,{onClick:h,children:[e.jsx(F,{})," Restart Game"]})]})]}),e.jsxs(Q,{children:[e.jsx(we,{}),e.jsxs("div",{children:[e.jsx("strong",{children:"How to Play:"})," Click cards to flip and reveal tech icons. Match identical pairs in minimal moves!"]})]})]})]})};o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;const se=o.div`
  width: ${({isFullscreen:t})=>t?"min(90vw, calc(100vh - 160px))":"min(86vw, 440px)"};
  height: ${({isFullscreen:t})=>t?"min(90vw, calc(100vh - 160px))":"min(86vw, 440px)"};
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 2px solid ${({theme:t})=>t.primary+"60"};
  box-shadow: 0 0 30px ${({theme:t})=>t.primaryGlow||"rgba(133, 76, 230, 0.4)"};
  background: #080914;
  overflow: hidden;
  box-sizing: border-box;
`,ie=o.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,nt=o.div`
  display: grid;
  grid-template-columns: repeat(3, 48px);
  grid-template-rows: repeat(2, 44px);
  gap: 6px;
  margin-top: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`,ee=o.button`
  background: ${({theme:t})=>t.bgLight};
  border: 1px solid ${({theme:t})=>t.glassBorder||"rgba(255,255,255,0.25)"};
  color: ${({theme:t})=>t.text_primary};
  border-radius: 12px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);

  &:active {
    background: ${({theme:t})=>t.primary};
    color: #fff;
  }
`,st=({onUpdateHigh:t,isFullscreen:a})=>{const b=s.useRef(null),[z,w]=s.useState(0),[A,R]=s.useState(0),[M,L]=s.useState(!1),[k,G]=s.useState(!1),[v,E]=s.useState(!1),c=22,f=440,i=f/c,u=s.useRef([{x:10,y:10}]),h=s.useRef({x:1,y:0}),g=s.useRef({x:5,y:5});s.useEffect(()=>{W(T.SKILLS,"game_snake_high").then(r=>{r&&(R(r),t(r))})},[]);const n=()=>{let r=Math.floor(Math.random()*c),d=Math.floor(Math.random()*c);g.current={x:r,y:d}},l=()=>{u.current=[{x:10,y:10}],h.current={x:1,y:0},n(),w(0),L(!1),G(!0)};return s.useEffect(()=>{const r=d=>{k&&(["ArrowUp","KeyW"].includes(d.code)&&h.current.y!==1&&(h.current={x:0,y:-1}),["ArrowDown","KeyS"].includes(d.code)&&h.current.y!==-1&&(h.current={x:0,y:1}),["ArrowLeft","KeyA"].includes(d.code)&&h.current.x!==1&&(h.current={x:-1,y:0}),["ArrowRight","KeyD"].includes(d.code)&&h.current.x!==-1&&(h.current={x:1,y:0}))};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[k]),s.useEffect(()=>{if(!k||M)return;const r=setInterval(()=>{const d=[...u.current],C=d[0];if(v){const p=[{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}].filter(j=>{if(j.x===-h.current.x&&j.y===-h.current.y)return!1;const x=C.x+j.x,y=C.y+j.y;return x<0||x>=c||y<0||y>=c?!1:!d.some(S=>S.x===x&&S.y===y)});p.length>0&&(p.sort((j,x)=>{const y=Math.abs(C.x+j.x-g.current.x)+Math.abs(C.y+j.y-g.current.y),S=Math.abs(C.x+x.x-g.current.x)+Math.abs(C.y+x.y-g.current.y);return y-S}),h.current=p[0])}const $={x:C.x+h.current.x,y:C.y+h.current.y};if($.x<0||$.x>=c||$.y<0||$.y>=c||d.some(m=>m.x===$.x&&m.y===$.y)){L(!0),G(!1),E(!1),z>A&&(R(z),t(z),Y(T.SKILLS,"game_snake_high",z));return}d.unshift($),$.x===g.current.x&&$.y===g.current.y?(w(m=>m+10),n()):d.pop(),u.current=d;const B=b.current;if(B){const m=B.getContext("2d");if(m){m.clearRect(0,0,B.width,B.height),m.strokeStyle="rgba(255, 255, 255, 0.04)",m.lineWidth=1;for(let p=0;p<=f;p+=i)m.beginPath(),m.moveTo(p,0),m.lineTo(p,f),m.stroke(),m.beginPath(),m.moveTo(0,p),m.lineTo(f,p),m.stroke();m.fillStyle="#10b981",m.shadowColor="#10b981",m.shadowBlur=12,m.beginPath(),m.arc(g.current.x*i+i/2,g.current.y*i+i/2,i/2-2,0,Math.PI*2),m.fill(),d.forEach((p,j)=>{m.fillStyle=j===0?"#854CE6":"#c084fc",m.shadowColor="#854CE6",m.shadowBlur=j===0?15:6,m.fillRect(p.x*i+1,p.y*i+1,i-2,i-2)})}}},120);return()=>clearInterval(r)},[k,M,z,A,v]),e.jsxs(q,{isFullscreen:a,children:[e.jsxs(U,{isFullscreen:a,children:[e.jsx(se,{isFullscreen:a,children:e.jsx(ie,{ref:b,width:f,height:f})}),M&&e.jsxs("div",{style:{color:"#ef4444",fontWeight:800,fontSize:"15px",marginTop:"10px"},children:["💥 Game Over! Final Score: ",z]}),e.jsxs(nt,{children:[e.jsx("div",{}),e.jsx(ee,{onClick:()=>h.current.y!==1&&(h.current={x:0,y:-1}),children:"▲"}),e.jsx("div",{}),e.jsx(ee,{onClick:()=>h.current.x!==1&&(h.current={x:-1,y:0}),children:"◄"}),e.jsx(ee,{onClick:()=>h.current.y!==-1&&(h.current={x:0,y:1}),children:"▼"}),e.jsx(ee,{onClick:()=>h.current.x!==-1&&(h.current={x:1,y:0}),children:"►"})]})]}),e.jsxs(X,{isFullscreen:a,children:[e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(O,{})," Scoreboard"]}),e.jsxs(P,{children:[e.jsx("span",{children:"Current Score"}),e.jsx(H,{children:z})]}),e.jsxs(P,{children:[e.jsx("span",{children:"High Score"}),e.jsx(H,{highlight:!0,children:A})]})]}),e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(N,{})," Game Controls"]}),e.jsxs(V,{children:[e.jsxs(re,{isAuto:v,onClick:()=>{!k&&!v&&l(),E(!v)},children:[e.jsx(N,{})," ",v?"Auto Play ON 🤖":"Enable Auto Play 🤖"]}),e.jsxs(Z,{onClick:l,children:[k?e.jsx(F,{}):e.jsx(te,{})," ",k?"Restart Game":"Start Game"]})]})]}),e.jsxs(Q,{children:[e.jsx(de,{}),e.jsxs("div",{children:[e.jsx("strong",{children:"Controls:"})," Arrow Keys / WASD or D-Pad to steer snake & eat green tech bugs!"]})]})]})]})},it=({onUpdateHigh:t,isFullscreen:a})=>{const b=s.useRef(null),[z,w]=s.useState(0),[A,R]=s.useState(0),[M,L]=s.useState(0),[k,G]=s.useState(!1),[v,E]=s.useState(!1),[c,f]=s.useState(!1),i=10,u=18,h=()=>{if(a&&typeof window<"u"){const p=window.innerHeight-170;return Math.min(42,Math.max(28,Math.floor(p/u)))}return 28},[g,n]=s.useState(h());s.useEffect(()=>{n(h())},[a]);const l=s.useRef(Array.from({length:u},()=>Array(i).fill(0))),r=s.useRef(null),d=[{shape:[[1,1,1,1]],color:"#00f0f0"},{shape:[[1,1],[1,1]],color:"#f0f000"},{shape:[[0,1,0],[1,1,1]],color:"#a000f0"},{shape:[[1,0,0],[1,1,1]],color:"#f0a000"},{shape:[[0,0,1],[1,1,1]],color:"#0000f0"},{shape:[[0,1,1],[1,1,0]],color:"#00f000"},{shape:[[1,1,0],[0,1,1]],color:"#f00000"}];s.useEffect(()=>{W(T.SKILLS,"game_tetris_high").then(p=>{p&&(R(p),t(p))})},[]);const C=()=>{const p=Math.floor(Math.random()*d.length),j=d[p];r.current={shape:j.shape,x:Math.floor((i-j.shape[0].length)/2),y:0,color:j.color}},$=()=>{l.current=Array.from({length:u},()=>Array(i).fill(0)),C(),w(0),L(0),G(!1),E(!0)},B=(p,j=0,x=0)=>{for(let y=0;y<p.shape.length;y++)for(let S=0;S<p.shape[y].length;S++)if(p.shape[y][S]){const I=p.x+S+j,_=p.y+y+x;if(I<0||I>=i||_>=u||_>=0&&l.current[_][I])return!0}return!1},m=()=>{const p=r.current;if(!p)return;for(let x=0;x<p.shape.length;x++)for(let y=0;y<p.shape[x].length;y++)if(p.shape[x][y]){if(p.y+x<0){G(!0),E(!1);return}l.current[p.y+x][p.x+y]=1}let j=0;for(let x=u-1;x>=0;x--)l.current[x].every(y=>y===1)&&(l.current.splice(x,1),l.current.unshift(Array(i).fill(0)),j++,x++);if(j>0){L(y=>y+j);const x=j*100;w(y=>{const S=y+x;return S>A&&(R(S),t(S),Y(T.SKILLS,"game_tetris_high",S)),S})}C(),B(r.current)&&(G(!0),E(!1))};return s.useEffect(()=>{const p=j=>{if(!v||!r.current)return;const x=r.current;if(["ArrowLeft","KeyA"].includes(j.code))B(x,-1,0)||(x.x-=1);else if(["ArrowRight","KeyD"].includes(j.code))B(x,1,0)||(x.x+=1);else if(["ArrowDown","KeyS"].includes(j.code))B(x,0,1)||(x.y+=1);else if(["ArrowUp","KeyW"].includes(j.code)){const y=x.shape[0].map((I,_)=>x.shape.map(he=>he[_]).reverse()),S={...x,shape:y};B(S,0,0)||(x.shape=y)}};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[v]),s.useEffect(()=>{if(!v||k)return;const p=setInterval(()=>{const j=r.current;if(!j)return;c&&Math.random()>.4&&!B(j,0,1)?j.y+=1:B(j,0,1)?m():j.y+=1;const x=b.current;if(x){const y=x.getContext("2d");if(y){y.clearRect(0,0,x.width,x.height),y.fillStyle="#080914",y.fillRect(0,0,x.width,x.height);for(let S=0;S<u;S++)for(let I=0;I<i;I++)l.current[S][I]&&(y.fillStyle="#854CE6",y.fillRect(I*g+1,S*g+1,g-2,g-2));if(r.current){const S=r.current;y.fillStyle=S.color,y.shadowColor=S.color,y.shadowBlur=10;for(let I=0;I<S.shape.length;I++)for(let _=0;_<S.shape[I].length;_++)S.shape[I][_]&&y.fillRect((S.x+_)*g+1,(S.y+I)*g+1,g-2,g-2)}}}},c?160:350);return()=>clearInterval(p)},[v,k,c,g]),e.jsxs(q,{isFullscreen:a,children:[e.jsxs(U,{isFullscreen:a,children:[e.jsx(se,{isFullscreen:a,style:{width:`${i*g}px`,height:`${u*g}px`},children:e.jsx(ie,{ref:b,width:i*g,height:u*g})}),k&&e.jsxs("div",{style:{color:"#ef4444",fontWeight:800,fontSize:"15px",marginTop:"10px"},children:["💥 Stack Overflow! Lines Compiled: ",M]})]}),e.jsxs(X,{isFullscreen:a,children:[e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(O,{})," Scoreboard"]}),e.jsxs(P,{children:[e.jsx("span",{children:"Current Score"}),e.jsx(H,{children:z})]}),e.jsxs(P,{children:[e.jsx("span",{children:"Lines Cleared"}),e.jsx(H,{children:M})]}),e.jsxs(P,{children:[e.jsx("span",{children:"High Score"}),e.jsx(H,{highlight:!0,children:A})]})]}),e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(N,{})," Game Controls"]}),e.jsxs(V,{children:[e.jsxs(re,{isAuto:c,onClick:()=>{!v&&!c&&$(),f(!c)},children:[e.jsx(N,{})," ",c?"Auto Play ON 🤖":"Enable Auto Play 🤖"]}),e.jsxs(Z,{onClick:$,children:[v?e.jsx(F,{}):e.jsx(te,{})," ",v?"Restart Game":"Start Game"]})]})]}),e.jsxs(Q,{children:[e.jsx(de,{}),e.jsxs("div",{children:[e.jsx("strong",{children:"Controls:"})," ",e.jsx("strong",{children:"Arrow Keys"})," (Left/Right to move, Up to rotate, Down to drop)."]})]})]})]})},ot=o.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  width: 100%;
  max-width: ${({isFullscreen:t})=>t?"min(85vw, 540px)":"440px"};
  margin: 10px 0;
`,at=o.button`
  aspect-ratio: 1;
  border-radius: 16px;
  background: ${({isOn:t,theme:a})=>t?"#10b981":a.card_light||"#1a1d36"};
  border: 2px solid ${({isOn:t})=>t?"#34d399":"rgba(255, 255, 255, 0.15)"};
  color: ${({isOn:t})=>t?"#ffffff":"rgba(255, 255, 255, 0.4)"};
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({isOn:t})=>t?"0 0 20px rgba(16, 185, 129, 0.6)":"none"};

  &:hover {
    transform: scale(1.06);
  }
`,ct=({onUpdateBest:t,isFullscreen:a})=>{const[b,z]=s.useState(Array(16).fill(!1)),[w,A]=s.useState(0),[R,M]=s.useState(null),[L,k]=s.useState(!1),G=()=>{let c=Array(16).fill(!1);for(let f=0;f<8;f++){const i=Math.floor(Math.random()*16);v(i,c)}z(c),A(0),k(!1)};s.useEffect(()=>{W(T.SKILLS,"game_circuit_best").then(c=>{c&&(M(c),t(c))}),G()},[]);const v=(c,f)=>{const i=Math.floor(c/4),u=c%4;[c,i>0?(i-1)*4+u:null,i<3?(i+1)*4+u:null,u>0?i*4+(u-1):null,u<3?i*4+(u+1):null].filter(g=>g!==null).forEach(g=>{f[g]=!f[g]})},E=c=>{if(L)return;const f=[...b];v(c,f),z(f);const i=w+1;A(i),f.every(u=>u===!0)&&(k(!0),(R===null||i<R)&&(M(i),t(i),Y(T.SKILLS,"game_circuit_best",i)))};return e.jsxs(q,{isFullscreen:a,children:[e.jsxs(U,{isFullscreen:a,children:[L&&e.jsxs("div",{style:{color:"#10b981",fontWeight:800,fontSize:"16px",marginBottom:"10px"},children:["⚡ Circuit Fully Powered! Cleared in ",w," moves!"]}),e.jsx(ot,{isFullscreen:a,children:b.map((c,f)=>e.jsx(at,{isOn:c,onClick:()=>E(f),children:e.jsx(ve,{})},f))})]}),e.jsxs(X,{isFullscreen:a,children:[e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(O,{})," Scoreboard"]}),e.jsxs(P,{children:[e.jsx("span",{children:"Current Moves"}),e.jsx(H,{children:w})]}),e.jsxs(P,{children:[e.jsx("span",{children:"Best Record"}),e.jsx(H,{highlight:!0,children:R!==null?`${R} Moves`:"N/A"})]})]}),e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(N,{})," Game Controls"]}),e.jsx(V,{children:e.jsxs(Z,{onClick:G,children:[e.jsx(F,{})," New Logic Puzzle"]})})]}),e.jsxs(Q,{children:[e.jsx(ce,{}),e.jsxs("div",{children:[e.jsx("strong",{children:"Goal:"})," Turn ALL 16 circuit logic nodes ",e.jsx("strong",{children:"ON (Green ⚡)"}),". Clicking a node flips its state and adjacent nodes!"]})]})]})]})},lt=({onUpdateHigh:t,isFullscreen:a})=>{const b=s.useRef(null),[z,w]=s.useState(0),[A,R]=s.useState(0),[M,L]=s.useState(!1),[k,G]=s.useState(!1),[v,E]=s.useState(!1),c=a?580:440,f=a?540:460,i=s.useRef({x:c/2-20,y:f-30,width:40,height:16}),u=s.useRef([]),h=s.useRef([]);s.useEffect(()=>{W(T.SKILLS,"game_shooter_high").then(n=>{n&&(R(n),t(n))})},[]);const g=()=>{i.current={x:c/2-20,y:f-30,width:40,height:16},u.current=[],h.current=[],w(0),L(!1),G(!0)};return s.useEffect(()=>{const n=l=>{k&&(["ArrowLeft","KeyA"].includes(l.code)?i.current.x=Math.max(0,i.current.x-18):["ArrowRight","KeyD"].includes(l.code)?i.current.x=Math.min(c-i.current.width,i.current.x+18):["Space","KeyW","ArrowUp"].includes(l.code)&&u.current.push({x:i.current.x+i.current.width/2-2,y:i.current.y}))};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[k]),s.useEffect(()=>{if(!k||M)return;const n=setInterval(()=>{if(Math.random()<.2&&h.current.push({x:Math.random()*(c-30),y:0,speed:2+Math.random()*2,icon:["🐛","🐞","👾"][Math.floor(Math.random()*3)]}),v&&h.current.length>0){const r=h.current[0];i.current.x<r.x?i.current.x+=6:i.current.x>r.x&&(i.current.x-=6),Math.abs(i.current.x-r.x)<20&&u.current.push({x:i.current.x+i.current.width/2-2,y:i.current.y})}u.current=u.current.map(r=>({...r,y:r.y-8})).filter(r=>r.y>0);for(let r=h.current.length-1;r>=0;r--){const d=h.current[r];if(d.y+=d.speed,d.y>=f-20){L(!0),G(!1),E(!1);return}for(let C=u.current.length-1;C>=0;C--){const $=u.current[C];if($.x>=d.x&&$.x<=d.x+24&&$.y>=d.y&&$.y<=d.y+24){h.current.splice(r,1),u.current.splice(C,1),w(B=>{const m=B+20;return m>A&&(R(m),t(m),Y(T.SKILLS,"game_shooter_high",m)),m});break}}}const l=b.current;if(l){const r=l.getContext("2d");r&&(r.clearRect(0,0,c,f),r.fillStyle="#080914",r.fillRect(0,0,c,f),r.fillStyle="#854CE6",r.shadowColor="#854CE6",r.shadowBlur=12,r.fillRect(i.current.x,i.current.y,i.current.width,i.current.height),r.fillStyle="#10b981",r.shadowColor="#10b981",r.shadowBlur=8,u.current.forEach(d=>r.fillRect(d.x,d.y,4,10)),r.font="20px sans-serif",h.current.forEach(d=>r.fillText(d.icon,d.x,d.y+18)))}},40);return()=>clearInterval(n)},[k,M,v,A,c,f]),e.jsxs(q,{isFullscreen:a,children:[e.jsxs(U,{isFullscreen:a,children:[e.jsx(se,{isFullscreen:a,style:{width:`${c}px`,height:`${f}px`},children:e.jsx(ie,{ref:b,width:c,height:f})}),M&&e.jsxs("div",{style:{color:"#ef4444",fontWeight:800,fontSize:"15px",marginTop:"10px"},children:["💥 Firewall Breached! Final Score: ",z]})]}),e.jsxs(X,{isFullscreen:a,children:[e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(O,{})," Scoreboard"]}),e.jsxs(P,{children:[e.jsx("span",{children:"Current Score"}),e.jsx(H,{children:z})]}),e.jsxs(P,{children:[e.jsx("span",{children:"High Score"}),e.jsx(H,{highlight:!0,children:A})]})]}),e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(N,{})," Game Controls"]}),e.jsxs(V,{children:[e.jsxs(re,{isAuto:v,onClick:()=>{!k&&!v&&g(),E(!v)},children:[e.jsx(N,{})," ",v?"Auto Defense ON 🤖":"Enable Auto Defense 🤖"]}),e.jsxs(Z,{onClick:g,children:[k?e.jsx(F,{}):e.jsx(te,{})," ",k?"Restart Game":"Start Game"]})]})]}),e.jsxs(Q,{children:[e.jsx(le,{}),e.jsxs("div",{children:[e.jsx("strong",{children:"Controls:"})," ",e.jsx("strong",{children:"Left/Right Keys"})," to move Cannon, ",e.jsx("strong",{children:"Spacebar"})," to shoot lasers & destroy code bugs!"]})]})]})]})},ae=[{id:"memory",name:"Tech Memory Match",icon:e.jsx(ne,{}),tag:"Memory & Focus",desc:"Flip 3D cards to find matching pairs of technology stack icons in minimal moves."},{id:"snake",name:"Retro Code Snake",icon:e.jsx(ye,{}),tag:"Reflex & Speed",desc:"Steer the classic arcade snake to eat green code bug food and beat the high score."},{id:"tetris",name:"Code Tetris",icon:e.jsx(be,{}),tag:"Spatial Logic",desc:"Fit falling code blocks together and clear full lines to compile software bundles."},{id:"circuit",name:"Circuit Logic",icon:e.jsx(ce,{}),tag:"Binary Puzzle",desc:"Toggle circuit nodes and invert adjacent logic gates to power up all 16 nodes."},{id:"shooter",name:"Bug Buster",icon:e.jsx(le,{}),tag:"Arcade Shooter",desc:"Pilot the firewall laser cannon to blast incoming code bugs before they breach."}],dt=({isModal:t=!1,onClose:a})=>{const[b,z]=s.useState(null),[w,A]=s.useState(!1),R=s.useRef(null),[M,L]=s.useState(null),[k,G]=s.useState(0),[v,E]=s.useState(0),[c,f]=s.useState(null),[i,u]=s.useState(0),h=()=>{document.fullscreenElement?(document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),A(!1)):(R.current?.requestFullscreen().catch(()=>{}),A(!0))};s.useEffect(()=>{const n=()=>{A(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",n),()=>document.removeEventListener("fullscreenchange",n)},[]),s.useEffect(()=>{const n=l=>{l.key==="Escape"&&(b!==null?z(null):a&&a())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[b,a]);const g=e.jsx(ke,{id:"games",children:e.jsxs(Ce,{ref:R,isFullscreen:w,children:[e.jsxs($e,{children:[e.jsxs(Re,{children:[e.jsx(ne,{style:{fontSize:"24px",color:"#854CE6"}}),e.jsx(ze,{children:e.jsx(Ae,{children:b?ae.find(n=>n.id===b)?.name:"Arcade Game Room"})})]}),e.jsxs(Me,{children:[b!==null&&e.jsxs(oe,{onClick:()=>z(null),"aria-label":"Return to Arcade Lobby",children:[e.jsx(fe,{})," All Games"]}),e.jsxs(oe,{onClick:h,"aria-label":"Toggle Fullscreen Mode",children:[w?e.jsx(ue,{}):e.jsx(ge,{}),w?"Exit Fullscreen":"Fullscreen"]}),a&&e.jsx(Ge,{onClick:a,"aria-label":"Close Arcade Modal",children:e.jsx(me,{})})]})]}),e.jsx(Ie,{isFullscreen:w,children:b===null?e.jsxs(Pe,{children:[e.jsx(He,{children:"Select a Game to Start Playing 🕹️"}),e.jsx(_e,{children:"Choose from 5 interactive tech arcade & logic puzzle games below"}),e.jsx(Te,{children:ae.map(n=>{let l="Ready to Play";return n.id==="memory"&&(l=M?`Best: ${M}m`:"No Record"),n.id==="snake"&&(l=k?`High: ${k}`:"No Record"),n.id==="tetris"&&(l=v?`High: ${v}`:"No Record"),n.id==="circuit"&&(l=c?`Best: ${c}m`:"No Record"),n.id==="shooter"&&(l=i?`High: ${i}`:"No Record"),e.jsxs(De,{onClick:()=>z(n.id),children:[e.jsxs(Ke,{children:[e.jsx(Ne,{children:n.icon}),e.jsxs("div",{children:[e.jsx(We,{children:n.tag}),e.jsx(Oe,{children:n.name})]})]}),e.jsx(Fe,{children:n.desc}),e.jsxs(Ye,{children:[e.jsxs(qe,{children:[e.jsx(O,{})," ",l]}),e.jsxs(Ue,{onClick:r=>{r.stopPropagation(),z(n.id)},children:[e.jsx(te,{})," Play Game"]})]})]},n.id)})})]}):e.jsxs(e.Fragment,{children:[b==="memory"&&e.jsx(rt,{onUpdateBest:L,isFullscreen:w}),b==="snake"&&e.jsx(st,{onUpdateHigh:G,isFullscreen:w}),b==="tetris"&&e.jsx(it,{onUpdateHigh:E,isFullscreen:w}),b==="circuit"&&e.jsx(ct,{onUpdateBest:f,isFullscreen:w}),b==="shooter"&&e.jsx(lt,{onUpdateHigh:u,isFullscreen:w})]})}),e.jsxs(Le,{children:[e.jsxs(Ee,{children:[e.jsx(ne,{style:{color:"#854CE6",fontSize:"1rem"}})," Arcade • © ",new Date().getFullYear()," ",e.jsx("strong",{children:"Raj Sathvara"})]}),e.jsxs(Be,{children:[e.jsxs("span",{children:["🃏 Memory: ",M?`${M}m`:"-"]}),e.jsxs("span",{children:["🐍 Snake: ",k]}),e.jsxs("span",{children:["🧱 Tetris: ",v]}),e.jsxs("span",{children:["💡 Circuit: ",c?`${c}m`:"-"]}),e.jsxs("span",{children:["👾 Shooter: ",i]})]})]})]})});return t?e.jsx(Se,{onClick:n=>n.target===n.currentTarget&&a?.(),children:g}):g},ht=pe.memo(dt);export{ht as default};
