const stop0 = document.getElementById('stop0')
const stop1= document.getElementById('stop1')
const stop2= document.getElementById('stop2')
const stop3= document.getElementById('stop3')
const stop4= document.getElementById('stop4')
console.log(stop0)
async function Clockwise(){
        var myParabola = funParabola(stop0, stop1).position();
        myParabola.move()
        var myParabola2 = funParabola(stop1, stop2).position();
        await delay(0.5)
        stop1.style.visibility='visible'
        stop0.style.visibility='hidden'
        myParabola2.move()
        var myParabola3 = funParabola2(stop2, stop3).position();
        await delay(0.5)
        stop2.style.visibility='visible'
        stop1.style.visibility='hidden'
        myParabola3.move()
        var myParabola4 = funParabola2(stop3, stop4).position();
        await delay(0.5)
        stop2.style.visibility='hidden'
        stop3.style.visibility='visible'
        stop4.style.visibility='hidden'
        myParabola4.move()
        await delay(0.5)
        resetTransform()

}
async function unclockwise(){
    stop0.style.zIndex='3'
    stop2.style.zIndex='1'
    stop3.style.zIndex='3'
    var myParabola = funParabola2(stop0, stop3).position();
    myParabola.move()
    var myParabola2 = funParabola2(stop3, stop2).position();
    await delay(0.5)
    stop3.style.visibility='visible'
    stop0.style.visibility='hidden'
    myParabola2.move()
    var myParabola3 = funParabola(stop2, stop1).position();
    await delay(0.5)
    stop2.style.visibility='visible'
    stop3.style.visibility='hidden'
    myParabola3.move()
    var myParabola4 = funParabola(stop1, stop4).position();
    await delay(0.5)
    stop2.style.visibility='hidden'
    stop1.style.visibility='visible'
    stop4.style.visibility='hidden'
    myParabola4.move()
    await delay(0.5)
    resetTransform()
}

var funParabola=function(d,t,g){
    var i={speed:100,curvature:0.001,progress:function(){},complete:function(){}};var p={};g=g||{};for(var v in i){p[v]=g[v]||i[v]}var u={mark:function(){return this},position:function(){return this},move:function(){return this},init:function(){return this}};var e="margin",r=document.createElement("div");if("oninput" in r){["","ms","webkit"].forEach(function(b){var a=b+(b?"T":"t")+"ransform";if(a in r.style){e=a}})}var s=p.curvature,q=0,o=0;var k=true;if(d&&t&&d.nodeType==1&&t.nodeType==1){var n={},j={};var h={},m={};var f={},l={};u.mark=function(){if(k==false){return this}if(typeof f.x=="undefined"){this.position()}d.setAttribute("data-center",[f.x,f.y].join());t.setAttribute("data-center",[l.x,l.y].join());return this};u.position=function(){if(k==false){return this}var b=document.documentElement.scrollLeft||document.body.scrollLeft,a=document.documentElement.scrollTop||document.body.scrollTop;if(e=="margin"){d.style.marginLeft=d.style.marginTop="0px"}else{d.style[e]="translate(0, 0)"}n=d.getBoundingClientRect();j=t.getBoundingClientRect();h={x:n.left+(n.right-n.left)/2+b,y:n.top+(n.bottom-n.top)/2+a};m={x:j.left+(j.right-j.left)/2+b,y:j.top+(j.bottom-j.top)/2+a};f={x:0,y:0};l={x:-1*(h.x-m.x),y:-1*(h.y-m.y)};q=(l.y-s*l.x*l.x)/l.x;return this};u.move=function(){if(k==false){return this}var a=0,b=l.x>0?1:-1;var c=function(){var z=2*s*a+q;a=a+b*Math.sqrt(p.speed/(z*z+1));if((b==1&&a>l.x)||(b==-1&&a<l.x)){a=l.x}var w=a,A=s*w*w+q*w;d.setAttribute("data-center",[Math.round(w),Math.round(A)].join());if(e=="margin"){d.style.marginLeft=w+"px";d.style.marginTop=A+"px"}else{d.style[e]="translate("+[w+"px",A+"px"].join()+")"}if(a!==l.x){p.progress(w,A);window.requestAnimationFrame(c)}else{p.complete();k=true}};window.requestAnimationFrame(c);k=false;return this};u.init=function(){this.position().mark().move()}}return u};(function(){var b=0;var c=["webkit","moz"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();var f=Math.max(0,16.7-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)}}}());
var funParabola2=function(d,t,g){
    var i={speed:100,curvature:-0.001,progress:function(){},complete:function(){}};var p={};g=g||{};for(var v in i){p[v]=g[v]||i[v]}var u={mark:function(){return this},position:function(){return this},move:function(){return this},init:function(){return this}};var e="margin",r=document.createElement("div");if("oninput" in r){["","ms","webkit"].forEach(function(b){var a=b+(b?"T":"t")+"ransform";if(a in r.style){e=a}})}var s=p.curvature,q=0,o=0;var k=true;if(d&&t&&d.nodeType==1&&t.nodeType==1){var n={},j={};var h={},m={};var f={},l={};u.mark=function(){if(k==false){return this}if(typeof f.x=="undefined"){this.position()}d.setAttribute("data-center",[f.x,f.y].join());t.setAttribute("data-center",[l.x,l.y].join());return this};u.position=function(){if(k==false){return this}var b=document.documentElement.scrollLeft||document.body.scrollLeft,a=document.documentElement.scrollTop||document.body.scrollTop;if(e=="margin"){d.style.marginLeft=d.style.marginTop="0px"}else{d.style[e]="translate(0, 0)"}n=d.getBoundingClientRect();j=t.getBoundingClientRect();h={x:n.left+(n.right-n.left)/2+b,y:n.top+(n.bottom-n.top)/2+a};m={x:j.left+(j.right-j.left)/2+b,y:j.top+(j.bottom-j.top)/2+a};f={x:0,y:0};l={x:-1*(h.x-m.x),y:-1*(h.y-m.y)};q=(l.y-s*l.x*l.x)/l.x;return this};u.move=function(){if(k==false){return this}var a=0,b=l.x>0?1:-1;var c=function(){var z=2*s*a+q;a=a+b*Math.sqrt(p.speed/(z*z+1));if((b==1&&a>l.x)||(b==-1&&a<l.x)){a=l.x}var w=a,A=s*w*w+q*w;d.setAttribute("data-center",[Math.round(w),Math.round(A)].join());if(e=="margin"){d.style.marginLeft=w+"px";d.style.marginTop=A+"px"}else{d.style[e]="translate("+[w+"px",A+"px"].join()+")"}if(a!==l.x){p.progress(w,A);window.requestAnimationFrame(c)}else{p.complete();k=true}};window.requestAnimationFrame(c);k=false;return this};u.init=function(){this.position().mark().move()}}return u};(function(){var b=0;var c=["webkit","moz"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();var f=Math.max(0,16.7-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)}}}());

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}  
// asd()
stop0.addEventListener('click',function(){
    gogo()
})
function resetTransform() {
    stop0.style.transform=`translate(${0+'px'},${0+'px'})`
    stop1.style.transform=`translate(${0+'px'},${0+'px'})`
    stop2.style.transform=`translate(${0+'px'},${0+'px'})`
    stop3.style.transform=`translate(${0+'px'},${0+'px'})`
    stop4.style.transform=`translate(${0+'px'},${0+'px'})`
    stop3.style.visibility='hidden'
    stop0.style.visibility='visible'
    stop1.style.visibility='hidden'
}
async function gogo(){
    await Clockwise()
    await unclockwise()
    stop0.style.zIndex='1'
    stop2.style.zIndex='3'
    stop3.style.zIndex='1'
}