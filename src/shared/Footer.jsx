

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <footer className="grid lg:grid-cols-3 grid-cols-2 gap-5 p-10 bg-neutral text-neutral-content text-center justify-center">
                <nav>
                    <header className="footer-title">Company</header>
                    <div className="flex flex-col">

                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <div className="flex flex-col">

                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="flex flex-col">

                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Instagram</a>
                        <a className="link link-hover">Facebook</a>
                        <a className="link link-hover">Github</a>
                    </div>
                </nav>
                <nav className="">
                    <header className="footer-title">Explore</header>
                    <div className="flex flex-col">

                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Enterprise</a>
                        <a className="link link-hover">Security</a>
                        <a className="link link-hover">Pricing</a>
                    </div>
                </nav>
                <nav className="">
                    <header className="footer-title">Apps</header>
                    <div className="flex flex-col">

                        <a className="link link-hover">Mac</a>
                        <a className="link link-hover">Windows</a>
                        <a className="link link-hover">iPhone</a>
                        <a className="link link-hover">Android</a>
                    </div>
                </nav>
                <form className="col-span-2 md:col-span-1">
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;