import { vi } from 'vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import ResizeObserver from 'resize-observer-polyfill'

global.ResizeObserver = ResizeObserver

vi.mock('tensorflow', () => ({
  processCanvas: vi.fn()
}))

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})