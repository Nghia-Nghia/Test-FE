const pluginChat = {
  openChat: () => {
    const script2 = document.createElement("script");
    script2.innerHTML = `
        $crisp.push(['do', 'chat:open']);`;
    document.body.appendChild(script2);
  },
  loadChatPlugin: (shop: string) => {
    const script2 = document.createElement("script");
    script2.innerHTML = `
        window.$crisp=[];window.CRISP_WEBSITE_ID="07faab23-2cce-4034-93cd-5361030881aa";CRISP_TOKEN_ID = btoa("${shop}");
        (function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        $crisp.push(["set", "user:nickname", ["${shop}"]]);
        $crisp.push(["set", "session:segments", [["ProductFeed"]]]);`;
    document.body.appendChild(script2);
  }
};

export default pluginChat;
