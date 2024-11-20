import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the federated module with a fallback
const CheckoutPage = dynamic(
  () =>
    import('checkout/checkout').then((data) => {
      if (typeof data.getServerSideProps === 'function') {
        // Return a fallback component in case of failure
        return () => (
          <div>
            <h1>Shop Unavailable</h1>
            <p>We're sorry, but the checkout service is currently unavailable. Please try again later.</p>
          </div>
        );
      }

      return data
    }),
  {
    ssr: false, // Disable SSR for federated modules to prevent hydration issues
    loading: () => <p>Loading checkout...</p>, // Optional loading state
  }
);

const Checkout = () => <CheckoutPage />;

export default Checkout;
