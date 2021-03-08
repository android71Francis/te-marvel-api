import md5 from 'md5';
import HttpClient from '../utils/http-client';
import { Character } from '../types/characters-types';
import { MARVEL_API_ENDPOINTS, MARVEL_API_PUBLIC_KEY, MARVEL_API_PRIVATE_KEY } from '../config';

class MarvelApi extends HttpClient {
    private static classInstance?: MarvelApi;
  
    private constructor() {
      super(MARVEL_API_ENDPOINTS, {
        ts: new Date().getTime(),
        apikey: MARVEL_API_PUBLIC_KEY,
        hash: md5(`${new Date().getTime()}${MARVEL_API_PRIVATE_KEY}${MARVEL_API_PUBLIC_KEY}`)
      });
    }
  
    public static getInstance() {
      if (!this.classInstance) {
        this.classInstance = new MarvelApi();
      }
  
      return this.classInstance;
    }
  
    public getCharcters = () => this.instance.get(`/characters?orderBy=-modified&limit=100`);
    public getCharcter = (id: string) => this.instance.get(`/characters/${id}`);
}

export = MarvelApi;