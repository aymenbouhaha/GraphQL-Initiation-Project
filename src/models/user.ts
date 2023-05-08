import {Cv, cv1, cv2, cv3} from "./cv";


export interface User {
    id: string;
    name: string;
    email: string;
    role: Role.ADMIN | Role.USER;
    cv : Cv[];

}
export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export const user1 : User = {
    id: "1",
    name: 'John',
    email: 'john@gmail.com',
    role: Role.ADMIN,
    cv:[cv1]
}
export const user2 : User = {
    id: "2",
    name: 'Jane',
    email: 'Jane@gmail.com',
    role: Role.USER,
    cv:[cv2]
}
export const user3 : User = {
    id: "3",
    name: 'Jack',
    email: 'Jack@gmail.com',
    role: Role.USER,
    cv:[cv3]

}