Travel Visa Letter
==================

Request personal information from the Applicant as listed on [info.yaml.template](./info.yaml.template) using an encrypted channel of communication.
See [info.yaml.sample](./info.yaml.sample) as an example.

Upon receiving the information, the Organizer can do the following to generate a PDF invitation letter:

1. Create **info.yaml** of the Applicant's information in the root directory

1. Create **signature.png** of the Organizer's signature in the root directory

1. Run `npm install`

1. Run `node generate.js`

Find the generated PDF file with the Applicant's name and send it to the Applicant over an encrypted channel.
