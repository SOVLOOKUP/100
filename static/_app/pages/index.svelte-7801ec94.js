import{S as s,i as a,s as t,e,t as l,k as r,c,a as o,g as n,d as i,n as h,b as f,f as v,F as u,h as x,G as d}from"../chunks/vendor-29e68d40.js";function m(s){let a,t,m,p,b,D,E,M,w,A,I,N,S,$,g,P,k,T,V;return{c(){a=e("main"),t=e("div"),m=e("span"),p=l("建党100周年"),b=r(),D=e("span"),E=l("倒计时"),M=r(),w=e("div"),A=e("span"),I=l("剩 "),N=l(s[0]),S=l(" 天 "),$=l(s[1]),g=l(" 时 "),P=l(s[2]),k=l(" 分 "),T=l(s[3]),V=l(" 秒"),this.h()},l(e){a=c(e,"MAIN",{class:!0});var l=o(a);t=c(l,"DIV",{class:!0});var r=o(t);m=c(r,"SPAN",{class:!0});var f=o(m);p=n(f,"建党100周年"),f.forEach(i),b=h(r),D=c(r,"SPAN",{class:!0});var v=o(D);E=n(v,"倒计时"),v.forEach(i),r.forEach(i),M=h(l),w=c(l,"DIV",{class:!0});var u=o(w);A=c(u,"SPAN",{class:!0});var x=o(A);I=n(x,"剩 "),N=n(x,s[0]),S=n(x," 天 "),$=n(x,s[1]),g=n(x," 时 "),P=n(x,s[2]),k=n(x," 分 "),T=n(x,s[3]),V=n(x," 秒"),x.forEach(i),u.forEach(i),l.forEach(i),this.h()},h(){f(m,"class","text-title svelte-1lx0b70"),f(D,"class","text-title svelte-1lx0b70"),f(t,"class","title svelte-1lx0b70"),f(A,"class","text-timer svelte-1lx0b70"),f(w,"class","timer svelte-1lx0b70"),f(a,"class","main svelte-1lx0b70")},m(s,e){v(s,a,e),u(a,t),u(t,m),u(m,p),u(t,b),u(t,D),u(D,E),u(a,M),u(a,w),u(w,A),u(A,I),u(A,N),u(A,S),u(A,$),u(A,g),u(A,P),u(A,k),u(A,T),u(A,V)},p(s,[a]){1&a&&x(N,s[0]),2&a&&x($,s[1]),4&a&&x(P,s[2]),8&a&&x(T,s[3])},i:d,o:d,d(s){s&&i(a)}}}function p(s,a,t){let e,l,r,c,o=Date.now();return setInterval((()=>{t(4,o=Date.now())}),1e3),s.$$.update=()=>{16&s.$$.dirty&&t(0,[e,l,r,c]=function(s,a){const t=new Date(s),e=new Date(a).getTime(),l=(t.getTime()-e)/1e3,r=Math.floor(l/86400),c=l-24*r*60*60,o=Math.floor(c/3600),n=l-24*r*60*60-60*o*60,i=Math.floor(n/60),h=l-24*r*60*60-60*o*60-60*i;return[r,o,i,Math.floor(h)]}("2021/07/01 00:00:00",o),e,(t(1,l),t(4,o)),(t(2,r),t(4,o)),(t(3,c),t(4,o)))},[e,l,r,c,o]}export default class extends s{constructor(s){super(),a(this,s,p,m,t,{})}}