Travel Visa Letter
==================

Request personal information from the Applicant as listed on [info.yml.template](./info.yml.template) using an encrypted channel of communication.
See [info.yml.sample](./info.yml.sample) as an example.

Upon receiving the information, the Organizer can do the following to generate a PDF invitation letter:

1. Create **info.yml** of the Applicant's information in the root directory

1. Create **signature.png** of the Organizer's signature in the root directory

1. Run `npm install`

1. Run `npm run build`

Find the generated PDF file with the Applicant's name and send it to the Applicant over an encrypted channel.
