# grunt-gettext-scrape

> Grunt wrapper for the gettext-scrape package that generates POT files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-gettext-scrape --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gettext-scrape');
```

## The "gettext_scrape" task

### Overview
In your project's Gruntfile, add a section named `gettext_scrape` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  gettext_scrape: {
	files: {
	  'target.pot': ['input.file', 'input.file']
	}
  },
});
```
