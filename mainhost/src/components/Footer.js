import React from 'react'
const Footer = () => {
    return (
        <footer className="footer">
            <div>
                © {new Date().getFullYear()} ShopSphere — Built with ❤️ using React 19 +
                Module Federation
            </div>
        </footer>
    )
}
export default Footer
