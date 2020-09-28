window.watsonAssistantChatOptions = {
    integrationID: "67cbec24-cd47-45fe-955a-3a5c6ea46ade", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "f18ed525-c7dc-403d-9ca4-146defa18409", // The ID of your service instance.
    onLoad: function (instance) { instance.render(); }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
});

