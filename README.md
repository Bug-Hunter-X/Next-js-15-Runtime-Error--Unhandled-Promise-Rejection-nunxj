# Next.js 15 Runtime Error: Unhandled Promise Rejection

This repository demonstrates a runtime error encountered in a Next.js 15 application. The error is an 'Unhandled Promise Rejection', which can occur due to various reasons, including improper error handling in asynchronous operations or issues with data fetching.

## Bug Report

The bug is reproduced by running the app and navigating to the home page (index.js). A runtime error is thrown within a certain scenario, such as when an asynchronous operation fails without proper error handling. This error leads to the application's instability.

## Solution

The provided solution addresses the issue by handling possible errors within the asynchronous operation. In addition, other best practices in error handling are followed. This prevents the 'Unhandled Promise Rejection' and ensures that the application behaves gracefully even during unexpected situations.

## How to reproduce the issue

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the home page.