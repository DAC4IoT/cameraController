# Camera Controller Service

This service operates as a controller for a live streaming camera module on Raspberry Pi.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/)

### Installing

1. Clone this repository
1. Open CLI
2. Change into the cloned repository via CLI
3. Execute `npm install` on CLI

Congratulations! :tada: - You are ready to start the program with the command `node app.js`. Alternatively you can run `swagger project start`, if you want an automatically restart of the server by changing files in this project. The command `swagger project edit` lets you edit the [OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) definition for this RESTful driven service. The service is reachable via `HTTPS` and `HTTP` at the `port 10010` on the local machine (`localhost`) with `/api/v1` as base path.

You can find the [API documentation here](https://tobiasstraub.com). <!-- TODO: Replace with the correct URL -->

## Running the tests

At the moment, there are no automatic tests available. You can test the API via [curl](https://curl.haxx.se/).

## Deployment

TODO

## Built With

* [Node.js](https://rometools.github.io/rome/) - JavaScript Runtime
* [Express](https://expressjs.com/) - Web Application Framework
* [Swagger](https://swagger.io/) - API Design Tools

## Contributing

Feel free to contribute.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/DACftIoT/doorController/tags).

## Authors

* **Tobias Straub**

See also the list of [contributors](https://github.com/DACftIoT/doorController/contributors) who participated in this project.

## License

[GNU Affero General Public License v3.0](https://github.com/DAC4IoT/cameraController/blob/master/LICENSE)

## Acknowledgments

No acknowledgments to show at the moment
