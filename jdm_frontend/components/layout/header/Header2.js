import Link from "next/link"
import Menu from "../Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"


export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas, isSearch, handleSearch }) {
	return (
		<>
			<header className="header-section-2">
				<div className="container-fluid">
					<div id="header-sticky" className={`header-2 sticky`}>
						<div className="mega-menu-wrapper">
							<div className="header-main">
								<div className="header-left">
									<div className="logo">
										<Link href="/" className="header-logo">
											{/* <img
												src="assets/img/logo/black-logo.svg"
												alt="logo-img"
											/> */}
											<img src="/assets/img/logo/black-logo.jpg" alt="logo-img" />
										</Link>
									</div>
								</div>
								<div className="header-right d-flex justify-content-end align-items-center">
									<div className="mean__menu-wrapper">
										<div className="main-menu">
											<Menu />
										</div>
									</div>
									<div className="header-button">
										<Link href="contact" className="theme-btn">
											GAT A QUOTE <i className="fa-regular fa-arrow-right" />
										</Link>
									</div>
									<div className="search-item social-links d-none d-xl-flex">
										<Link href="https://www.facebook.com/profile.php?id=100090951694492" target="_blank">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link href="https://x.com/JDMGroup" target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon icon={faXTwitter} />
										</Link>
										<Link href="https://www.instagram.com/we_jdm/" target="_blank">		
											<i className="fab fa-instagram" />
										</Link>
										<Link href="https://www.linkedin.com/company/27983246" target="_blank">
											<i className="fab fa-linkedin-in" />
										</Link>
										{/* <div className="social-icon d-flex align-items-center">
										</div> */}
									</div>
									<div className="header__hamburger d-xl-none my-auto">
										<div className="sidebar__toggle" onClick={handleOffCanvas}>
											<i className="fas fa-bars" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
