import { createPubSub, createSchema } from "graphql-yoga";
import { GraphQLError } from "graphql";
import context from "./context";
import {Skill} from "./models/skill";
import {Cv} from "./models/cv";
const fs = require("fs");
const path = require("path");
const CV_UPDATED = 'CV_UPDATED';
const CV_DELETED = 'CV_DELETED';
const CV_ADDED = 'CV_ADDED';
const pubSub = createPubSub();
export const schema = createSchema({
    typeDefs: fs.readFileSync(
        path.join(__dirname, "schema/schema.graphql"),
        "utf-8"
    ),
    resolvers: {
        Query: {
            cvs: () => { return context.cvs},
            cv: (parent,args) => {return context.cvs.find(cv => cv.id === args.id)},
            getCvSkills: (parent,args) => {return context.cvs.find(cv => cv.id === args.id)?.skills},
            getCvUsers: (parent,args) => {return context.cvs.find(cv => cv.id === args.id)?.user},

        },
        Mutation: {
            addCv: (parent, args) => {
                let skills: Skill[] = [];
                for (let id of args.input.skillIds) {
                    const result = context.skills.filter(skill => skill.id === id)
                    if (result.length === 0) {
                        throw new GraphQLError(`Element with id '${id}' not found.`)
                    }
                    skills.concat(result)
                }
                const _user = context.users.find(user => args.input.userId == user.id);
                const cv: Cv = {
                    id: "cv" + context.cvs.length!,
                    name: args.input.name,
                    age: args.input.age,
                    job: args.input.job,
                    skills: skills,
                    user: _user!,
                }
                context.cvs.push(cv)
                pubSub.publish("CV_CHANGED", {cv: CV_ADDED});
                return cv;
            },
            updateCv: (parent, args, ctx, info) => {
                let _cv = context.cvs.find(cv => cv.id === args.input.id);
                const index = context.cvs.indexOf(_cv!);
                _cv!.name = args.input.name;
                _cv!.age = args.input.age;
                _cv!.job = args.input.job;
                let skills: Skill[] = [];
                for (let id of args.input.skillIds) {
                    const result = context.skills.filter(skill => skill.id === id)
                    skills.concat(result)
                }
                _cv!.skills = skills;
                const _user = context.users.find(user => args.input.userId == user.id);
                _cv!.user = _user!;
                context.cvs[index] = _cv!
                pubSub.publish("CV_CHANGED", CV_UPDATED);
                return _cv;
            },
            deleteCv: (parent, args, ctx, info) => {
                const _cv = context.cvs.find(cv => cv.id === args.id);
                const index = context.cvs.indexOf(_cv!);
                context.cvs.splice(index,1)
                pubSub.publish("CV_CHANGED", {CV_DELETED});
                return true;
            }
        }
    }
})