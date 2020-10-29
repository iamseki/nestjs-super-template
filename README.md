# First Idea - Example App

<p align="center">The main purpose of this project its to demonstrate a real world complex <strong>nestjs</strong> project with a lot of technologies involved.</p>

## Proposal :book:

We're going to solve a smart city problem, building the whole API that allow us to control and collect data about citizens and theirs smart home devices.

## Modeling :thinking:

### FR's
  - The citizen can live wherever the place in the earth planet(we're gonna to consider just the country).
  - Users profiles like: `admin` and `regular`.
  - Its nicelly to have the real time information about some devices.

### NFR's
  - `PGSQL` to persist users, countries and devices.
  - `MongoDB` to persist real data about devices.
  - `Nestjs` A Nodejs framework to develop our API.
  - May some `Cache` like `redis` or even in cache memory like `memoization`.

### BR's
  - Must be possible to register any amount of houses for each admin user.
  - The user Admin can sets who can control their home devices.
  - Anyone can see the main dashboard related to smart home information.
  - Devices can transmit information in realtime to API.
  - Devices can be controlled.

## Deployment :earth_americas:

