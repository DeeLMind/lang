import { sidebar } from "vuepress-theme-hope";

export const langSidebar = sidebar({
  "/":[
    "voice"
  ],
  "/ztmandarin/":[
    "1"
  ],
  "/pay/":[
  {
    text: "付费课程",
    // icon: "creative",
    prefix: "class/",
    collapsible: true,
    children: ["pentest","iosmac","windows","androidlinux","ai"],
  },
  "group",
  "services",
  "alive",
  "platform",
  "download",
  "video",
  ]
});
