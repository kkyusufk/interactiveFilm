import data from '../config';

const source = (id=1) =>{
    let video = data.filter((data) => data.id === id);
    return video[0];
};

export default source;