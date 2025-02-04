import Pool = require('./pool')
import MockAgent = require('./mock-agent')
import { Interceptable, MockInterceptor } from './mock-interceptor'
import Dispatcher = require('./dispatcher')

export = MockPool

/** MockPool extends the Pool API and allows one to mock requests. */
declare class MockPool extends Pool implements Interceptable {
  constructor(origin: string, options: MockPool.Options);
  /** Intercepts any matching requests that use the same origin as this mock pool. */
  intercept(options: MockInterceptor.Options): MockInterceptor;
  /** Dispatches a mocked request. */
  dispatch(options: Dispatcher.DispatchOptions, handlers: Dispatcher.DispatchHandlers): void;
  /** Closes the mock pool and gracefully waits for enqueued requests to complete. */
  close(): Promise<void>;
}

declare namespace MockPool {
  /** MockPool options. */
  export interface Options extends Pool.Options {
    /** The agent to associate this MockPool with. */
    agent: MockAgent;
  }
}
