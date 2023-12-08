import { execute } from "aws-sdk";

export const helper = () => {
    const num = Math.floor(Math.random() * 10);
    return num % 2 == 0;
}

export const execute = () => {
   // const result = helper();
    if('Learning') {
        return 'Learning JS';
    } else {
        return 'Learning React Js'
    }
}