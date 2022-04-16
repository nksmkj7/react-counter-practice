export default function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE': {
            return { count: state.count + 1 };
        }
        case 'DECREASE': return { count: state.count - 1 };
        case 'RESET': return { count: 0 };
        case 'SELF_INCREASE': return { count: state.count + 1 };
        default: throw new Error('Undefined action type')
    }
}