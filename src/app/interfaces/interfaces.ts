export interface Session {
    name: string;
    location: string;
    description: string;
    speakerNames: string[];
    timeStart: string;
    timeEnd: string;
    tracks: string[];
    id: string;
}

export interface Group {
    time: string;
    sessions: Session[];
}

export interface Schedule {
    date: string;
    groups: Group[];
}

export interface Speaker {
    name: string;
    profilePic: string;
    twitter: string;
    about: string;
    location: string;
    email: string;
    phone: string;
    id: string;
}

export interface ConfMap {
    name: string;
    lat: number;
    lng: number;
    center: boolean;
}