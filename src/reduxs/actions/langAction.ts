interface ISetLang {
    type: string;
    lang: string;
}

// 语言状态管理
const setLang = (lang: string): ISetLang => ({
    type: 'SET_LANG',
    lang
});

export default setLang;
