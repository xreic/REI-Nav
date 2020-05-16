# REI Co-op Nav Bar Mockup

Mockup of the REI store page's navigation bar and search functionality. Now with Redux!

## Table of Contents

- [REI Co-op Nav Bar Mockup](#rei-co-op-nav-bar-mockup)
  - [Table of Contents](#table-of-contents)
  - [Microservices](#microservices)
  - [Usage](#usage)
  - [Requirements](#requirements)
  - [Development](#development)
    - [Installing Dependencies](#installing-dependencies)
    - [Proxy Server](#proxy-server)

## Microservices

1. [Nav](https://github.com/HRLA-35-FEC-CBDE/REI-Nav)
   1. [Dockerized](https://github.com/HRLA-35-FEC-CBDE/REI-Nav-Container)
2. [Body](https://github.com/HRLA-35-FEC-CBDE/Brandon_body)
3. [Reviews](https://github.com/HRLA-35-FEC-CBDE/chris_reviews)

## Usage

- Install dependencies.
  - [ ] npm install
- Run scripts.
  - [ ] npm run react
  - [ ] npm start
  - [ ] npm run seed (Only run if you want to populate the database with items)
- Start mongod in terminal or command prompt (If necessary)
- [localhost:3100](http://localhost:3100)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.16.2 (I just put the version I run on. Good luck.)
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Proxy Server

- [Proxy](https://github.com/HRLA-35-FEC-CBDE/REI-Nav-Proxy)
