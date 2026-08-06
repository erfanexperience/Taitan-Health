(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81741,e=>{"use strict";var i=e.i(43476);function t(){return(0,i.jsxs)("div",{style:{minHeight:"100vh",background:"#060D1B",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20},children:[(0,i.jsx)("style",{children:`
        @keyframes skeleton-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        @keyframes spin-loader {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}),(0,i.jsx)("div",{style:{width:40,height:40,borderRadius:"50%",border:"3px solid rgba(255,255,255,0.06)",borderTopColor:"#00B4A0",animation:"spin-loader 0.8s linear infinite"}}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[(0,i.jsx)("div",{style:{width:140,height:8,borderRadius:4,background:"rgba(255,255,255,0.08)",animation:"skeleton-pulse 1.5s ease-in-out infinite"}}),(0,i.jsx)("div",{style:{width:90,height:6,borderRadius:3,background:"rgba(255,255,255,0.05)",animation:"skeleton-pulse 1.5s ease-in-out 0.2s infinite"}})]})]})}e.s(["default",()=>t])}]);