export const RedisClient = jest.fn();
export const print = jest.fn();
export const get = jest.fn((key, callback) => callback(null, '{"some":"data"}'));
export const set = jest.fn();
export const del = jest.fn();
export const on = jest.fn();
export const asyncGet = jest.fn();
export const subscribe = jest.fn();
export const createClient = jest.fn(() => redisMock);

const redisMock = {
    RedisClient,
    print,
    createClient,
    get,
    set,
    del,
    on,
    subscribe,
};

export default redisMock;



