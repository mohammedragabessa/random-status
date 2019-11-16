import { Request, RestBindings, get, ResponseObject } from '@loopback/rest';
import { inject } from '@loopback/context';

/**
 * OpenAPI response for random status ()
 */
const RANDOM_STATUS_RESPONSE: ResponseObject = {
  description: 'Random Status Response',
  content: {
    'application/json': {
      schema: {
        type: 'boolean'
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class RandomStatusController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  // Map to `GET /RandomStatus`
  @get('/RandomStatus', {
    responses: {
      '200': RANDOM_STATUS_RESPONSE,
    },
  })
  getRandomStatus(): boolean {
    // Reply with a greeting, the current time, the url, and request headers
    return Math.random() >= 0.5;
  }
}
