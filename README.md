## Slync Programming Test - Twitter Client

Implement a simple *Twitter client* as a single page application which initially shows general public tweets. Allow the user to specify a Twitter handle to view the tweets from. When a user requests a specific Twitter handle and the UI shows the latest tweets from that handle, there should also be a way to filter / search tweets by text. Also, once the user has selected a handle to view the Tweets from, the UI should periodically update with newer Tweets.

### Grading Criteria

* UI Design
* Architecture
* Maintainability
* Testing

### Technology

You can pick any frontend and/or backend technologies you are familiar with. You can and should use the Twitter API.

### Submission

You will submit to the private git repo we have added you to. When done, make sure you provide instructions on how to run your code (preferably as a docker image) in the README.

Note: *Do not* create a Twitter clone and *do not* share any Twitter API secrets in your code.

Best of luck!
Slync Engineering Team

### Deployment

In the /back folder find .env_sample file. Copy and rename it to .env
Paste your Twitter API keys.

You can use Docker to run the project

```sh
docker-compose build
docker-compose up
```
OR

1. Run `npm install`
2. Run `npm start`
3. Run tests with `npm test` -- you may have to press "a" to run all tests
