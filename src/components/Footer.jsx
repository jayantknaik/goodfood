const Footer = ({type}) => {
    return (
        <div className={type == 'fixed' ? "footer fixed" : "footer"}>All Rights Reserved. &copy; 2024 goodfood | Made with ❤️ in India</div>
    )
}

export default Footer;