/*
 * grunt-gettext-scrape
 * https://github.com/r4wizard/grunt-gettext-scrape
 *
 * Copyright (c) 2016 Peter Corcoran
 * Licensed under the LGPL license.
 */

'use strict';

var Gettext = require('gettext-scrape');
var async = require('async');
var _ = require('lodash');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('gettext_scrape', 'Grunt wrapper for the gettext-scrape package that generates POT files', function() {
		var done = this.async();

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			formats: {
				gettext: true,
				underscore: false,
				double_underscore: true
			},
			custom_rules: {
				single: [],
				plural: []
			},
			rules: {
				single: [/__\(.+?\)/g,   /gettext\(.+?\)/g],
				plural: [/__n\(.+?\)/g,  /ngettext\(.+?\)/g]
			}
		});

		var parser = new Gettext.Parser.Simple(options);
		var generator = new Gettext.Generator.POT({});

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {
			parser.reset();
			_.each(grunt.file.expand({}, f.src), function(item) {
				if(grunt.file.isDir(item))
					return;
				parser.parse(item);
			});
			var output = generator.generate(parser.getMessages());
			grunt.file.write(f.dest, output);
			grunt.log.writeln('File "' + f.dest + '" created with ' + Object.keys(parser.getMessages()).length + ' strings.');
		});
		done();
	});
};
