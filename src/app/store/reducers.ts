import * as Actions from './actions';
import { Schedule, User, Speaker } from '../interfaces/interfaces';

export interface State {
    schedule: Schedule;
    speakers: Speaker[];
    user: User;
}

export const initialState: State = {
    schedule: null,
    speakers: [],
    user: null
};

export function reducer(state = initialState, action: Actions.ActionsUnion): State {
    switch (action.type) {
        case Actions.ActionTypes.SessionAdd:
            const index = state.schedule.groups.findIndex(group => group.time === action.payload.groupTime);
            let group = {...state.schedule.groups[index]};
            group.sessions.push(action.payload.session);
            return {
                ...state,
                schedule: {
                    ...state.schedule,
                    groups: [
                        ...state.schedule.groups.slice(0, index),
                        group,
                        ...state.schedule.groups.slice(index),
                    ]
                }
            }

        default:
            return state;
    }
}