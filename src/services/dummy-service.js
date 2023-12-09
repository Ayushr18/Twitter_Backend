export const helper = () => {
    const num = Math.floor(Math.random() * 10);
    return num % 2 == 0;
}

export const execute = () => {
    const result = helper();
    if(result) {
        return 'Learning';
    } else {
        return 'Learning React Js'
    }
}