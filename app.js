document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab,.panel').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById(b.dataset.tab).classList.add('active')});

// CIQ + DS 5/10/2026 — mapped strictly by employee header names in SP (D:AW).
(()=>{
  const ciq={
    'XX':[0,0],'GUCCI':[460,0],'DI':[50,0],'WESLEY':[0,0],'EN':[0,0],'666':[0,0],'FAIRY':[0,0],'KUAT':[70,1],'JE':[0,0],'KIKI':[50,0],'UL76 (T)':[0,0],'SOON 1880':[0,0],'ROTI':[120,1],'MCD':[0,0],'SHAWN':[0,0],'VNK':[60,0],'JBPARADISE':[0,0],'MICHAEL':[80,2],'SEXPARADISE':[0,0],'VELLFIRE':[160,0],'AMY':[0,0],'MASELI':[60,0],'KELLY':[0,0],'LUCKY':[0,0],'4U':[0,0],'JB LOVER':[0,0],'JUN':[0,0],'XM':[0,0],'ANGEL V':[0,0],'KOPITIAM':[0,0],'BB天空':[0,0],'JI':[0,0],'VIB':[80,0],'REX':[0,0],'NANCY':[0,0],'AH LI':[40,0],'QTX':[0,1],'YAOYING':[0,0],'GEMOK':[0,0],'HH':[0,0],'PARTY GIRLS':[240,5],'ROLEX':[40,0],'XIAO AI':[0,0],'BAO':[0,0],'YJY':[0,0],'SIANG':[50,0]
  };
  const ds={
    'XX':[0,0],'GUCCI':[0,0],'DI':[0,0],'WESLEY':[0,0],'EN':[0,0],'666':[300,0],'FAIRY':[0,0],'KUAT':[0,0],'JE':[0,0],'KIKI':[0,0],'UL76 (T)':[0,0],'SOON 1880':[0,0],'ROTI':[0,0],'MCD':[0,0],'SHAWN':[0,0],'VNK':[80,0],'JBPARADISE':[0,0],'MICHAEL':[0,0],'SEXPARADISE':[0,0],'VELLFIRE':[50,0],'AMY':[0,0],'MASELI':[0,0],'KELLY':[0,0],'LUCKY':[0,0],'4U':[0,0],'JB LOVER':[0,0],'JUN':[0,0],'XM':[0,0],'ANGEL V':[0,0],'KOPITIAM':[0,0],'BB天空':[0,0],'JI':[0,0],'VIB':[0,0],'REX':[0,0],'NANCY':[0,0],'AH LI':[0,0],'QTX':[0,0],'YAOYING':[0,0],'GEMOK':[0,0],'HH':[0,0],'PARTY GIRLS':[0,0],'ROLEX':[200,0],'XIAO AI':[0,0],'BAO':[0,0],'YJY':[0,0],'SIANG':[0,0]
  };
  const name=(document.querySelector('.head h1')?.textContent||'').trim().toUpperCase();
  if(!ciq[name]||!ds[name]) return;
  const [ciq5,jobs5]=ciq[name], [ds5,dsPaid5]=ds[name];
  const ciqPeriod=document.querySelector('#ciq .period-oct1-ciq');
  if(ciqPeriod){
    let row=ciqPeriod.querySelector('.ciq1005');
    if(!row){ row=document.createElement('div'); row.className='row ciq1005'; ciqPeriod.insertBefore(row,ciqPeriod.querySelector('.period-current-sum')); }
    row.innerHTML=`<span>5/10</span><span>${jobs5}</span><span>RM${ciq5}</span><span>—</span>`;
  }
  const dsPeriod=document.querySelector('#ds .period-oct1');
  if(dsPeriod){
    let row=dsPeriod.querySelector('.ds1005');
    if(!row){ row=document.createElement('div'); row.className='row dsrow ds1005'; dsPeriod.insertBefore(row,dsPeriod.querySelector('.period-current-sum')); }
    row.innerHTML=`<span>5/10</span><span>RM${ds5}</span><span>${dsPaid5?'✅':'—'}</span>`;
  }
  const ciqRows=[...document.querySelectorAll('#ciq .period-oct1-ciq .row:not(.h)')],dsRows=[...document.querySelectorAll('#ds .period-oct1 .dsrow:not(.h)')];
  const ciqAmt=ciqRows.reduce((s,r)=>s+(Number((r.children[2]?.textContent||'').replace(/[^0-9.-]/g,''))||0),0),dsAmt=dsRows.reduce((s,r)=>s+(Number((r.children[1]?.textContent||'').replace(/[^0-9.-]/g,''))||0),0);
  const ciqPaid=ciqRows.reduce((s,r)=>s+((r.children[3]?.textContent||'').includes('✅')?(Number((r.children[2]?.textContent||'').replace(/[^0-9.-]/g,''))||0):0),0),dsPaid=dsRows.reduce((s,r)=>s+((r.children[2]?.textContent||'').includes('✅')?(Number((r.children[1]?.textContent||'').replace(/[^0-9.-]/g,''))||0):0,0);
  const jobTotal=ciqRows.reduce((s,r)=>s+(Number(r.children[1]?.textContent)||0),0),paid=ciqPaid+dsPaid,total=ciqAmt+dsAmt;
  document.querySelectorAll('.period-current-sum').forEach(box=>[...box.querySelectorAll('p')].forEach(p=>{const label=p.querySelector('span')?.textContent||'',target=p.querySelector('b')||p.querySelectorAll('span')[1];if(!target)return;if(label==='CIQ 金额')target.textContent=`RM${ciqAmt}`;else if(label==='DS 金额')target.textContent=`RM${dsAmt}`;else if(label==='CIQ + DS 总金额')target.textContent=`RM${total}`;else if(label==='CIQ 工数')target.textContent=`${jobTotal} JOB`;else if(label==='已 PAID')target.textContent=`RM${paid}`;else if(label==='还剩金额')target.textContent=`RM${total-paid}`;}));
})();

if ('serviceWorker' in navigator) { serviceWorker.register('./sw.js').then(() => navigator.serviceWorker.ready).catch(()=>{}); }
