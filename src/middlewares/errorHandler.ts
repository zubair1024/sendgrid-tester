import { AxiosError } from 'axios';
import { logger } from '../utils';

export function handleAxiosError(err: AxiosError) {
  if (err.response) {
    // The request was made, but the server responded with a non-2xx status code
    logger.error('Request failed with status:', err.response.status);
    logger.error('Response data:', err.response.data);
    logger.error('Response headers:', err.response.headers);
  } else if (err.request) {
    // The request was made, but no response was received
    logger.error('No response received:', err.request);
  } else {
    // Something happened in setting up the request that triggered an error
    logger.error('Error:', err.message);
  }
}

export function handleError(err: unknown) {
  if (err instanceof AxiosError) {
    return handleAxiosError(err);
  }
  return logger.error(err);
}
