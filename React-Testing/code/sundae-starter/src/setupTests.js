import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mocks/server';

// Establish API mocking before all tests
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests
// so thry don't affect ohter tests
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished
afterAll(() => server.close()) 