interface ISetKdgTab {
    type: string;
    kdgTab: string;
}

const setKdgTab = (kdgTab: string): ISetKdgTab => ({
    type: 'SET_KDGTAB',
    kdgTab
});

export default setKdgTab;
