import data from '../config';


const preload = (id=1,point="a") => {
    const src = data.filter(data => (data.id === id));
    const srcDeep = src[0].decisionPoints.filter(decision => decision.point === point);
    
}

export default preload;