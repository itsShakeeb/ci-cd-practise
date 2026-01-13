import { describe, it, } from 'vitest'
import { render } from '@testing-library/react'
import App from '../page'

describe('Page Should Mount correctly', () => {
    it('Page should run without exploding', () => {
        const { getByText } = render(<App />)
        const h1Element = getByText('To get started, edit the page.tsx file.')
        expect(h1Element).toBeTruthy()

    })
})