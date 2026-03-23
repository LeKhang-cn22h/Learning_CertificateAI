import FooterLink from "./FooterLink";
export default function AppFooter(){
    return(
        <footer className="bg-black border-t mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center gap-4 text-white text-xl justify-center">
                <p className="text-center text-sm md:text-base">2026 GotikHub</p>
                <nav className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center-safe sm:gap-4 text-sm md:text-base">
                    <select className="bg-black text-white border border-gray-600 px-2 py-1 rounded">
                        <option value="en">English</option>
                        <option value="vi">Tiếng Việt</option>
                        <option value="ja">日本語</option>
                        <option value="ko">한국어</option>
                    </select>

                    <FooterLink href="/">About</FooterLink>
                    <FooterLink href="/">Become an Instructor</FooterLink>
                    <FooterLink href="/">Buy for my team</FooterLink>
                    <FooterLink href="/">Help</FooterLink>
                    <FooterLink href="/">Privacy & Teams</FooterLink>
                    <FooterLink href="/">Accessibility</FooterLink>
                    <FooterLink href="/">App</FooterLink>



                </nav>
            </div>
        </footer>
    )
}