import { Request, RestBindings, get, ResponseObject, param } from '@loopback/rest';
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

const RANDOM_STATUS_Array_RESPONSE: ResponseObject = {
  description: 'Random Status array Response',
  content: {
    'application/json': {
      schema: {
        type: 'array'
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


  @get('/RandomStatusArray/{num}', {
    responses: {
      '200': RANDOM_STATUS_RESPONSE,
    },
  })
  async getrandomArray(@param.path.number('num') count: number): Promise<boolean[]> {
    let result = [];
    for (let i = 0; i < count; i++) {
      result.push(Math.random() >= 0.5);
    }
    return result;
  }

}
