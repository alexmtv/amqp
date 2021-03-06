'use strict'
// @flow

import { createChannel, consumeFrom, publishTo } from './amqp'
import { createChannel as createManagedChannel } from './amqpcm'
import parseAndHandleMessage from './parseAndHandleMessage'
import defaultParseAndHandleMessage from './defaultParseAndHandleMessage'
import parseJsonMessage from './parseJsonMessage'

export {
  createChannel,
  createManagedChannel,
  consumeFrom,
  publishTo,
  parseAndHandleMessage,
  defaultParseAndHandleMessage,
  parseJsonMessage
}
