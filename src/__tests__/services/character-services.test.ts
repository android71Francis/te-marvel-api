import CharacterService from '../../services/character-services';
const characterService = new CharacterService();

describe('Character Services', () => {
    it('should return the collections of characters', async () => {
      const response = await characterService.getAll();
      expect(response).toEqual({some: 'data'})
    })

    it('should return the details of character based on ID', async () => {
        const response = await characterService.getById('12323');
        expect(response).toEqual({some: 'data'})
      })
})