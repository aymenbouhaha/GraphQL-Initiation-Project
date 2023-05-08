import {Skill, skill1, skill2, skill3, skill4, skill5} from "./skill";
import {User, user1, user2, user3} from "./user";

export interface Cv {
    id: string;
    name: string;
    age: number;
    job: string;
    skills: Skill[];
    user: User;
}

export const cv1: Cv = {
    id: "1",
    name: 'cv1',
    age: 20,
    job: 'job1',
    skills: [skill1, skill2],
    user: user1
}
export const cv2: Cv = {
    id: "2",
    name: 'cv2',
    age: 30,
    job: 'job2',
    skills: [skill3, skill4],
    user: user2

}
export const cv3: Cv = {
    id: "3",
    name: 'cv3',
    age: 40,
    job: 'job3',
    skills: [skill5],
    user: user3
}