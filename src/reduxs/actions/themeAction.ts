interface ISetTheme {
    type: string;
    theme: string;
}

// 主题状态管理
const setTheme = (theme: string): ISetTheme => ({
    type: 'SET_THEME',
    theme
});

export default setTheme;
