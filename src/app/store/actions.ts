import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  TutorialSkip = '[Tutorial] Skip',
  TutorialContinue = '[Tutorial] Continue',
  SessionToggleFavorite = '[Session] Toggle Favorite',
  SessionSearch = '[Session] Search',
  SessionFilter = '[Session] Filter',
  SelectDate = '[About] Select Date',
  SelectLocation = '[About] Select Location',
  Login = '[Login] Login',
  Signup = '[Signup] Signup',
  Logout = '[Sidebar] Logout'
}
 
export class TutorialSkip implements Action {
  readonly type = ActionTypes.TutorialSkip;
}

export class TutorialContinue implements Action {
    readonly type = ActionTypes.TutorialContinue;
}

export class SessionToggleFavorite implements Action {
    readonly type = ActionTypes.SessionToggleFavorite;
    constructor(payload: {id: string}) {}
}

export class SessionSearch implements Action {
    readonly type = ActionTypes.SessionSearch;
    constructor(payload: {term: string}) {}
}

export class SelectDate implements Action {
    readonly type = ActionTypes.SelectDate;
    constructor(payload: {date: string}) {}
}

export class SelectLocation implements Action {
    readonly type = ActionTypes.SelectLocation;
    constructor(payload: {location: string}) {}
}

export class Login implements Action {
    readonly type = ActionTypes.Login;
    constructor(payload: {location: string}) {}
}

export class Signup implements Action {
    readonly type = ActionTypes.Signup;
    constructor(payload: {username: string, password: string}) {}
}

export class Logout implements Action {
    readonly type = ActionTypes.Logout;
}
