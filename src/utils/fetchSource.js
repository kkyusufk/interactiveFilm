import data from '../config';

export const source = (id=1) => {
    let content = data.content.filter(content => content.id === id);
    if('decisionPoints' in content[0]) {
       console.log(content[0].decisionPoints)
    }
    console.log(content)
    let src = content[0].src
    return src;
}