import { Action } from '@ngrx/store';
import { Session, Speaker, User } from '../interfaces/interfaces';
 
export enum ActionTypes {
  SessionAdd = '[Session] Add',
  SessionRemove = '[Session] Remove',
  SessionEdit = '[Session] Edit',
  SessionToggleFavorite = '[Session] Toggle Favorite',
  SessionSearch = '[Session] Search',
  SessionFilter = '[Session] Filter',
  SpeakerAdd = '[Speaker] Add',
  SpeakerRemove = '[Speaker] Remove',
  SpeakerEdit = '[Speaker] Edit',
  SelectDate = '[About] Select Date',
  SelectLocation = '[About] Select Location',
  Login = '[Login] Login',
  Signup = '[Signup] Signup',
  Logout = '[Sidebar] Logout'
}

export class SessionAdd implements Action {
    readonly type = ActionTypes.SessionAdd;
    constructor(public payload: {session: Session, groupTime: string}) {}
}

export class SessionRemove implements Action {
    readonly type = ActionTypes.SessionRemove;
    constructor(public payload: {id: string}) {}
}

export class SessionEdit implements Action {
    readonly type = ActionTypes.SessionEdit;
    constructor(public payload: {session: Session}) {}
}

export class SessionToggleFavorite implements Action {
    readonly type = ActionTypes.SessionToggleFavorite;
    constructor(public payload: {id: string}) {}
}

export class SessionSearch implements Action {
    readonly type = ActionTypes.SessionSearch;
    constructor(public payload: {term: string}) {}
}

export class SessionFilter implements Action {
    readonly type = ActionTypes.SessionFilter;
    constructor(public payload: {filter: string[]}) {}
}

export class SpeakerAdd implements Action {
    readonly type = ActionTypes.SpeakerAdd;
    constructor(public payload: {speaker: Speaker}) {}
}

export class SpeakerRemove implements Action {
    readonly type = ActionTypes.SpeakerRemove;
    constructor(public payload: {id: string}) {}
}

export class SpeakerEdit implements Action {
    readonly type = ActionTypes.SpeakerEdit;
    constructor(public payload: {speaker: Speaker}) {}
}

export class SelectDate implements Action {
    readonly type = ActionTypes.SelectDate;
    constructor(public payload: {date: string}) {}
}

export class SelectLocation implements Action {
    readonly type = ActionTypes.SelectLocation;
    constructor(public payload: {location: string}) {}
}

export class Login implements Action {
    readonly type = ActionTypes.Login;
    constructor(public payload: {user: User}) {}
}

export class Signup implements Action {
    readonly type = ActionTypes.Signup;
    constructor(public payload: {username: string, password: string}) {}
}

export class Logout implements Action {
    readonly type = ActionTypes.Logout;
}

export type ActionsUnion = 
    SessionAdd |
    SessionRemove |
    SessionEdit |
    SessionToggleFavorite |
    SessionSearch |
    SessionFilter |
    SpeakerAdd |
    SpeakerRemove |
    SpeakerEdit |
    SelectDate |
    SelectLocation |
    Login |
    Signup |
    Logout;