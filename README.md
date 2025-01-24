# Unhandled Promise in Next.js API Call

This repository demonstrates a common error in Next.js applications: improperly handling the promise returned by a fetch API call.

The `about.js` file contains the buggy code.  The `aboutSolution.js` file provides the corrected version.

## Bug

The original `about.js` attempts to directly render the promise object returned by `fetch`. This results in the raw promise object being displayed instead of the actual data fetched from the API.

## Solution

The corrected `aboutSolution.js` uses `async/await` to properly handle the promise and render the actual data once it is resolved.  Error handling is also included to gracefully manage potential network issues.