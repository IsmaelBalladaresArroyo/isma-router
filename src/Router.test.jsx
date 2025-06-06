import {describe, it, expect, beforeEach, vi} from 'vitest';
import {render, screen,cleanup, fireEvent} from '@testing-library/react';
import { Router } from './Router';
import { Route } from './Route';
import { Link } from './Link';
import { getCurrentPath } from './getCurrentPath';

vi.mock('./getCurrentPath.js', () => ({
    getCurrentPath: vi.fn()
}))


describe('Router', () => {
    beforeEach (() => {
        cleanup()
        vi.clearAllMocks()
    })

    it("should render without problems", () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no rotes match', () => {

        getCurrentPath.mockReturnValue('/')

        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
              },
              {
                path: '/about',
                Component: () => <h1>About</h1>
              }
        ]
        render(<Router routes={routes} />);
        expect(screen.getByText('Home')).toBeTruthy()
    })

    it('should navigate using Links', async () => {
        getCurrentPath.mockReturnValueOnce('/')

        render(
            <Router>
                <Route
                path='/' Component={() => {
                    return (
                        <>
                            <h1>Home</h1>
                            <Link to='/about'>Go to About</Link>
                        </>
                    )
                }}
                />
                <Route path='/about' Component={() => <h1>About</h1>} />
            </Router>
        )
        
        const anchor = screen.getByText(/Go to About/)
        // Antes de hacer click, mockeamos el nuevo path
        getCurrentPath.mockReturnValue('/about')
        fireEvent.click(anchor)
        // Disparamos el evento PUSHSTATE manualmente
        window.dispatchEvent(new Event('pushstate'))

        const aboutTitle = await screen.findByText('About')
        expect(aboutTitle).toBeTruthy()
    })

})