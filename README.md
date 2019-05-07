<p align="center">
  <a href='https://www.omise.co'>
    <img src="https://cdn.omise.co/assets/omise-logo/omise-wordmark.png" width="300" />
  </a>
</p>
<br />

**Tamboon React** is a code challenge for frontend developer.

## Usage

### Install dependencies

```bash
yarn
```

### Running the web app

```bash
yarn run client
```

### Running mocked server

```bash
yarn run server
```

### Running unit test

```bash
yarn run test
```

or in watch mode

```bash
yarn run test:watch
```

## Notes

### React Hooks

I've never tried Hooks before, but after having a look, I think it's promising. After trying with this project, I see it helps to:

- reduce boilerplate code.
- easy to use and compose hooks together.
- no need to convert functional component to class if we need to use state or side effects.

### Flow typed

There are two options when choosing typed system for js project: `Typescript` and `Flow`.

I choose Flow because it's easier to apply with existing code base, just put some configs and add comment `// @flow` at the top of any js file, it will just work, we can still use the same webpack config with babel. One of the cons is the community of Flow is not big as Typescript, and Flow is used mostly in React applications only.

### Design system

Design system is recommended for any projects, it helps to develop app faster and branding the product easier. We will define rules like colors, spacing, fonts, ... at the beginning and put as configs. With `styled-components` and `design-system` library, it's easier to setup this system. `design-system` library also recommends another way to reuse and style the component, by allowing to put styles directly in component.

https://github.com/styled-system/styled-system

https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee.

### React-testing-library

KentCDodds, author of this library, recommends us a better way to write test for component. There's no more shallow rendering component to test like `Enzyme` library.

https://github.com/testing-library/react-testing-library

https://kentcdodds.com/blog/why-i-never-use-shallow-rendering.

## Scenario

Once upon a time.. nope!  
So here, you have been temporarily hired by Omise and assigned to work on the charity donation project which the previously assigned front-end developer and designer got the urgent matters to solve, so they will not be able to finish the project on time..

Fortunately, the API server is already done. You will need to grab on the requirements and complete the project while ensuring the application to have great engineering and well-design ✨

![tamboon-react-screenshot](https://git.omise.co/storage/user/56/files/b407c6c4-ad09-11e7-8792-dc5b468333df)

## Mission

Well, grap your guns, stock up your food and bring down your armor. We gonna need it for tonight!  
**Here are the tasks you must complete:**

- [x] Complete the application according to the design (image above).
- [x] Complete these features that are not in the design (you have freedom to design and position to display).
  - Display all donation amount.
  - Display a message when paid.
- [x] Make the donation feature works correctly.
  - Amount in all donations should be displayed correctly despite users close and come back later.
  - Database (db.json) should have the new valid data when paid.
- [x] Refactor the code to be more readable and enhance reusability.
- [x] Use only [styled-component](https://www.styled-components.com/) for styling part.
- [x] Write a nice commit message and order it well.
- [x] Display well in most modern browser (Google Chrome, Safari, Firefox).

#### Bonus

- [x] Supporting different screen sizes (responsive).
- [x] Write helpers or components unit tests with [jest](https://facebook.github.io/jest/).

## Rules

Desire to win the war? Well, to make it a little more fun, please remember that

**You cannot:**

- Change existing behaviors.
- Change the API server.
- Change from JS to other languages.

**In the other hand, feel free to:**

- Improve the design to have better UI and UX.
- Re-organize the codebase.
- Create new modules/methods/components.
- Modify existing code.
- Add new packages.
- Update `webpack` config.
- Take reasonable time to complete the challenge, no need to rush.
- Edit `README.md` to add documentation. What have you done or how to run or test your app?

**Note**: You can see design inside folder `resources`.

## Surprise us!

Please remember that your patch must consist of multiple separate commits. Your commit message must communicate clearly what has been done in each commit.

If you notice more bugs in the original implementation you can add fixes for those as well. You won't be penalized if you don't. However we ask you not to add more features than the one given in the mission list.

Let's rock! :metal:
