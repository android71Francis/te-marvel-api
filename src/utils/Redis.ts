import redis from 'redis';
import { REDIS_HOST } from '../config';

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
});

function init() {
    return new Promise((resolve, reject) => {
        redisClient.on('connect', () => {
            console.log(
                { name: `RedisClient Connected.` },
                { REDIS_HOST }
            );
            resolve(redisClient);
        });

        redisClient.on('error', (error: Error) => {
            console.warn(
                { name: `RedisClient error on connection.` },
                { REDIS_HOST }
            );
            reject(error);
        });
    });
}

export { init, redisClient };
