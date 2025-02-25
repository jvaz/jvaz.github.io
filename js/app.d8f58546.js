(function(){"use strict";var e={4496:function(e,r,n){var a=n(5130),t=n(6768);const s={id:"app"};function i(e,r,n,a,i,o){const c=(0,t.g2)("CameraScanner");return(0,t.uX)(),(0,t.CE)("div",s,[(0,t.bF)(c)])}var o=n(4232);const c={id:"app"},d={class:"toggle-mode"},l=["disabled"],u=["disabled"],h={id:"scanner",ref:"scannerContainer"},m={id:"scanner",ref:"scannerContainer"},g={id:"output"},p={key:2,class:"error-message"},f=["disabled"],S=["disabled"],C={id:"log"},v={id:"test-camera-section"},L={ref:"testCameraVideo",autoplay:"",muted:"",playsinline:"",style:{width:"100%","max-width":"600px",height:"auto",border:"1px solid #ccc"}},b=["disabled"],k=["disabled"];function T(e,r,n,s,i,T){return(0,t.uX)(),(0,t.CE)("div",c,[r[15]||(r[15]=(0,t.Lk)("header",null,[(0,t.Lk)("img",{src:"https://cdn.prod.website-files.com/65363d385688281ce5b016ec/65363d385688281ce5b016f5_Vectors-Wrapper.svg",alt:"Celfocus Logo"})],-1)),r[16]||(r[16]=(0,t.Lk)("h1",null,"Camera Test",-1)),(0,t.Lk)("div",d,[(0,t.Lk)("label",null,[(0,t.bo)((0,t.Lk)("input",{type:"radio","onUpdate:modelValue":r[0]||(r[0]=e=>i.cameraMode=e),value:"inline",disabled:i.isScannerRunning},null,8,l),[[a.XL,i.cameraMode]]),r[9]||(r[9]=(0,t.eW)(" Inline "))]),(0,t.Lk)("label",null,[(0,t.bo)((0,t.Lk)("input",{type:"radio","onUpdate:modelValue":r[1]||(r[1]=e=>i.cameraMode=e),value:"modal",disabled:i.isScannerRunning},null,8,u),[[a.XL,i.cameraMode]]),r[10]||(r[10]=(0,t.eW)(" Modal "))])]),"inline"===i.cameraMode?((0,t.uX)(),(0,t.CE)("div",{id:"camera-container",onClick:r[2]||(r[2]=(...e)=>T.toggleScanner&&T.toggleScanner(...e)),key:i.scannerKey},[(0,t.Lk)("div",h,null,512)])):(0,t.Q3)("",!0),"modal"===i.cameraMode&&i.showModal?((0,t.uX)(),(0,t.CE)("div",{key:1,class:"modal-overlay",onClick:r[4]||(r[4]=(0,a.D$)(((...e)=>T.stopScanner&&T.stopScanner(...e)),["self"]))},[((0,t.uX)(),(0,t.CE)("div",{class:"modal-content",key:i.scannerKey},[(0,t.Lk)("div",m,null,512),(0,t.Lk)("button",{class:"close-btn",onClick:r[3]||(r[3]=(...e)=>T.stopScanner&&T.stopScanner(...e))},"Close")]))])):(0,t.Q3)("",!0),(0,t.Lk)("div",g,[r[11]||(r[11]=(0,t.eW)(" Scanned Result: ")),(0,t.Lk)("span",null,(0,o.v_)(i.scannedResult),1)]),i.errorMessage?((0,t.uX)(),(0,t.CE)("div",p,(0,o.v_)(i.errorMessage),1)):(0,t.Q3)("",!0),(0,t.Lk)("button",{onClick:r[5]||(r[5]=(...e)=>T.startScanner&&T.startScanner(...e)),disabled:i.isScannerRunning}," Start Scanner ",8,f),(0,t.Lk)("button",{onClick:r[6]||(r[6]=(...e)=>T.stopScanner&&T.stopScanner(...e)),disabled:!i.isScannerRunning}," Stop Scanner ",8,S),(0,t.Lk)("div",C,[r[12]||(r[12]=(0,t.Lk)("h2",null,"Application Log",-1)),(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.logs,((e,r)=>((0,t.uX)(),(0,t.CE)("li",{key:r},(0,o.v_)(e),1)))),128))])]),(0,t.Lk)("div",v,[r[13]||(r[13]=(0,t.Lk)("h2",null,"Test Camera Section",-1)),(0,t.Lk)("video",L,null,512),r[14]||(r[14]=(0,t.Lk)("br",null,null,-1)),(0,t.Lk)("button",{onClick:r[7]||(r[7]=(...e)=>T.startTestCamera&&T.startTestCamera(...e)),disabled:i.testCameraRunning}," Start Test Camera ",8,b),(0,t.Lk)("button",{onClick:r[8]||(r[8]=(...e)=>T.stopTestCamera&&T.stopTestCamera(...e)),disabled:!i.testCameraRunning}," Stop Test Camera ",8,k)])])}n(4114),n(8111),n(7588);var y=n(1613),M=n.n(y),w={name:"CameraScanner",data(){return{isScannerRunning:!1,scannedResult:"None",cameraStream:null,errorMessage:"",errorTimer:null,cameraMode:"inline",showModal:!1,scannerKey:0,logs:[],testCameraRunning:!1,testCameraStream:null}},watch:{cameraMode(){this.addLog(`Camera mode changed to: ${this.cameraMode}`),this.scannerKey++}},methods:{addLog(e){const r=(new Date).toLocaleTimeString();this.logs.push(`${r}: ${e}`)},showError(e){this.errorTimer&&clearTimeout(this.errorTimer),this.errorMessage=e,this.addLog(`Error: ${e}`),this.errorTimer=setTimeout((()=>{this.errorMessage="",this.errorTimer=null}),5e3)},initScanner(){this.errorTimer&&(clearTimeout(this.errorTimer),this.errorTimer=null),this.errorMessage="",this.addLog("Initializing scanner..."),M().init({inputStream:{type:"LiveStream",target:this.$refs.scannerContainer,constraints:{facingMode:"environment"}},decoder:{readers:["code_128_reader","ean_reader","ean_8_reader","code_39_reader"]}},(e=>{if(e)return this.addLog(`QuaggaJS Initialization Error: ${e.name} - ${e.message}`),console.error("QuaggaJS Initialization Error:",e),"NotAllowedError"===e.name||"PermissionDeniedError"===e.name?this.showError("Camera access was denied. Please allow camera permissions."):"NotReadableError"===e.name||"TrackStartError"===e.name?this.showError("The camera is currently in use by another application. Please close it and try again."):this.showError("Unable to access the camera. Please try again later."),void("modal"===this.cameraMode&&(this.showModal=!1));this.addLog("Initializing scanner Complete... Calling startScannerAfterInit"),this.startScannerAfterInit()})),M().onDetected((e=>{this.scannedResult=e.codeResult.code,this.addLog(`Detected code: ${e.codeResult.code}`)}))},startScannerAfterInit(){this.addLog("Calling Quagga.start()..."),M().start(),this.isScannerRunning=!0,this.addLog("Scanner started successfully."),this.cameraStream=this.$refs.scannerContainer.querySelector("video")?this.$refs.scannerContainer.querySelector("video").srcObject:null},startScanner(){this.isScannerRunning||(this.addLog("Attempting to start scanner..."),this.scannerKey++,this.$nextTick((()=>{"modal"===this.cameraMode?(this.showModal=!0,this.addLog("Showing modal..."),this.$nextTick((()=>{this.initScanner()}))):this.initScanner()})))},stopScanner(){if(this.isScannerRunning){if(this.addLog("Stopping scanner..."),M().stop(),this.$refs.scannerContainer){const e=this.$refs.scannerContainer.querySelector("video");e&&(e.pause(),e.srcObject=null,this.addLog("Video element paused and srcObject cleared."))}this.scannerKey++,"inline"===this.cameraMode&&this.$refs.scannerContainer&&(this.$refs.scannerContainer.innerHTML="",this.addLog("Scanner container innerHTML cleared.")),this.cameraStream&&(this.cameraStream.getTracks().forEach(((e,r)=>{e.stop(),this.addLog(`Track ${r} (${e.kind}) stopped.`)})),this.cameraStream=null),M().offDetected(),this.isScannerRunning=!1,this.addLog("Scanner stopped and all references cleared."),this.errorTimer&&(clearTimeout(this.errorTimer),this.errorTimer=null),this.errorMessage="","modal"===this.cameraMode&&(this.showModal=!1)}else"modal"===this.cameraMode&&this.showModal&&(this.showModal=!1)},toggleScanner(){"inline"===this.cameraMode&&(this.isScannerRunning?this.stopScanner():this.startScanner())},startTestCamera(){this.testCameraRunning||navigator.mediaDevices.getUserMedia({video:!0}).then((e=>{this.$refs.testCameraVideo.srcObject=e,this.testCameraStream=e,this.testCameraRunning=!0,this.addLog("Test camera started.")})).catch((e=>{this.addLog(`Error starting test camera: ${e}`),this.showError(`Error starting test camera: ${e.message}`)}))},stopTestCamera(){this.testCameraRunning&&(this.testCameraStream&&this.testCameraStream.getTracks().forEach(((e,r)=>{e.stop(),this.addLog(`Test camera track ${r} (${e.kind}) stopped.`)})),this.$refs.testCameraVideo&&(this.$refs.testCameraVideo.srcObject=null),this.testCameraRunning=!1,this.testCameraStream=null,this.addLog("Test camera stopped."))}},beforeUnmount(){this.isScannerRunning&&this.stopScanner(),this.testCameraRunning&&this.stopTestCamera(),this.errorTimer&&(clearTimeout(this.errorTimer),this.errorTimer=null)}},E=n(1241);const R=(0,E.A)(w,[["render",T],["__scopeId","data-v-50156f7e"]]);var $=R,_={name:"App",components:{CameraScanner:$}};const O=(0,E.A)(_,[["render",i]]);var j=O;(0,a.Ef)(j).mount("#app")}},r={};function n(a){var t=r[a];if(void 0!==t)return t.exports;var s=r[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(r,a,t,s){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],t=e[l][1],s=e[l][2];for(var o=!0,c=0;c<a.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(o=!1,s<i&&(i=s));if(o){e.splice(l--,1);var d=t();void 0!==d&&(r=d)}}return r}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[a,t,s]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var a in r)n.o(r,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={524:0};n.O.j=function(r){return 0===e[r]};var r=function(r,a){var t,s,i=a[0],o=a[1],c=a[2],d=0;if(i.some((function(r){return 0!==e[r]}))){for(t in o)n.o(o,t)&&(n.m[t]=o[t]);if(c)var l=c(n)}for(r&&r(a);d<i.length;d++)s=i[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},a=self["webpackChunkmy_scanner_app"]=self["webpackChunkmy_scanner_app"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(4496)}));a=n.O(a)})();
//# sourceMappingURL=app.d8f58546.js.map