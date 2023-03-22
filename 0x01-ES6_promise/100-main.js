import asyncUploadUser from "../0x01-ES6_promise/100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
