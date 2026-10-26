// Each render function is independent (orthogonality) and reads only DATA.
const fmt = n => n.toLocaleString("en-IN");
const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const $ = id => document.getElementById(id);

function renderText(){
  const d = DATA.deaths;
  document.querySelectorAll("[data-bind]").forEach(el=>{
    const map = { d2015:fmt(d[2015]), d2025:fmt(d[2025]), perHour:d.perHour,
      rise:Math.round((d[2025]-d[2015])/d[2015]*100)+"%", extra:fmt(d[2025]-d[2015]),
      crore:fmt(DATA.unpaidChallans.crore), bmw:DATA.unpaidChallans.bmwChallans };
    el.textContent = map[el.dataset.bind];
  });
  $("hour").innerHTML = Array.from({length:DATA.deaths.perHour},(_,i)=>`<i style="animation-delay:${i*90}ms"></i>`).join("");
}
function renderPassMarks(){
  $("passmarks").innerHTML = DATA.passMarks.map(p=>
   `<div class="bar"><span>${p.label}</span><span class="t"><em style="width:${p.value}%"></em></span><b>${p.value}%</b></div>`).join("");
}
function renderTrend(){
  const d = DATA.deaths;
  new Chart($("trend"),{type:"bar",data:{labels:["2015","2025"],datasets:[{data:[d[2015],d[2025]],backgroundColor:[css("--muted"),css("--danger")]}]},
   options:{maintainAspectRatio:false,plugins:{legend:{display:false},title:{display:true,text:"Road deaths in India"}},scales:{y:{beginAtZero:true,title:{display:true,text:"Deaths per year"}}}}});
}
function renderCompare(){
  const c = DATA.fatalityPer100k;
  new Chart($("compare"),{type:"bar",data:{labels:c.map(x=>x.country),datasets:[{data:c.map(x=>x.value),backgroundColor:[css("--danger"),css("--ink"),css("--safe")]}]},
   options:{indexAxis:"y",maintainAspectRatio:false,plugins:{legend:{display:false},title:{display:true,text:"Road deaths per 1 lakh population"}},scales:{x:{beginAtZero:true,title:{display:true,text:"Fatalities per 100,000"}}}}});
}
function renderPolicies(){
  $("policies").innerHTML = DATA.policies.map(p=>`<article><h3>${p.name}</h3><p>${p.text}</p></article>`).join("");
}
[renderText,renderPassMarks,renderTrend,renderCompare,renderPolicies].forEach(f=>f());
