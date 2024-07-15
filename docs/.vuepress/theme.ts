import { hopeTheme, navbar } from "vuepress-theme-hope";
import { langSidebar } from "./sidebar/lang.js";

export default hopeTheme({
  author: {
    name: "DeeLMind",
  },
  favicon: "/favicon.ico",
  logo: "/logo.png",

  footer: `\
<div style="display: flex;align-items: center">
  <span style="margin-right:16px">网络安全</span>
  <a
    href="https://deelmind.com.cn"
    target="_blank"
    style="display:flex;align-items:center;color:#3eaf7c"
  >
  https://deelmind.com.cn
  </a>
</div>
`,
  copyright: "DeeLMind",

  displayFooter: true,

  darkmode: "toggle",
  iconAssets: "iconfont",

  locales: {
    "/": {
      navbar: navbar([
        { text: "汉語",  link: "/ztmandarin/" },
        { text: "粤语",  link: "/cantonese/" },
        { text: "English",  link: "/english/" },
        { text: "日本語",  link: "/japanese/" },
        { text: "한국인",  link: "/korean/" },
        { text: "Français",  link: "/french/" },
        { text: "Deutsch",  link: "/german/" },
        { text: "Español",  link: "/spanish/" },
        { text: "Português",  link: "/portugal/" },
        { text: "Pуская мова",  link: "/russia/" },
        { text: "فرنسي",  link: "/arabic/" },
        { text: "声乐",  link: "/sing/" },
      ]),
      sidebar: langSidebar,
    },
  },

  plugins: {
    mdEnhance: {
      mermaid: true,
    },
  },
});
