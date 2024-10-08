import{j as e,r as c}from"./index-BhtxJkHA.js";import{A as i,a as m}from"./AreaChart-D-8UepbB.js";import{T as x}from"./generateCategoricalChart-C0ELtBT-.js";import{S as d,M as l}from"./Select-CPf2FDIU.js";import"./index-Bvcx54Yj.js";import"./Modal-D1OmbiPF.js";import"./ownerWindow-BpsX-YRz.js";import"./Paper-28kvjovC.js";import"./debounce-Be36O1Ab.js";const n=({color:a})=>{const t=[{name:"Page A",value:400},{name:"Page B",value:3e3},{name:"Page C",value:2e3},{name:"Page D",value:2780}];return e.jsxs("div",{className:"flex rounded-md justify-between items-center h-[220px] bg-blue-box rounded-xl shadow-xl w-full p-6",children:[e.jsxs("div",{className:"flex flex-col h-full justify-between",children:[e.jsx("p",{className:"text-sm",children:"Total ticket Sold"}),e.jsx("p",{className:"font-bold text-3xl text-[#60769D]",children:"$43,000"}),e.jsx("p",{className:"text-sm",children:"All past events"})]}),e.jsxs(i,{width:260,height:120,data:t,margin:{top:0,right:0,left:0,bottom:0},children:[e.jsx(x,{}),e.jsx(m,{type:"monotone",dataKey:"value",stroke:a,fill:a})]})]})},u=({event:a,eventinfo:t,price:s,totalTicket:o,amount:r})=>e.jsxs("tr",{className:"  ",children:[e.jsxs("th",{scope:"row",className:" py-4  font-medium text-gray-900 flex gap-2 ",children:[e.jsx("img",{src:"https://s3-alpha-sig.figma.com/img/6603/a5bf/f482f58968c5e12726e5790d7c654b7b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wn3dqMX4h62rZsLU5lXxauVINmtj1StQMPMGjVeM9tOq-tTF650a~v2qXoW8sYzl~9UBmK4MxUoHBNUzrr3d6pioaUkPEv53RZO2B4KuurbUhBaO2v-l-qfOM2Z8Z8WB5nA7bc1Wo8BHs5MsyHEz9~SRSZD-pRV6j5apDwlgwjab17F740RqA~JpNMvKnjTRL79VIYG5OdIfaHvYrvmVV3KSPJZRLaEgdBT82KVYHghdpdhakG4ZvtcBPiVYU-meO4PFX2CLdUsUspVugAn9wlAm9MuISko-AwomGWXDD6d0wBiv1riUvokQi7MzyEQwAscWTbIOfSmFWcPXc4luSg__",alt:"random",className:"w-12 h-10 object-cover rounded-md"}),e.jsxs("div",{children:[e.jsx("h1",{className:" font-semibold",children:a}),e.jsx("p",{className:"text-xs text-gray-800",children:t})]})]}),e.jsxs("td",{className:"px-6 py-4 ",children:["$",s]}),e.jsx("td",{className:"px-6 py-4",children:o}),e.jsxs("td",{className:"px-6 py-4",children:["$",r]})]}),p=()=>{const a=[{event:"Rozen Tal at Tone Lab",eventinfo:"19a Koryun St, Yerevan 0009",price:100,totalTicket:100,amount:120},{event:"Rozen Tal at Tone Lab",eventinfo:"19a Koryun St, Yerevan 0009",price:100,totalTicket:100,amount:120},{event:"Rozen Tal at Tone Lab",eventinfo:"19a Koryun St, Yerevan 0009",price:100,totalTicket:100,amount:120},{event:"Rozen Tal at Tone Lab",eventinfo:"19a Koryun St, Yerevan 0009",price:100,totalTicket:100,amount:120},{event:"Rozen Tal at Tone Lab",eventinfo:"19a Koryun St, Yerevan 0009",price:100,totalTicket:100,amount:120}];return e.jsx("div",{className:"relative shadow-custom p-6 rounded-md w-full overflow-y-auto  bg-blue-box",children:e.jsxs("table",{className:" text-sm w-full text-left  text-gray-800 ",children:[e.jsx("thead",{className:"text-xs text-[#60769D] uppercase ",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-1 py-3",children:"Event"}),e.jsx("th",{scope:"col",className:"px-1 py-3",children:"Date"}),e.jsx("th",{scope:"col",className:"px-1 py-3",children:"Payment amount"}),e.jsx("th",{scope:"col",className:"px-1 py-3",children:"Tickets sold"})]})}),e.jsx("tbody",{children:a.map((t,s)=>e.jsx(u,{event:t.event,eventinfo:t.eventinfo,price:t.price,totalTicket:t.totalTicket,amount:t.amount},s))})]})})};function h(){const[a,t]=c.useState(30);return e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-3xl my-12 font-semibold",children:"Payouts"}),e.jsxs("div",{className:"flex w-full justify-between gap-8",children:[e.jsx(n,{color:"#25CD2599"}),e.jsx(n,{color:"#DB303099"})]}),e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx("h1",{className:"text-3xl my-12 font-semibold",children:"Payouts"}),e.jsxs(d,{defaultValue:a,value:a,onChange:s=>t(Number(s.target.value)),size:"small",sx:{borderRadius:2},children:[e.jsx(l,{value:7,children:"Last 7 days"}),e.jsx(l,{value:30,children:"Last 30 days"}),e.jsx(l,{value:60,children:"Last 60 days"}),e.jsx(l,{value:90,children:"Last 90 days"})]})]}),e.jsx(p,{})]})}function P(){return e.jsx(h,{})}export{P as default};