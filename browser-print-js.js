"use strict";
const Page = {
  color: function (b=true){
    return (b!=false) ? '-webkit-print-color-adjust: exact !important;-moz-print-color-adjust: exact !important;print-color-adjust: exact !important;color-adjust: exact !important;' : '';
  },
  hefo: function (h=false,f=false){
    return `@page :header { display: ${(h!=false)?'block':'none'}; } @page :footer { display: ${(f!=false)?'block':'none'}; }`
  },
  size: {
    jisb5: 'JIS-B5',
    jisb4: 'JIS-B4',
    b4: 'B4',
    b5: 'B5',
    a3: 'A3',
    a4: 'A4',
    a5: 'A5',
    letter: 'letter',
    legal: 'legal',
    ledger: 'ledger',
    statement: 'statement'
  },
  layout: {
    portrait: 'portrait',
    landscape: 'landscape'
  },
  setStylePrint: function (s='a4',l='portrait',c=true,h=false,f=false){
    let css = `@page { size: ${s} ${l};margin:0mm;${Page.color(c)} }${Page.hefo(h,f)}`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    style.id = 'flash-print';
    style.type = 'text/css';
    style.media = 'print';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  },
  remStylePrint: function (){
    let fp = document.getElementById('flash-print'),
    head = document.head || document.getElementsByTagName('head')[0];
    if (fp.parentNode) {
      fp.parentNode.removeChild(fp);
    }else{
      head.removeChild(fp);
    }
  },
  print: function (size='a4',layout='portrait',c=true,h=false,f=false){
    window.onbeforeprint =()=> {
      Page.setStylePrint(size,layout,c,h,f)
    }
    window.print()
    window.onafterprint =()=> Page.remStylePrint()
    window.oncancel =()=> Page.remStylePrint()
    window.onclose =()=> Page.remStylePrint()
  }
}
