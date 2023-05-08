import {Cv, cv1, cv2, cv3} from "./cv";



export interface Skill {
    id: number;
    designation: string;
    cvs: Cv[];
}

export const skill1: Skill = {
    id: 1,
    designation: 'Angular',
    cvs: [cv1]
}
export const skill2: Skill = {
    id: 2,
    designation: 'React',
    cvs: [cv1]
}
export const skill3: Skill = {
    id: 3,
    designation: 'Vue',
    cvs: [cv2]
}
export const skill4: Skill = {
    id: 4,
    designation: 'Node',
    cvs: [cv2]
}
export const skill5: Skill = {
    id: 5,
    designation: 'Java',
    cvs: [cv3]
}