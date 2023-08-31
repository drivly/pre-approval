Pre-Approval
============

Pre-Approval is a web application that allows users to fill out a form to get pre-approved for a car loan. The application is built with React, Next.js, TailwindCSS and TypeScript and uses react-hook-form for form validation and submission. Slack messaging is built in as well to keep you notified of any new applicants

APIs Used
------------
- [700credit.apis.do](https://github.com/drivly/700credit.apis.do)
- [airtable.do](https://github.com/drivly/airtable.do)
- [build.vin](https://github.com/drivly/build.vin)
- [camel.case.do](https://github.com/drivly/camel.case.do)
- [concierge.vin](https://github.com/drivly/concierge.vin)
- [listing.vin](https://github.com/drivly/listing.vin)
- [stock.photos.vin](https://github.com/drivly/stock.photos.vin)

Get Your Own
------------

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/drivly/pre-approval.git)

Getting Started
---------------

To get started with Pre-Approval, clone the repository and install the dependencies:

`git clone https://github.com/drivly/pre-approval.git cd pre-approval`

Then you can install with running `yarn` or `npm install`

You'll also need to create a `.env.local` file in the root directory and add your SLACK_WEBHOOK_URL:

```bash
SLACK_WEBHOOK_URL=<your_slack_webhook_url>
```

Finally, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

You should now be able to access the application at [http://localhost:3000](http://localhost:3000).

Usage
-----

To use Pre-Approval, fill out the form with your personal information and submit it. Once submitted, the application will send a POST request to the `/api/pre-approval` endpoint, which will validate the form data and respond with a success or error message.

If the form data is valid, the application will display a success message using the `toast` component from the Sonner library and send a message to your SLACK_WEBHOOK_URL.

Contributing
------------

If you'd like to contribute to Pre-Approval, please fork the repository and create a new branch for your changes. Once you've made your changes, submit a pull request and we'll review it as soon as possible.

License
-------

Pre-Approval is open source software licensed under the MIT license. See the LICENSE file for more information.