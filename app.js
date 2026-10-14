document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab,.panel').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById(b.dataset.tab).classList.add('active')});
// CIQ + DS 1/10-10/10/2026. SP employee headers D:AX; PAID only exact red rgb(1,0,0).
(()=>{const N=["XX","GUCCI","DI","WESLEY","EN","666","FAIRY","KUAT","JE","KIKI","UL76 (T)","SOON 1880","ROTI","MCD","SHAWN","VNK","JBPARADISE","MICHAEL","SEXPARADISE","VELLFIRE","AMY","MASELI","KELLY","LUCKY","4U","JB LOVER","JUN","XM","ANGEL V","KOPITIAM","BB天空","JI","VIB","REX","NANCY","AH LI","QTX","YAOYING","GEMOK","HH","PARTY GIRLS","ROLEX","XIAO AI","BAO","YJY","SIANG","THOMAS"],C=[[90,0,180,0,0,0,0,0,0,0,0,0,0,0,0,380,0,280,0,60,0,0,0,0,40,0,0,0,0,0,0,0,60,40,0,0,210,0,0,0,280,370,0,0,0,0,0],[0,50,60,0,0,0,0,50,0,0,0,0,0,530,0,50,340,380,0,40,0,0,0,0,100,0,0,150,0,0,0,0,170,0,0,0,0,150,0,0,240,0,0,0,0,0,0],[0,220,50,0,0,0,0,70,0,0,150,0,50,0,230,350,0,340,0,230,0,0,0,0,140,0,0,270,0,0,0,0,170,40,0,0,0,100,0,0,500,0,0,0,0,40,0],[50,0,0,0,0,0,0,270,0,50,40,0,40,0,40,620,0,410,0,0,0,0,0,0,110,0,0,60,0,50,0,60,60,0,0,0,40,160,300,0,120,0,0,0,0,50,0],[0,460,50,0,0,0,0,70,0,50,0,0,120,0,0,60,0,80,0,160,0,60,0,0,0,0,0,0,0,0,0,0,0,80,0,0,40,0,0,0,240,40,0,0,0,50,0],[140,0,120,0,0,0,0,310,0,0,30,0,0,0,0,100,0,210,0,200,0,0,0,0,30,0,0,130,140,160,0,0,180,20,0,0,120,370,0,0,90,0,0,0,0,40,0],[40,0,270,0,0,0,0,50,0,0,0,0,0,0,0,260,0,280,0,50,0,0,0,0,40,0,0,0,0,0,80,50,0,0,0,0,200,220,70,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,50,40,0,0,60,180,0,0,0,50,980,0,110,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,40,70,0,0,290,160,0,0,0,70,0],[0,100,170,0,0,0,0,0,0,0,30,280,0,0,40,210,90,280,0,100,0,0,0,0,170,0,0,0,0,0,0,0,170,20,0,0,170,0,0,0,220,0,0,0,50,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,70,0,450,0,210,0,0,0,0,0,0,70,0,0,0,230,0,0,0,0,100,0,0,80,70,0,0,180,0,0,60,0,0,0]],D=[[0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,80,0,0,0,0,0,0,0,0,0,0,0,50,50,0,60,0,0,0,0,0,0,0,190,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,0,0,0,0,0,0,0,0,0,0,0,0,360,50,0,0,0,0,0,0,40,80,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,30,0,60,0,0,0,0,50,0,0,190,0,0,0,50,0,0,0,0,0,0,0,0,180,300,0,1300,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,30,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,400,0,0,0,0,0,0,830,0,60,580,0,0,0,0,0],[0,0,0,0,0,300,0,0,0,0,0,0,0,0,0,80,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200,0,0,0,0,0],[0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,30,200,0,0,0,0,0],[0,0,60,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,250,0,0,0,0,0],[0,0,0,0,0,330,0,0,0,0,0,0,0,0,0,250,0,40,0,0,0,0,0,0,0,0,0,0,0,220,0,0,0,0,0,0,0,0,0,0,150,100,0,0,0,0,0],[200,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,380,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0]],CP=[["VNK","PARTY GIRLS"],["VNK","XM","PARTY GIRLS"],["VNK","XM","PARTY GIRLS"],["KIKI","VNK","XM","JI","GEMOK","PARTY GIRLS"],["KIKI","VNK","PARTY GIRLS"],[],[],[],[],[]],DP=[["PARTY GIRLS"],["VNK"],["VNK","JI"],["JI","GEMOK","PARTY GIRLS"],["VNK"],[],[],[],[],[]],J={"KUAT":[0,1,1,4,1,6,1,1,0,0],"ROTI":[0,0,1,1,1,0,0,3,0,0],"MICHAEL":[7,8,8,9,2,5,7,8,6,5],"QTX":[5,0,0,1,1,3,5,1,4,2],"PARTY GIRLS":[5,7,9,4,5,3,0,5,5,4]};const n=(document.querySelector('.head h1')?.textContent||'').trim().toUpperCase(),k=N.indexOf(n);if(k<0)return;const stage=Object.hasOwn(J,n),head=document.querySelector('.head');if(head){let m=[...head.children].find(x=>x!==head.querySelector('h1'));if(stage){if(!m){m=document.createElement('div');head.appendChild(m)}m.textContent='150 Stages'}else if(m&&m.textContent.trim()==='150 Stages')m.remove()}const cp=document.querySelector('#ciq .period-oct1-ciq'),dp=document.querySelector('#ds .period-oct1'),cs=cp?.querySelector('.period-current-sum'),ds=dp?.querySelector('.period-current-sum');if(cp&&cs)for(let i=0;i<10;i++){let q=cp.querySelector('.ciq10'+String(i+1).padStart(2,'0'));if(!q){q=document.createElement('div');q.className='row ciq10'+String(i+1).padStart(2,'0');cp.insertBefore(q,cs)}q.innerHTML=`<span>${i+1}/10</span><span>${J[n]?.[i]||0}</span><span>RM${C[i][k]}</span><span>${CP[i].includes(n)?'✅':'—'}</span>`}if(dp&&ds){for(let i=0;i<10;i++){let q=dp.querySelector('.ds10'+String(i+1).padStart(2,'0'));if(!q){q=document.createElement('div');q.className='row dsrow ds10'+String(i+1).padStart(2,'0');dp.insertBefore(q,ds)}q.innerHTML=`<span>${i+1}/10</span><span>RM${D[i][k]}</span><span>${DP[i].includes(n)?'✅':'—'}</span>`}[...dp.children].filter(x=>x.classList?.contains('sum')&&!x.classList.contains('period-current-sum')).forEach(x=>x.style.display='none')}const cr=[...document.querySelectorAll('#ciq .period-oct1-ciq .row:not(.h)')],dr=[...document.querySelectorAll('#ds .period-oct1 .dsrow:not(.h)')],num=t=>Number((t||'').replace(/[^0-9.-]/g,''))||0,ca=cr.reduce((s,r)=>s+num(r.children[2]?.textContent),0),da=dr.reduce((s,r)=>s+num(r.children[1]?.textContent),0),paid=cr.reduce((s,r)=>s+((r.children[3]?.textContent||'').includes('✅')?num(r.children[2]?.textContent):0),0)+dr.reduce((s,r)=>s+((r.children[2]?.textContent||'').includes('✅')?num(r.children[1]?.textContent):0),0),jobs=cr.reduce((s,r)=>s+num(r.children[1]?.textContent),0),tot=ca+da;document.querySelectorAll('.period-current-sum').forEach(b=>[...b.querySelectorAll('p')].forEach(p=>{const l=p.querySelector('span')?.textContent||'',t=p.querySelector('b')||p.querySelectorAll('span')[1];if(!t)return;if(l==='CIQ 金额')t.textContent=`RM${ca}`;else if(l==='DS 金额')t.textContent=`RM${da}`;else if(l==='CIQ + DS 总金额')t.textContent=`RM${tot}`;else if(l==='CIQ 工数')t.textContent=`${jobs} JOB`;else if(l==='已 PAID')t.textContent=`RM${paid}`;else if(l==='还剩金额')t.textContent=`RM${tot-paid}`}))
;const p2DS11=[0,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,0,0,0,40,0,0,0,120,150,0,0,0,0,0],p2DS11Paid=[];
const p2DS12=[0,0,60,0,0,0,0,0,0,0,0,0,0,0,160,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,150,0,0,0,0,0],p2DS12Paid=[];
const p2CIQ12=[40,40,0,0,0,0,0,40,0,0,0,0,0,0,50,80,0,330,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,0,0,0,130,0,0,0,80,0,0],p2CIQ12Paid=[],p2CIQ12Jobs={"KUAT":1,"ROTI":0,"MICHAEL":8,"QTX":3,"PARTY GIRLS":2};
const p2DS13=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,60,150,0,0,0,0,0],p2DS13Paid=[];
const p2CIQ13=[40,0,230,0,0,0,0,240,40,0,0,0,0,0,0,0,0,170,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120,140,0,40,290,0,0,0,0,0,0],p2CIQ13Paid=[],p2CIQ13Jobs={"KUAT":3,"ROTI":0,"MICHAEL":4,"QTX":3,"PARTY GIRLS":5};
const p2CIQ11=[0,220,0,0,0,0,0,60,0,160,0,0,0,0,0,0,0,180,0,0,0,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,40,40,160,0,1190,0,0,0,0,50,0],p2CIQ11Paid=["KIKI"],p2CIQ11Jobs={"KUAT":1,"ROTI":0,"MICHAEL":4,"QTX":1,"PARTY GIRLS":20};
const p2PanelCIQ=document.querySelector('#ciq'),p2PanelDS=document.querySelector('#ds');
if(p2PanelCIQ&&p2PanelDS){
  const p2Ensure=(panel,klass,header)=>{
    let period=panel.querySelector('.'+klass);
    if(!period){
      period=document.createElement('div');
      period.className='period '+klass;
      period.innerHTML='<h2>11/10 - 20/10</h2>'+header;
      panel.insertBefore(period,panel.firstChild);
    }else if(panel.firstElementChild!==period){
      panel.insertBefore(period,panel.firstChild);
    }
    return period;
  };
  const p2CIQ=p2Ensure(p2PanelCIQ,'period-oct2-ciq','<div class="row h"><span>日期</span><span>工数</span><span>金额</span><span>PAID</span></div>');
  const p2DS=p2Ensure(p2PanelDS,'period-oct2','<div class="row h dsrow"><span>日期</span><span>金额</span><span>PAID</span></div>');
  let p2CRow=p2CIQ.querySelector('.ciq1011');
  if(!p2CRow){
    p2CRow=document.createElement('div');
    p2CRow.className='row ciq1011';
    p2CIQ.insertBefore(p2CRow,p2CIQ.querySelector('.period-oct2-sum'));
  }
  p2CRow.innerHTML='<span>11/10</span><span>'+(p2CIQ11Jobs[n]||0)+'</span><span>RM'+p2CIQ11[k]+'</span><span>'+(p2CIQ11Paid.includes(n)?'✅':'—')+'</span>';
  let p2CRow12=p2CIQ.querySelector('.ciq1012');
  if(!p2CRow12){
    p2CRow12=document.createElement('div');
    p2CRow12.className='row ciq1012';
    p2CIQ.insertBefore(p2CRow12,p2CIQ.querySelector('.period-oct2-sum'));
  }
  p2CRow12.innerHTML='<span>12/10</span><span>'+(p2CIQ12Jobs[n]||0)+'</span><span>RM'+p2CIQ12[k]+'</span><span>'+(p2CIQ12Paid.includes(n)?'✅':'—')+'</span>';
  let p2CRow13=p2CIQ.querySelector('.ciq1013');
  if(!p2CRow13){
    p2CRow13=document.createElement('div');
    p2CRow13.className='row ciq1013';
    p2CIQ.insertBefore(p2CRow13,p2CIQ.querySelector('.period-oct2-sum'));
  }
  p2CRow13.innerHTML='<span>13/10</span><span>'+(p2CIQ13Jobs[n]||0)+'</span><span>RM'+p2CIQ13[k]+'</span><span>'+(p2CIQ13Paid.includes(n)?'✅':'—')+'</span>';
  let p2Row=p2DS.querySelector('.ds1011');
  if(!p2Row){
    p2Row=document.createElement('div');
    p2Row.className='row dsrow ds1011';
    p2DS.insertBefore(p2Row,p2DS.querySelector('.period-oct2-sum'));
  }
  p2Row.innerHTML='<span>11/10</span><span>RM'+p2DS11[k]+'</span><span>'+(p2DS11Paid.includes(n)?'✅':'—')+'</span>';
  let p2Row12=p2DS.querySelector('.ds1012');
  if(!p2Row12){
    p2Row12=document.createElement('div');
    p2Row12.className='row dsrow ds1012';
    p2DS.insertBefore(p2Row12,p2DS.querySelector('.period-oct2-sum'));
  }
  p2Row12.innerHTML='<span>12/10</span><span>RM'+p2DS12[k]+'</span><span>'+(p2DS12Paid.includes(n)?'✅':'—')+'</span>';
  let p2Row13=p2DS.querySelector('.ds1013');
  if(!p2Row13){
    p2Row13=document.createElement('div');
    p2Row13.className='row dsrow ds1013';
    p2DS.insertBefore(p2Row13,p2DS.querySelector('.period-oct2-sum'));
  }
  p2Row13.innerHTML='<span>13/10</span><span>RM'+p2DS13[k]+'</span><span>'+(p2DS13Paid.includes(n)?'✅':'—')+'</span>';
  const p2Num=t=>Number((t||'').replace(/[^0-9.-]/g,''))||0;
  const p2CR=[...p2CIQ.querySelectorAll('.row:not(.h)')];
  const p2DR=[...p2DS.querySelectorAll('.dsrow:not(.h)')];
  const p2CA=p2CR.reduce((a,r)=>a+p2Num(r.children[2]?.textContent),0);
  const p2DA=p2DR.reduce((a,r)=>a+p2Num(r.children[1]?.textContent),0);
  const p2Paid=p2CR.reduce((a,r)=>a+((r.children[3]?.textContent||'').includes('✅')?p2Num(r.children[2]?.textContent):0),0)+p2DR.reduce((a,r)=>a+((r.children[2]?.textContent||'').includes('✅')?p2Num(r.children[1]?.textContent):0),0);
  const p2Jobs=p2CR.reduce((a,r)=>a+p2Num(r.children[1]?.textContent),0);
  const p2Sum='<p><span>CIQ 金额</span><b>RM'+p2CA+'</b></p><p><span>DS 金额</span><b>RM'+p2DA+'</b></p><p class="big"><span>CIQ + DS 总金额</span><span>RM'+(p2CA+p2DA)+'</span></p>'+(stage?'<p><span>CIQ 工数</span><b>'+p2Jobs+' JOB</b></p>':'')+'<p><span>已 PAID</span><b>RM'+p2Paid+'</b></p><p><span>还剩金额</span><b>RM'+(p2CA+p2DA-p2Paid)+'</b></p>';
  for(const p2P of [p2CIQ,p2DS]){
    let p2S=p2P.querySelector('.period-oct2-sum');
    if(!p2S){p2S=document.createElement('div');p2S.className='sum period-oct2-sum';p2P.appendChild(p2S)}
    p2S.innerHTML=p2Sum;
  }
}
})();
if('serviceWorker'in navigator){serviceWorker.register('./sw.js').then(()=>navigator.serviceWorker.ready).catch(()=>{})}