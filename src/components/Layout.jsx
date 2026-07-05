import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Link2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from "lucide-react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

/* =========================================================
   NAVIGATION DATA
========================================================= */

const navItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "IT & Software Services",
        to: "/services",
      },
      {
        label: "AI & Automation",
        to: "/industries",
      },
      {
        label: "Cloud & DevOps",
        to: "/technologies",
      },
      {
        label: "Architecture & Design",
        to: "/architecture",
      },
    ],
  },
  {
    label: "Technologies",
    to: "/technologies",
  },
  {
    label: "Architecture",
    to: "/architecture",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Industries",
    to: "/industries",
  },
  {
    label: "Careers",
    to: "/careers",
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
];

const quickLinks = [
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Technologies", "/technologies"],
  ["Architecture", "/architecture"],
  ["Portfolio", "/portfolio"],
  ["Industries", "/industries"],
  ["Careers", "/careers"],
  ["Contact Us", "/contact"],
];

const serviceLinks = [
  ["Web Development", "/services"],
  ["Mobile App Development", "/services"],
  ["Custom Software Development", "/services"],
  ["AI & Automation", "/services"],
  ["Cloud & DevOps", "/technologies"],
  ["Architecture & Interior Design", "/architecture"],
];

const socialLinks = [
  {
    label: "LinkedIn",
    symbol: "in",
    href: "#",
  },
  {
    label: "Facebook",
    symbol: "f",
    href: "#",
  },
  {
    label: "Instagram",
    symbol: "◎",
    href: "#",
  },
  {
    label: "X",
    symbol: "X",
    href: "#",
  },
  {
    label: "YouTube",
    symbol: "▶",
    href: "#",
  },
];

/* =========================================================
   LOGO
========================================================= */

// function Logo({ light = false }) {
//   return (
//     <Link
//       to="/"
//       aria-label="Vedixa Technologies Home"
//       className="group flex shrink-0 items-center gap-3"
//     >
//       <div className="relative h-11 w-11 shrink-0">
//         <span className="absolute left-[2px] top-[4px] h-8 w-5 -skew-x-[28deg] rounded-sm bg-blue-600 transition-colors group-hover:bg-blue-700" />

//         <span className="absolute right-[2px] top-[4px] h-8 w-5 skew-x-[28deg] rounded-sm bg-blue-400 transition-colors group-hover:bg-blue-500" />

//         <span className="absolute bottom-[2px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-blue-500" />
//       </div>

//       <div className="leading-none">
//         <div
//           className={`text-[20px] font-black tracking-tight ${
//             light ? "text-white" : "text-slate-950"
//           }`}
//         >
//           VEDIXA
//         </div>

//         <div
//           className={`mt-1 text-[8px] font-semibold tracking-[0.22em] ${
//             light ? "text-slate-400" : "text-slate-500"
//           }`}
//         >
//           TECHNOLOGIES
//         </div>
//       </div>
//     </Link>
//   );
// }

function Logo({ footer = false }) {
  return (
    <Link
      to="/"
      aria-label="Vedixa Technologies Home"
      className="flex shrink-0 items-center"
    >
      <img
        src="/assets/01_horizontal_logo_dark.png"
        alt="Vedixa Technologies"
        className={`
          w-auto object-contain
          transition-transform duration-300
          hover:scale-[1.03]
          ${footer ? "h-20" : "h-18"}
        `}
      />
    </Link>
  );
}

/* =========================================================
   FOOTER LOGO
========================================================= */
function FooterLogo({ footer = false }) {
  return (
    <Link
      to="/"
      aria-label="Vedixa Technologies Home"
      className="flex shrink-0 items-center"
    >
      <img
        src="/assets/vedixa_dark_logo.png"
        alt="Vedixa Technologies"
        className={`
          w-auto object-contain
          transition-transform duration-300
          hover:scale-[1.03]
          ${footer ? "h-20" : "h-18"}
        `}
      />
    </Link>
  );
}

/* =========================================================
   DESKTOP NAV ITEM
========================================================= */

function DesktopNavItem({ item }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        end={item.to === "/"}
        className={({ isActive }) =>
          `relative flex h-20 items-center whitespace-nowrap text-[13px] font-semibold transition-colors duration-200 ${
            isActive
              ? "text-blue-600"
              : "text-slate-700 hover:text-blue-600"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {item.label}

            <span
              className={`absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-blue-600 transition-transform duration-300 ${
                isActive ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </>
        )}
      </NavLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `relative flex h-20 items-center gap-1 whitespace-nowrap text-[13px] font-semibold transition-colors duration-200 ${
            isActive
              ? "text-blue-600"
              : "text-slate-700 hover:text-blue-600"
          }`
        }
      >
        {item.label}

        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </NavLink>

      <div
        className={`absolute left-1/2 top-[70px] z-50 w-[280px] -translate-x-1/2 transition-all duration-200 ${
          dropdownOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
          {item.children.map((child) => (
            <Link
              key={child.label}
              to={child.to}
              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <span>{child.label}</span>

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN LAYOUT
========================================================= */

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* CLOSE MOBILE MENU ON ROUTE CHANGE */
 useEffect(() => {
  setMobileOpen(false);
  setMobileServicesOpen(false);

  window.scrollTo(0, 0);
}, [location.pathname]);

  /* HEADER SHADOW ON SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* DISABLE BODY SCROLL WHEN MOBILE MENU IS OPEN */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-slate-200 shadow-lg shadow-slate-900/[0.05]"
            : "border-slate-100"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
          <Logo />

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-[18px] xl:flex">
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl md:inline-flex"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 xl:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <div
          className={`absolute left-0 right-0 top-full border-t border-slate-100 bg-white shadow-2xl transition-all duration-300 xl:hidden ${
            mobileOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }`}
        >
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-5 py-5">
            <div className="mx-auto grid max-w-2xl gap-1">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label}>
                      <div className="flex items-center">
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            `flex-1 rounded-l-xl px-4 py-3 text-sm font-semibold transition ${
                              isActive
                                ? "bg-blue-50 text-blue-600"
                                : "text-slate-800 hover:bg-blue-50 hover:text-blue-600"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>

                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen(
                              (current) => !current
                            )
                          }
                          className="flex h-[44px] w-12 items-center justify-center rounded-r-xl text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                          aria-label="Toggle services menu"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              mobileServicesOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="ml-4 mt-1 grid gap-1 border-l border-blue-100 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.to}
                              className="rounded-lg px-4 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-800 hover:bg-blue-50 hover:text-blue-600"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}

              <Link
                to="/contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
              >
                Get In Touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}

      <main>
        <Outlet />
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#071a36] text-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr_1fr_1.15fr]">
            {/* BRAND */}
            <div>
              <FooterLogo light />

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                We combine technology, intelligence and design to create
                powerful digital products, intelligent automation and
                inspiring spaces that drive measurable impact.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    {social.symbol}
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-sm font-bold text-white">
                Quick Links
              </h3>

              <div className="mt-5 grid gap-3">
                {quickLinks.map(([label, to]) => (
                  <Link
                    key={to}
                    to={to}
                    className="text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-blue-400"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-sm font-bold text-white">
                Our Services
              </h3>

              <div className="mt-5 grid gap-3">
                {serviceLinks.map(([label, to]) => (
                  <Link
                    key={label}
                    to={to}
                    className="text-sm text-slate-400 transition duration-200 hover:translate-x-1 hover:text-blue-400"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-bold text-white">
                Contact Us
              </h3>

              <div className="mt-5 grid gap-4">
                <a
                  href="tel:+917081493932"
                  className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <Phone
                    size={17}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />

                  <span>
                    +91 70814 93932

                    <span className="mt-1 block text-xs text-slate-500">
                      Mon – Sat, 9:00 AM – 7:00 PM
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:hello@vedixa.com"
                  className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <Mail
                    size={17}
                    className="shrink-0 text-blue-400"
                  />

                  hello@vedixa.com
                </a>

                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />

                  <span>
                    Vedixa Technologies
                    <br />
                    Lucknow, Uttar Pradesh
                    <br />
                    India
                  </span>
                </div>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h3 className="text-sm font-bold text-white">
                Newsletter
              </h3>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Subscribe to receive updates about technology, AI,
                architecture and our latest projects.
              </p>

              <form
                className="mt-5"
                onSubmit={(event) => event.preventDefault()}
              >
                <label
                  htmlFor="footer-email"
                  className="sr-only"
                >
                  Email address
                </label>

                <div className="flex rounded-xl border border-white/10 bg-white/5 p-1.5 transition focus-within:border-blue-500">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-500"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>

              <p className="mt-3 text-[11px] leading-5 text-slate-500">
                By subscribing, you agree to receive updates from Vedixa
                Technologies.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <Globe2 size={15} className="text-blue-400" />
                Serving clients across industries and markets.
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Vedixa Technologies. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-white"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}