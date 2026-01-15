import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const config = defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        setupFiles: './vitest.setup.ts',
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'json','lcov'],
            include: ['app/**/*.{ts,tsx,js,jsx}'],
            exclude: [
                '**/__tests__/**',
                '**/*.test.*',
                '**/*.spec.*'
            ],
            thresholds: {
                statements: 80,
                lines: 80,
                functions: 80,
                branches: 80
            }
        }
    }
})

export default config