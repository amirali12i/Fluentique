import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * A Higher-Order Component that wraps another component to protect it.
 * Only renders the wrapped component if the user is authenticated.
 * Otherwise, redirects to the login page.
 *
 * @param {Component} WrappedComponent - The component to wrap and protect.
 * @returns {Component} - Either the wrapped component or a redirection to the login page.
 */
const withAuth = (WrappedComponent) => {
  return (props) => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    
    // If no token found, redirect to login page
    if (!token) {
      return <Navigate to="/login" />;
    }
    
    // If token found, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
