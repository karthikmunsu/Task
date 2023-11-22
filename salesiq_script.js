window.onload = () => {
    if(window.salesiq.widgetcode && window.salesiq.domain) {
        window.$zoho = window.$zoho || {};
        window.$zoho.salesiq = window.$zoho.salesiq || {widgetcode: `${window.salesiq.widgetcode}`, values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src=`${window.salesiq.domain}`;t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
    }
}
