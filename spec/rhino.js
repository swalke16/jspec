
load('spec/support/env.js')
window.location = 'spec/fixtures/test.html'
load('spec/support/jquery.js')
load('lib/jspec.js')
load('lib/jspec.xhr.js')
load('lib/jspec.jquery.js')
load('spec/unit/helpers.js')
load('spec/unit/spec.grammar-less.js')

JSpec
.exec('spec/unit/spec.grammar.js')
.exec('spec/unit/spec.js')
.exec('spec/unit/spec.matchers.js')
.exec('spec/unit/spec.utils.js')
.exec('spec/unit/spec.jquery.js')
.exec('spec/unit/spec.fixtures.js')
.exec('spec/unit/spec.shared-behaviors.js')
.exec('spec/unit/spec.modules.js')
.exec('spec/unit/spec.xhr.js')
.exec('spec/unit/spec.jquery.xhr.js')
.run({ reporter: JSpec.reporters.Terminal, failuresOnly: true, fixturePath: 'spec/fixtures' })
.report()
