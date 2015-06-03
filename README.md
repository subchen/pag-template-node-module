[![Build Status](https://travis-ci.org/subchen/pag-template-node-module.svg?branch=master)](https://travis-ci.org/subchen/pag-template-node-module)
[![NPM Repo](https://img.shields.io/npm/v/pag-template-node-module.svg)](https://www.npmjs.com/package/pag-template-node-module)
[![License](http://img.shields.io/badge/License-Apache_2-red.svg?style=flat)](http://www.apache.org/licenses/LICENSE-2.0)

# pag-template-node-module

node-module template for [pag](https://github.com/subchen/pag)

# Installation

```shell
npm install pag-template-node-module -g
```

# Example

```shell
# create a node.js module
mkdir test
cd test
pag --template node-module
```

**Output**
```
Press ^C at any time to quit.

Project name: snack-cli
Project version: (1.0.0)
Project description: cli parser for node.js

Is this ok? [Y/n] 

Found 14 files to create ...

create .gitignore
create .jsbeautifyrc
create .jscsrc
create .jshintrc
create .npmignore
create .travis.yml
create Gruntfile.js
create LICENSE
create README.md
create index.js
create lib/index.js
create package.json
create test/mocha.opts
create test/test-app.js

Successfully!
```

# License

Released under the [Apache 2 License](http://www.apache.org/licenses/LICENSE-2.0).

```
Copyright 2015 Guoqiang Chen

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
