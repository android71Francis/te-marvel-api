import { Request, Response, Router } from 'express';
import { errorHandler } from '../../utils/ErrorHandler';
import CharacterService from '../../services/character-services';

const router = Router();

export default (): Router => {
  router.get('/characters', async (req: Request, res: Response) => {
    try {
      const characterService = new CharacterService();
      const result = await characterService.getAll();
      return res.json(result).status(200).end();
    } catch (error) {
      return errorHandler(error, res);
    }
  });

  router.get('/characters/:id', async (req: Request, res: Response) => {
    try {
      const characterService = new CharacterService();
      const result = await characterService.getById(req.params.id)
      return res.json(result).status(200).end();
    } catch (error) {
      return errorHandler(error, res);
    }
  });

  return router;
};
