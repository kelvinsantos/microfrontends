import Link from 'next/link';
import React from 'react';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/checkout">Checkout</Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      li > a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        padding-right: 10px;
        margin-left: 10px;
      }
    `}</style>
  </nav>
);

export default Nav;
