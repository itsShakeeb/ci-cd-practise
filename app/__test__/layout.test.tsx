import { describe, it, } from 'vitest'
import { render, screen } from '@testing-library/react'
import RootLayout from '../layout'

vi.mock('next/font/google', () => ({
    Geist: () => ({ variable: 'geist-sans' }),
    Geist_Mono: () => ({ variable: 'geist-mono' }),
}))
describe('RootLayout', () => {
    it('renders children inside body', () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>
        )

        expect(screen.getByText('Test Content')).toBeInTheDocument()
    })
})