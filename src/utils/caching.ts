import { promisify } from 'util';
import { redisClient } from './Redis';
import { redisTTL } from '../config';

const getAsync = promisify(redisClient.get).bind(redisClient);

const getFromCache = async (query: string) => {
    let data = await getAsync(query);
    return data ? JSON.parse(data) : null;
};

const setCache = async (query: string, data: any) => {
    redisClient.setex(query, 
        redisTTL, // TTL
        JSON.stringify(data));
}

export { getFromCache, setCache };
