const hello: (name: string) => void = name => console.log(`Hello ${name}`);

hello("TypeScript");

const faceId: (glasses: boolean, mask: boolean) => string
    = (glasses, mask) => glasses && mask ? 'What the fuck!' : 'no problem';

console.log(faceId(true, true))
