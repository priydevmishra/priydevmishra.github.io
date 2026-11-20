const $=s=>document.querySelector(s);
$('#yr').textContent=new Date().getFullYear();
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll progress
addEventListener('scroll',()=>{const h=document.documentElement;$('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});

// Hero: API request typed out, then the response
const lines=[
 ['g','GET /api/developer/priydev'],
 ['','200 OK · 42ms\n'],
 ['','{'],
 ['','  <span class="k">"name"</span>: <span class="s">"Priydev Mishra"</span>,'],
 ['','  <span class="k">"role"</span>: <span class="s">"Back End Developer"</span>,'],
 ['','  <span class="k">"stack"</span>: [<span class="s">"Spring Boot"</span>, <span class="s">"Redis"</span>,'],
 ['','            <span class="s">"Docker"</span>, <span class="s">"AWS"</span>],'],
 ['','  <span class="k">"open_to_work"</span>: <span class="g">true</span>'],
 ['','}']
];
const out=$('#api');
function render(n){out.innerHTML=lines.slice(0,n).map(l=>l[0]?`<span class="${l[0]}">${l[1]}</span>`:l[1]).join('\n')}
if(reduce)render(lines.length);else{let i=0;setTimeout(function t(){render(++i);if(i<lines.length)setTimeout(t,i<2?700:260)},1100)}

// Skills
const skills={
 backend:['Java 21','Spring Boot','Spring MVC','Spring Security','Spring Cloud Gateway','Eureka','Hibernate / JPA','Node.js'],
 data:['MySQL','PostgreSQL','Redis','AWS S3','AWS SES','AWS SQS','AWS EC2','Docker','GitHub Actions','DigitalOcean','Git'],
 concepts:['Microservices','REST API design','JWT authentication','OAuth 2.0','API gateway & rate limiting','Unit testing','Performance optimization','Agile'],
 more:['React','JavaScript','Python','C','HTML','CSS','Tailwind CSS']
};
const chips=$('#chips');
const logoMarks={
 'Java 21':'J21','Spring Boot':'SB','Spring MVC':'MVC','Spring Security':'SEC','Spring Cloud Gateway':'GW','Eureka':'EU','Hibernate / JPA':'JPA','Node.js':'JS',
 'MySQL':'SQL','PostgreSQL':'PG','Redis':'RD','AWS S3':'S3','AWS SES':'SES','AWS SQS':'SQS','AWS EC2':'EC2','Docker':'DOCK','GitHub Actions':'GA','DigitalOcean':'DO','Git':'GIT',
 'Microservices':'MS','REST API design':'REST','JWT authentication':'JWT','OAuth 2.0':'OA2','API gateway & rate limiting':'GW','Unit testing':'TEST','Performance optimization':'PERF','Agile':'AG',
 'React':'RE','JavaScript':'JS','Python':'PY','C':'C','HTML':'HTML','CSS':'CSS','Tailwind CSS':'TW'
};
const deviconSlugs={
 'Java 21':'java/java-original.svg',
 'Spring Boot':'spring/spring-original.svg',
 'Spring MVC':'spring/spring-original.svg',
 'Spring Security':'spring/spring-original.svg',
 'Spring Cloud Gateway':'spring/spring-original.svg',
 'Eureka':'spring/spring-original.svg',
 'Hibernate / JPA':'hibernate/hibernate-original.svg',
 'Node.js':'nodejs/nodejs-original.svg',
 'MySQL':'mysql/mysql-original.svg',
 'PostgreSQL':'postgresql/postgresql-original.svg',
 'Redis':'redis/redis-original.svg',
 'AWS S3':'amazonwebservices/amazonwebservices-original.svg',
 'AWS SES':'amazonwebservices/amazonwebservices-original.svg',
 'AWS SQS':'amazonwebservices/amazonwebservices-original.svg',
 'AWS EC2':'amazonwebservices/amazonwebservices-original.svg',
 'Docker':'docker/docker-original.svg',
 'GitHub Actions':'githubactions/githubactions-original.svg',
 'DigitalOcean':'digitalocean/digitalocean-original.svg',
 'Git':'git/git-original.svg',
 'Microservices':'spring/spring-original.svg',
 'REST API design':'nodejs/nodejs-original.svg',
 'JWT authentication':'nodejs/nodejs-original.svg',
 'OAuth 2.0':'nodejs/nodejs-original.svg',
 'Unit testing':'jest/jest-plain.svg',
 'Performance optimization':'nodejs/nodejs-original.svg',
 'Agile':'jira/jira-original.svg',
 'JavaScript':'javascript/javascript-original.svg',
 'Python':'python/python-original.svg',
 'C':'c/c-original.svg',
 'HTML':'html5/html5-original.svg',
 'CSS':'css3/css3-original.svg',
 'React':'react/react-original.svg',
 'Tailwind CSS':'tailwindcss/tailwindcss-original.svg'
};
function show(k){chips.innerHTML=skills[k].map((s,i)=>{
 const icon=deviconSlugs[s];
 const logo=icon
   ? `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}" alt="" loading="lazy" onerror="this.replaceWith(document.createElement('span'))">`
   : '';
 const brand=s.includes('AWS')?'aws':
   s==='MySQL'?'mysql':
   s==='PostgreSQL'?'postgres':
   s==='Redis'?'redis':
   s==='Docker'?'docker':
   s==='GitHub Actions'?'github':
   s==='DigitalOcean'?'digitalocean':
   s==='Git'?'git':
   s.startsWith('Spring')||s==='Hibernate / JPA'?'spring':
   s==='Java 21'?'java':
   s==='Node.js'||s==='JavaScript'||s==='React'||s==='HTML'||s==='CSS'||s==='Tailwind CSS'?'frontend':
   'neutral';
 return `<div class="skill-card" style="animation-delay:${i*40}ms"><span class="skill-logo ${brand}">${logo}</span><span>${s}</span></div>`;
}).join('')}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');show(b.dataset.t)});
show('backend');

// Reveal sections on scroll
if(!reduce&&'IntersectionObserver' in window){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
 document.querySelectorAll('.sec>*').forEach(el=>{el.classList.add('rv');io.observe(el)});
}
