/* =====================================================================
   ВСЁ СОДЕРЖИМО САЙТА ЗДЕСЬ. Меняй текст между кавычками "..." и сохраняй.
   Картинки кладёшь в папку assets/, игру — в папку game/.
   ===================================================================== */
window.SITE = {
  title:   "stray dreams demo",
  tagline: "you have been here before. the door is still open.",
  marquee: "★ welcome ★ do not wake up ★ restless dreams await you ★ new build available ★",

  download: {
    file:     "game/YOUR_GAME.zip",   // путь к файлу ИЛИ полная ссылка https://...
    label:    "DOWNLOAD DEMO",
    version:  "v0.1",
    size:     "~100 MB",
    platform: "Windows 64-bit"
  },

  about: [
    "a melancholic game. Average playtime: 15–20 minutes.",
    "A first-person walk through six places that should not exist, connected by doors."
  ],

  // Скриншоты: положи картинки в assets/ и впиши имена файлов
  screenshots: [
    { src: "assets/shot1.png", caption: "Backrooms" },
    { src: "assets/shot2.png", caption: "Jupiter" },
    { src: "assets/shot3.png", caption: "Grasshome" },
    { src: "assets/shot4.png", caption: "Beach" },
    { src: "assets/shot5.png", caption: "Errormemories" },
    { src: "assets/shot6.png", caption: "Stone Age" }
  ],

  locations: ["Backrooms", "Jupiter", "Grasshome", "Beach", "Errormemories", "Stone age"],

  controls: ["WASD — move", "Shift — sprint", "Space — jump", "E — interact", "Esc — exit"],

  requirements: ["Windows 10 / 11 (64-bit)", "GPU with Vulkan or OpenGL 3.3", "4 GB RAM", "300 MB free space"],

  news: [
    { date: "2026-11-20", text: "Website created." }
  ],

  links: [
    { label: "Discord", url: "#" },
    { label: "Contact",  url: "mailto:you@example.com" }
  ],

  footer: "best viewed at 3:00 AM · you are visitor #000001"
};
