# React Library Template

A simple template for creating library packages for React.

This template setups a vite build for creating commonjs and esmodules of libraries.
It is configured to create them in `./dist/${name}` where name is the name in `package.json`, and auto includes all `peerDependencies` as `externals`.

Storybook is also setup by default.

## Usage

Clone this repo and then change the following in the `package.json`

- name: The name of your library
- main: The path/filename for the commonjs build. The filename should be the same as name.
- module: The path/filename for the esmodule build. The filename should be the same as name.
- exports
  -- import: The path/filename for the esmodule build. Should be the same as the module entry.
  -- require: The path/filename for the commonjs build. Should be the same as the main entry.

To learn more about what these configurations are, please see [Package entry points](https://nodejs.org/api/packages.html#package-entry-points)

Then you can run `npm run storybook` to view the storybook.
