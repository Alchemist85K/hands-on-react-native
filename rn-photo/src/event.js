import { EventEmitter } from 'eventemitter3';

const event = new EventEmitter();

export const EventTypes = {
  REFRESH: 'refresh',
};

export default event;
