interface IInitialState {
    kdgTab: string;
}

const initialState: IInitialState = {
    kdgTab: 'recommend'
};

export default (state: IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {
        case 'SET_KDGTAB':
            return { ...state, kdgTab: action.kdgTab };
        default:
            return state;
    }
};
