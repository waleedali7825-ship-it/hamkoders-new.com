"use client";

import Script from "next/script";

export default function WhatsappWidget() {
  const widgetOptions = {
    enabled: true,
    chatButtonSetting: {
      backgroundColor: "#16BE45",
      ctaText: "Message Us",
      borderRadius: "8",
      marginLeft: "20",
      marginBottom: "20",
      marginRight: "20",
      position: "left",
      textColor: "#ffffff",
      phoneNumber: "",
      messageText: "👋🏻Hello",
      trackClick: true,
    },
    brandSetting: {
      brandName: "Hadztech",
      brandSubTitle: "Replies within 1 day",
      headerTextColor: "#fff",
      brandImg: "https://hadztech.com/assets/images/logo.webp",
      welcomeText: "Hi, there!\\nHow can I help you?",
      messageText: "Hello, I have a question about {{page_link}}",
      backgroundColor: "#0a5f54",
      ctaText: "Start Chat",
      borderRadius: "20",
      autoShow: false,
      btnColor: "#16BE45",
      phoneNumber: "+18329002592",
      trackClick: true,
    },
  };

  return (
    <Script
      id="whatsapp-widget"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://cdn.waplus.io/waplus-crm/settings/ossembed.js';
          s.onload = function() {
            CreateWhatsappChatWidget(${JSON.stringify(widgetOptions)});
          };
          document.getElementsByTagName('head')[0].appendChild(s);
        `,
      }}
    />
  );
}
