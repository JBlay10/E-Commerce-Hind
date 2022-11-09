# E-Commerce Hind

This project is 100% back-end without the front-end it has to be ran/tested in Insomnia. It allows you to GET, PUT, POST, and DELETE the database from the api routes /products, /categories, and /tags. One can also search for specific data ex.: /products/:id.

<!-- [Walkthrough Video]() -->

## Table of Contents

- [Installation](#installation-usage-and-test)
- [Video Demo](#video-demo)
- [License](#license)
- [Contact me](#contact)

## Installation, Usage and Test

1. In the console/terminal to install npm packages:
```
npm i
```
2. Remove .EXAMPLE from .env file.

3. Create the database by running:
```
mysql -u *<username>* -p
```
- After running mysql use:
```
SOURCE db/schema.sql
```
4. Access data from seeds:
```
npm run seed
```
5. Initialize server:
```
npm start
```

## Video Demo

![gif example]()

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact Me
- Github: [JBlay10](https://github.com/JBlay10)
- Email: joseblay10@gmail.com
