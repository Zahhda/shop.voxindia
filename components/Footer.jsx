import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/vox.india.interiors",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vox.india.interior/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/voxindiainterior",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.06 3.16 9.38 7.63 11.01-.11-.93-.21-2.36 0-3.37.23-1.1 1.5-7.43 1.5-7.43s-.37-.74-.37-1.82c0-1.7.99-2.97 2.22-2.97 1.05 0 1.56.79 1.56 1.74 0 1.06-.68 2.64-1.03 4.11-.29 1.22.6 2.2 1.78 2.2 2.13 0 3.78-2.25 3.78-5.48 0-2.27-1.54-3.85-4.71-3.85-3.53 0-5.74 2.65-5.74 5.38 0 1.06.41 2.2.92 2.82.1.12.11.22.08.34-.09.37-.3 1.22-.34 1.38-.05.22-.17.26-.4.16-1.5-.7-2.44-2.88-2.44-4.65 0-3.79 2.75-7.27 7.96-7.27 4.17 0 7.41 2.99 7.41 6.99 0 4.2-2.65 7.58-6.33 7.58-1.23 0-2.38-.66-2.77-1.44l-.75 2.86c-.27 1.03-1 2.31-1.48 3.1 1.1.34 2.26.52 3.46.52 6.63 0 12-5.37 12-12S18.63 0 12 0z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/vox-india/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.851-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.605 0 4.271 2.372 4.271 5.455v6.286zM5.337 7.433a2.07 2.07 0 110-4.141 2.07 2.07 0 010 4.141zM6.675 20.452H3.999V9h2.676v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@voxindia2018",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19.615 3.184c-1.69-.12-8.485-.12-8.485-.12s-6.799 0-8.485.12a3.333 3.333 0 00-2.366 2.366c-.123 1.696-.123 5.232-.123 5.232s0 3.536.123 5.232a3.333 3.333 0 002.366 2.366c1.69.12 8.485.12 8.485.12s6.796 0 8.485-.12a3.333 3.333 0 002.366-2.366c.123-1.696.123-5.232.123-5.232s0-3.536-.123-5.232a3.333 3.333 0 00-2.366-2.366zm-10.368 8.736v-5.284l5.108 2.642-5.108 2.642z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="mt-[4%] bg-gray-100 text-gray-700 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Image src={assets.logo} alt="VOX Logo" width={80} height={40} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Premium slatted wall and ceiling panels for modern interiors.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            {socialLinks.map(({ name, href, svg }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-red-700"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

   {/* Products */}
<div>
  <h3 className="font-semibold mb-4">Products</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link href="/product/687feaf9fb651e62afca33a1" className="hover:underline">
        S-Line
      </Link>
    </li>
    <li>
      <Link href="/product/688078afb931c44cb2ea3fe2" className="hover:underline">
        M-Line
      </Link>
    </li>
    <li>
      <Link href="/product/68807aaab931c44cb2ea4119" className="hover:underline">
        L-Line
      </Link>
    </li>
  </ul>
</div>


        {/* Information */}
        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies-policy" className="hover:underline">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/returns-cancellation" className="hover:underline">
                Returns &amp; Cancellation
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="hover:underline">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="/warranty-policy" className="hover:underline">
                Warranty Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <address className="not-italic text-sm space-y-2">
            <p>1202, 100-ft Rd</p>
            <p>Indiranagar</p>
            <p>Bengaluru, KA-560008</p>
            <p>
              <a href="tel:+919528500500" className="hover:underline text-red-700">
                +91 9528-500-500
              </a>
            </p>
            <p>
              <a href="mailto:customercare@voxindia.co" className="hover:underline">
                customercare@voxindia.co
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
        © 2025 VOX Interior and Exterior Solutions Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
