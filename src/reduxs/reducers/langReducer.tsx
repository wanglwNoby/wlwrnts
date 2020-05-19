interface IDefaultState {
    lang: string;
}
const defaultState: IDefaultState = {
    lang: '1033'
};

export default (state: IDefaultState = defaultState, action: any): IDefaultState => {
    switch (action.type) {
        case 'SET_LANG':
            return { ...state, lang: action.lang };
        default:
            return state;
    }
};
