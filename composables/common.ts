export const usePageLinks = () =>
  useState("page-links", () => [
    { name: "ホーム", path: "/", icon: "mdi:home" },
    { name: "About", path: "/about", icon: "mdi:information" },
    { name: "メンバー", path: "/member", icon: "mdi:account-multiple" },
  ]);
