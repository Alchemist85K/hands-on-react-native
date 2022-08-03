import { EventEmitter } from 'eventemitter3';

const event = new EventEmitter();

export const EventTypes = {
  REFRESH: 'refresh',
  DELETE: 'delete',
  UPDATE: 'update',
};

export default event;
