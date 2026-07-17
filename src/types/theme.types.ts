export type Theme = "light" | "dark";
export type ThemeContextObj={
    theme:Theme;
    changeTheme:()=>void;
};