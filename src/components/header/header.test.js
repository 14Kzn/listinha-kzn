import { render, screen } from '@testing-library/react'
import Header from './header'

describe('header component', () => {
    it('should render the correct header', async () => {
        render(<Header />)

        const logoImage = await screen.findAllByAltText('logoTipo minha listinha com imagem de aviao')
    } )
} )