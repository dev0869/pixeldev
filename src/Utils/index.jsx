import { surpriseMePrompts } from "../Constaits/SurpriseMePrompts";

export function getRandomPromt(Prompt) {
    const RandomIndex = Math.floor(Math.random() * surpriseMePrompts.length);  //for retrive random index
    const RandomPromt = surpriseMePrompts[RandomIndex] // for retrive random data
    if (RandomPromt === prompt) {
        return RandomPromt(prompt)
    }
    return RandomPromt;
}

