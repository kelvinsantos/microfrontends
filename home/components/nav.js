import Link from "next/link";
import React from "react";

const Layout = ({ children }) => (
  <div className="layout">
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
    <main>{children}</main>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: #f4f7fc;
      }
      .layout {
        display: flex;
        min-height: 100vh;
        background: #f4f7fc;
      }
      nav {
        width: 210px;
        color: white;
        padding: 30px 20px;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      }
      ul {
        list-style: none;
        padding: 0;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
      }
      li {
        margin-bottom: 20px;
      }
      a {
        display: block;
        color: #ecf0f1; /* Light text color */
        text-decoration: none;
        font-weight: 600;
        padding: 10px 15px;
        border-radius: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      a:hover {
        background-color: #3498db; /* Highlight color on hover */
        color: white; /* Change text color on hover */
      }
      main {
        flex: 1;
        margin-left: 250px; /* Ensure content doesn't overlap with sidebar */
        padding: 40px;
        background: #ffffff;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
      }

      /* Responsive design */
      @media screen and (max-width: 768px) {
        .layout {
          flex-direction: column;
        }
        nav {
          width: 100%;
          height: auto;
          position: relative;
        }
        main {
          margin-left: 0;
        }
      }
    `}</style>
  </div>
);

export default Layout;
