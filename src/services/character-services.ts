import { Character } from '../types/characters-types';
import MarvelApi from '../gateway/marvel-api';
import { getFromCache, setCache } from '../utils/caching';

const marvelApi = MarvelApi.getInstance();

class CharacterService {
    public async getAll(): Promise<any> {
        const GET_ALL: string = 'GET_ALL_CHARACTER';
        const cacheData = await getFromCache(GET_ALL);
        if (cacheData) return cacheData;

        const characters = await marvelApi.getCharcters();
        const result: Character[] = characters.results.map(val => <Character> {
            id: val.id,
            name: val.name,
            description: val.description
        })

        setCache(GET_ALL, result);
        
        return result;
    }

    public async getById(id: string): Promise<any> {
        const GET_CHARACTER: string = `GET_CHARACTER_${id}`;
        const cacheData = await getFromCache(GET_CHARACTER);
        if (cacheData) return cacheData; 

        const character = await marvelApi.getCharcter(id);
        const result: Character = {
            id: character.results[0].id,
            name: character.results[0].name,
            description: character.results[0].description
        };

        setCache(GET_CHARACTER, result);
        return result;
    }
}

export = CharacterService