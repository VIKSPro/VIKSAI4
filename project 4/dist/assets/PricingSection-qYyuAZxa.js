import{j as e}from"./index-CSQvSTuC.js";import{r as m}from"./vendor-RReo23N8.js";import{X as f,k as j,l as d,a as y}from"./icons-CVkwrTDp.js";const N="8128978509:AAEi6gjKMUgMAngsZga_GxLucXfORrFB2pg",v=`https://api.telegram.org/bot${N}`,w="851162551";async function C(a,r){try{const l=`
🎯 New Lead from VIKS AI!

Plan Selected: ${r}

👤 Contact Information:
• Name: ${a.name}
• Email: ${a.email}
• Phone: ${a.phone||"Not provided"}
• Company: ${a.company||"Not provided"}

💬 Message:
${a.message||"No message provided"}
    `.trim(),t=await fetch(`${v}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:w,text:l,parse_mode:"HTML"})}),i=await t.json();if(!t.ok)throw console.error("Telegram API error:",i),new Error(i.description||"Failed to send message to Telegram");return!0}catch(l){return console.error("Error sending to Telegram:",l),!1}}function k({isOpen:a,onClose:r,selectedPlan:l}){const[t,i]=m.useState({name:"",email:"",phone:"",company:"",message:""}),[s,x]=m.useState(!1),[u,o]=m.useState("idle"),g=async n=>{n.preventDefault(),x(!0);try{await C(t,l)?(o("success"),setTimeout(()=>{r(),i({name:"",email:"",phone:"",company:"",message:""}),o("idle")},2e3)):o("error")}catch{o("error")}finally{x(!1)}},c=n=>{const{name:p,value:h}=n.target;i(b=>({...b,[p]:h}))};return a?e.jsx("div",{className:"fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto",onClick:n=>{n.target===n.currentTarget&&r()},children:e.jsxs("div",{className:"relative bg-black/80 backdrop-blur-xl w-full max-w-lg rounded-xl p-6 sm:p-8 border border-[#75d031]/20 my-8",children:[e.jsx("button",{onClick:r,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:e.jsx(f,{className:"w-6 h-6"})}),e.jsxs("h3",{className:"text-2xl font-bold mb-2",children:["Get Started with ",l]}),e.jsx("p",{className:"text-gray-400 mb-6",children:"Fill out the form below and we'll get back to you shortly."}),e.jsxs("form",{onSubmit:g,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-1",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:"w-full px-4 py-3 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white text-base",value:t.name,onChange:c})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-1",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full px-4 py-2 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white",value:t.email,onChange:c})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-300 mb-1",children:"Phone"}),e.jsx("input",{type:"tel",id:"phone",name:"phone",className:"w-full px-4 py-2 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white",value:t.phone,onChange:c})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-300 mb-1",children:"Company"}),e.jsx("input",{type:"text",id:"company",name:"company",className:"w-full px-4 py-2 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white",value:t.company,onChange:c})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-1",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",rows:4,className:"w-full px-4 py-2 bg-black/50 border border-[#75d031]/20 rounded-lg focus:outline-none focus:border-[#75d031] text-white resize-none",value:t.message,onChange:c})]}),e.jsxs("button",{type:"submit",disabled:s,className:`w-full flex items-center justify-center space-x-2 py-3 px-6 bg-[#75d031] hover:bg-[#4a8c13] text-white rounded-lg transition-all duration-300 ${s?"opacity-70 cursor-not-allowed":""}`,children:[e.jsx("span",{children:s?"Sending...":"Send Message"}),e.jsx(j,{className:`w-4 h-4 ${s?"animate-pulse":""}`})]}),u==="success"&&e.jsx("p",{className:"mt-4 text-center text-green-500",children:"Message sent successfully!"}),u==="error"&&e.jsx("p",{className:"mt-4 text-center text-red-500",children:"Failed to send message. Please try again or contact us at info@viksproduction.com"})]})]})}):null}function T(){const[a,r]=m.useState(!1),[l,t]=m.useState(""),i=[{name:"Starter",avatars:1,videos:10,price:1350,originalPrice:1500,features:["1 AI Avatar creation","10 edited videos","Commercial usage rights","Priority support","Video script assistance"]},{name:"Professional",avatars:3,videos:30,price:3900,originalPrice:4200,features:["3 AI Avatar creations","30 edited videos","Commercial usage rights","Priority support","Video script assistance","Custom branding","Advanced editing options"]},{name:"Business",avatars:5,videos:60,price:6900,originalPrice:7600,features:["5 AI Avatar creations","60 edited videos","Commercial usage rights","Priority support","Video script assistance","Custom branding","Advanced editing options","Dedicated account manager"]},{name:"Enterprise",avatars:5,videos:90,price:9500,originalPrice:9850,features:["5 AI Avatar creations","90 edited videos","Commercial usage rights","Priority support","Video script assistance","Custom branding","Advanced editing options","Dedicated account manager","Custom integration support"]}];return e.jsx("section",{id:"pricing",className:"py-12 sm:py-16 md:py-20 bg-black",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-8",children:"Our Pricing"}),e.jsx("p",{className:"text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto",children:"Choose the perfect plan for your video marketing needs"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 md:max-w-3xl lg:max-w-5xl xl:max-w-none mx-auto",children:i.map((s,x)=>e.jsxs("div",{className:"bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-4 md:p-6 xl:p-8 border border-[#75d031]/10 hover:border-[#75d031]/20 transition-all duration-300",children:[e.jsx("h3",{className:"text-xl md:text-2xl font-bold mb-4",children:s.name}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex items-baseline",children:[e.jsxs("span",{className:"text-3xl md:text-4xl font-bold",children:["$",s.price]}),e.jsxs("span",{className:"ml-2 text-gray-400 line-through",children:["$",s.originalPrice]})]}),e.jsxs("p",{className:"text-sm text-gray-400 mt-2",children:[s.avatars," avatar",s.avatars>1?"s":""," + ",s.videos," videos"]})]}),e.jsx("ul",{className:"space-y-3 mb-6",children:s.features.map((u,o)=>e.jsxs("li",{className:"flex items-start",children:[e.jsx(d,{className:"w-5 h-5 text-[#75d031] mr-2 flex-shrink-0 mt-0.5"}),e.jsx("span",{className:"text-gray-300 text-sm md:text-base",children:u})]},o))}),e.jsx("button",{className:"w-full py-3 px-6 rounded-lg bg-[#75d031] text-white font-semibold hover:bg-[#4a8c13] transition-colors duration-300",onClick:()=>{t(s.name),r(!0)},children:"Get Started"})]},x))}),e.jsx("div",{className:"mt-8 bg-[#75d031]/5 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-[#75d031]/10 hover:border-[#75d031]/20 transition-all duration-300 max-w-4xl mx-auto",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-start gap-8",children:[e.jsxs("div",{className:"w-full lg:w-2/3",children:[e.jsx("h3",{className:"text-xl md:text-2xl font-bold mb-4",children:"Need a Custom Solution?"}),e.jsx("p",{className:"text-gray-300 text-sm md:text-base mb-6",children:"Looking for something specific? We offer tailored solutions for:"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx(d,{className:"w-5 h-5 text-[#75d031] mr-2 mt-1"}),e.jsx("span",{className:"text-gray-300 text-sm md:text-base",children:"Enterprise-scale video production"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx(d,{className:"w-5 h-5 text-[#75d031] mr-2 mt-1"}),e.jsx("span",{className:"text-gray-300 text-sm md:text-base",children:"Multi-language support"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx(d,{className:"w-5 h-5 text-[#75d031] mr-2 mt-1"}),e.jsx("span",{className:"text-gray-300 text-sm md:text-base",children:"Custom AI avatar development"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx(d,{className:"w-5 h-5 text-[#75d031] mr-2 mt-1"}),e.jsx("span",{className:"text-gray-300 text-sm md:text-base",children:"API integration"})]})]})]}),e.jsxs("div",{className:"w-full lg:w-1/3 text-center lg:text-left",children:[e.jsx("p",{className:"text-lg md:text-xl font-semibold mb-6",children:"Contact us to discuss your needs"}),e.jsxs("button",{onClick:()=>{t("Custom Solution"),r(!0)},className:"w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#75d031] hover:bg-[#4a8c13] text-white rounded-lg transition-colors duration-300 mb-6",children:[e.jsx(y,{className:"w-5 h-5 mr-2"}),e.jsx("span",{children:"Get in Touch"})]}),e.jsx("p",{className:"text-sm text-gray-400",children:"Our team will get back to you within 24 hours"})]})]})}),e.jsx(k,{isOpen:a,onClose:()=>r(!1),selectedPlan:l})]})})}export{T as default};
//# sourceMappingURL=PricingSection-qYyuAZxa.js.map
