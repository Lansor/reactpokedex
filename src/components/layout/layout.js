import Navigation from '../header/navigation'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <main className='App-main'>{children}</main>

            <footer>&copy;Martins Killian et Nathan Barbier</footer>
        </>
    )
}

export default Layout
