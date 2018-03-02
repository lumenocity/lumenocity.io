const src = 'src'
const dist = 'build'

module.exports = {

  *scripts(task) {
    yield task.source(`${src}/*.js`).babel({
      presets: [
        [
          'env',
          { targets: { browsers: ["last 2 versions", "safari >= 7"] } }
        ]
      ]
    }).uglify().target(`${dist}/`)
  },

  *styles(task) {
    yield task.source(`${src}/*.scss`).sass().autoprefixer().target(`${dist}/`)
  },

  *html(task) {
    yield task.source(`${src}/*.html`).htmlmin().target(`${dist}/`)
  },

  *assets(task) {
    yield task.source(`${src}/public/*.*`).flatten({ levels: 1 }).target(`${dist}/`)
  },

  *build(task) {
    yield task.parallel([ 'scripts', 'styles', 'html', 'assets' ])
  },

  *watch(task) {
    yield task.watch(`${src}/*.js`, 'scripts')
    yield task.watch(`${src}/*.scss`, 'styles')
    yield task.watch(`${src}/**/*.html`, 'html')
    yield task.watch(`${src}/public/*.*`, 'assets')

    yield task.source('./').shell(`./node_modules/.bin/pushserve --path=${dist}`).target(`${dist}/`)
  }
}