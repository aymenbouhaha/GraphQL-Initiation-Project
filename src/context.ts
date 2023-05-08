import {Role, User, user1, user2, user3} from "./models/user";
import {Skill, skill1, skill2, skill3, skill4, skill5} from "./models/skill";
import {Cv, cv1, cv2, cv3} from "./models/cv";


class Context {
    users: User[] = [user1, user2, user3];
    skills: Skill[] = [skill1, skill2, skill3, skill4, skill5];
    cvs: Cv[] = [cv1, cv2, cv3];
}
let context = new Context();
export default context;