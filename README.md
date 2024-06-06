# Task 2. Serving SPA

## Task 2.1

Manually createsS3 Bucket with blocked access: <https://nodejs-aws-shop-react-overdd.s3.amazonaws.com/index.html>
Manually created Cloudfront distribution: d1gyg7vkjdtt6t.cloudfront.net

## Task 2.2

Automatically created S3 bucket with blocked access: <https://nodejs-aws-shop-react-0f84ab66-2856-4c3d-9f69-7491550dc928.s3.amazonaws.com/index.html>
Automatically created Cloudfront distribution: d3ogvhqiah48wf.cloudfront.net

To run an automated deployment:
### `npm run cdk:deploy`

# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.
