const $=s=>document.querySelector(s),ic=n=>`<svg class="i"><use href="#${n}"/></svg>`,tags=a=>`<ul class="tags">${a.map(t=>`<li class="tag">${t}</li>`).join('')}</ul>`;
const SK=[["code","Desenvolvimento Front-End",["HTML5","CSS3","JavaScript","React.js","TypeScript","Bootstrap","Tailwind CSS","Flexbox","CSS Grid","Design Responsivo","Consumo de APIs REST"],"Nível intermediário"],
["tool","Ferramentas de desenvolvimento",["Git","GitHub","Visual Studio Code","Node.js","npm","Figma","Chrome DevTools"]],
["db","Programação e banco de dados",["SQL","MySQL","Lógica de programação","Estrutura de dados","Modelagem de dados","Desenvolvimento web","Organização de bancos de dados"]],
["mon","Tecnologia da Informação",["Suporte técnico","Redes de computadores","Sistemas operacionais","Segurança da informação","Atendimento ao usuário","Microsoft 365","Configuração de e-mails corporativos"]],
["bag","Conhecimentos administrativos",["Microsoft Excel","Microsoft Word","Microsoft PowerPoint","Pacote Office","Controle de estoque e almoxarifado","Organização de informações administrativas","Controle de pagamentos"]]];
$('#sk').innerHTML=SK.map(([i,t,l,n])=>`<div class="card rv${n?' feat':''}"><div class="sh">${ic(i)}<h3>${t}</h3>${n?`<span class="badge">${n}</span>`:''}</div>${tags(l)}</div>`).join('');

const gh='https://github.com/georgederick/',pg='https://georgederick.github.io/';
const PJ=[
{t:"Conecta Tech",k:"Site educacional",d:"Site educacional voltado para quem quer aprender programação.",tech:["JavaScript","CSS","HTML"],r:[],img:"img/conecta-tech.png",demo:pg+"Conecta-Tech/",repo:gh+"Conecta-Tech"},
{t:"Atlas Mundial",k:"Mapa Mundi",d:"Mapa Mundi digitalmente/virtual interativo.",tech:["JavaScript","CSS","HTML","Bootstrap"],r:[],img:"img/atlas-mundial.png",demo:pg+"atlas-mundi/",repo:gh+"atlas-mundi"},
{t:"The Golden Pig",k:"E-commerce",d:"E-commerce de uma joalheria.",tech:["JavaScript","CSS","HTML","Bootstrap"],r:[],img:"img/the-golden-pig.png",demo:pg+"the-golden-pig/",repo:gh+"the-golden-pig"},
{t:"Flua",k:"Gestor de tarefas",d:"Aplicação web de gestão de tarefas, projetos e equipe, com navegação lateral estilo app desktop, quadro Kanban, calendário e painel de indicadores",tech:["JavaScript","CSS","HTML"],r:[],img:"img/flua.png",demo:pg+"Flua/",repo:gh+"Flua"},
{t:"Windows XP",k:"Área de trabalho do windows XP",d:"Uma réplica interativa da área de trabalho do Windows XP que roda direto no navegador.",tech:["JavaScript","CSS","HTML"],r:[],img:"img/windows-xp.png",demo:pg+"windows-xp-/",repo:gh+"windows-xp-"}
];
const art=p=>{const inner=`<div class="dots" style="inset:0;opacity:.2"></div><svg class="wf" style="position:relative;animation:none" aria-hidden="true"><use href="#wf"/></svg>${p.img?`<img src="${p.img}" alt="Captura de tela do projeto ${p.t}" loading="lazy" onerror="this.remove()">`:''}${p.demo?`<span class="vis">${ic('ext')}Ver ao vivo</span>`:''}`;return p.demo?`<a class="art fabric" href="${p.demo}" target="_blank" rel="noopener noreferrer" aria-label="Abrir demonstração de ${p.t}">${inner}</a>`:`<div class="art fabric">${inner}</div>`};
$('#pj').innerHTML=PJ.length?PJ.map(p=>`<div class="card proj rv" data-tech="${p.tech.join('|')}">${art(p)}<div><p class="muted">${p.k}</p><h3>${p.t}</h3><p class="tx" style="margin:.75rem 0 1rem">${p.d}</p>${tags(p.tech)}${p.r&&p.r.length?`<h4 style="margin:1.5rem 0 .5rem">Minha participação</h4><ul class="d">${p.r.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}<div class="row">${p.demo?`<a class="btn s" href="${p.demo}" target="_blank" rel="noopener noreferrer">${ic('ext')}Demonstração</a>`:'<span class="soon">Demonstração em breve</span>'}${p.repo?`<a class="btn" href="${p.repo}" target="_blank" rel="noopener noreferrer">${ic('gh')}Repositório</a>`:'<span class="soon">Repositório em breve</span>'}</div></div></div>`).join(''):'<div class="card rv" style="text-align:center;padding:4rem 1.5rem"><h3 style="font-size:1.5rem">Em atualização</h3><p class="muted" style="margin-top:.5rem">Novos projetos serão publicados em breve.</p></div>';
$('#pf').innerHTML=['Todos',...new Set(PJ.flatMap(p=>p.tech))].map((t,i)=>`<button class="chip${i?'':' on'}" data-t="${i?t:''}" aria-pressed="${!i}">${t}</button>`).join('');
$('#pf').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;const t=b.dataset.t;document.querySelectorAll('#pf .chip').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});document.querySelectorAll('#pj .proj').forEach(c=>{c.hidden=!!t&&!c.dataset.tech.split('|').includes(t)});const g=document.querySelector('#pj .g3');if(g)g.hidden=!!t};

$('#pj').insertAdjacentHTML('beforeend','<div class="g3">'+Array(3).fill('<div class="card rv" style="text-align:center;padding:2.5rem 1.5rem"><span class="pulse"></span><h3 style="font-size:1.25rem;margin-top:1rem">Atualizando</h3><p class="muted" style="margin-top:.5rem">Novo projeto em desenvolvimento.</p></div>').join('')+'</div>');
const CT=[["mail","E-mail","georgederickk@gmail.com","mailto:georgederickk@gmail.com"],["phone","Telefone","(11) 95370-6785","tel:+5511953706785"],["in","LinkedIn","https://www.linkedin.com/in/georgederick/","https://www.linkedin.com/in/georgederick/"],["gh","GitHub","github.com/georgederick","https://github.com/georgederick"],["pin","Localização","São Paulo – SP, Brasil",""]];
$('#ct').innerHTML=CT.map(([i,l,v,h])=>{const b=`<div class="card ct">${ic(i)}<div><p class="muted">${l}</p>${v}</div></div>`;return `<div class="rv">${h?`<a href="${h}"${h.startsWith('http')?' target="_blank" rel="noopener noreferrer"':''} style="display:block;height:100%">${b}</a>`:b}</div>`}).join('');
fetch('https://api.github.com/users/georgederick/repos?sort=updated&per_page=6').then(r=>r.ok?r.json():[]).then(d=>{const r=(Array.isArray(d)?d:[]).filter(x=>!x.fork&&!PJ.some(p=>p.repo&&p.repo.toLowerCase()===x.html_url.toLowerCase())).slice(0,3);if(!r.length)return;
$('#rl').innerHTML=r.map(x=>{const a=document.createElement('div');a.textContent=x.name+'\u0000'+(x.description||'Sem descrição.')+'\u0000'+(x.language||'');const [n,ds,lg]=a.innerHTML.split('\u0000');return `<a href="${x.html_url}" target="_blank" rel="noopener noreferrer" class="card" style="display:block"><p style="display:flex;gap:.5rem;font-weight:600">${ic('gh')}${n}</p><p class="muted" style="margin-top:.5rem">${ds}</p><p class="tx" style="font-size:.8rem;margin-top:.75rem">${lg}</p></a>`}).join('');$('#rp').hidden=false;obs()}).catch(()=>{});
$('#yr').textContent=new Date().getFullYear();
const tg=$('#tg'),m=$('#menu');tg.onclick=()=>{const o=m.classList.toggle('o');tg.setAttribute('aria-expanded',o)};m.onclick=e=>{if(e.target.tagName==='A'){m.classList.remove('o');tg.setAttribute('aria-expanded',false)}};
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{rootMargin:'0px 0px -60px'}):null;
function obs(){document.querySelectorAll('.rv:not(.on)').forEach(e=>io?io.observe(e):e.classList.add('on'))}obs();

(()=>{const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const pg=$('#prog'),links=[...document.querySelectorAll('nav a[href^="#"]')],secs=links.map(a=>$(a.getAttribute('href')));
function sc(){const h=document.documentElement;pg.style.width=(scrollY/((h.scrollHeight-innerHeight)||1)*100)+'%';let c=-1;secs.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<=140)c=i});links.forEach((a,i)=>a.classList.toggle('act',i===c))}
addEventListener('scroll',sc,{passive:true});sc();
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--cx',e.clientX-r.left+'px');c.style.setProperty('--cy',e.clientY-r.top+'px')}});
const hero=$('#inicio'),gl=$('#gl');hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();gl.style.setProperty('--mx',e.clientX-r.left+'px');gl.style.setProperty('--my',e.clientY-r.top+'px')});
const T=["Desenvolvimento Front-End","React e TypeScript","Banco de dados MySQL","Suporte de TI"],ty=$('#ty');
if(rm){ty.textContent=T[0]}else{let i=0,j=0,d=false;(function t(){const w=T[i];ty.textContent=w.slice(0,j);let s=d?35:70;if(!d&&j===w.length){d=true;s=1600}else if(d&&j===0){d=false;i=(i+1)%T.length;s=300}else j+=d?-1:1;setTimeout(t,s)})()}
const L=["HTML5","CSS3","JavaScript","React.js","TypeScript","Tailwind CSS","Git","GitHub","SQL","MySQL","Node.js","Figma"],it=L.map(x=>`<span>${x}</span>`).join('');$('#mt').innerHTML=it+it;
$('#hc').textContent=PJ.filter(p=>p.demo).length+' projetos online';
const ST=[[PJ.length,'Projetos publicados'],[new Set(SK.flatMap(s=>s[2])).size,'Habilidades e ferramentas'],[document.querySelectorAll('.edu .card:not(.wide), .cr li').length,'Formações e cursos']];
$('#st').innerHTML=ST.map(([n,l])=>`<div class="card"><b class="n" data-n="${n}">0</b><p class="muted">${l}</p></div>`).join('');
const cnt=e=>{const n=+e.dataset.n;if(rm){e.textContent=n;return}const t0=performance.now();(function f(t){const p=Math.min((t-t0)/1200,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)};
const runCnt=()=>document.querySelectorAll('#st .n').forEach(cnt);
if('IntersectionObserver'in window){const so=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){runCnt();so.disconnect()}});so.observe($('#st'))}else runCnt();
if(!rm&&matchMedia('(hover:hover)').matches){
const ha=$('#ha');
document.addEventListener('pointermove',e=>{ha.style.setProperty('--hx',e.clientX+'px');ha.style.setProperty('--hy',e.clientY+'px')});
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--px',((e.clientX-r.left)/r.width-.5).toFixed(3));hero.style.setProperty('--py',((e.clientY-r.top)/r.height-.5).toFixed(3))});
document.querySelectorAll('.art').forEach(a=>{a.addEventListener('pointermove',e=>{const r=a.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;a.style.transform='perspective(800px) rotateY('+(x*6)+'deg) rotateX('+(-y*6)+'deg)'});a.addEventListener('pointerleave',()=>{a.style.transform=''})})
}
})();
