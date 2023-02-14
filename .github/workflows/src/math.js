export const magicNumbers = (min = 1, max = 100) => {
    const minimal = Math.ceil(min);
    const maximal = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
return randomNumber;
};