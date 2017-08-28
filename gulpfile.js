var autoprefixer = require('gulp-autoprefixer'),
  build = require('gulp-build'),
  concat = require('gulp-concat'),
  dependencies = require('./dependencies.json'),
  gulp = require('gulp'),
  less = require('gulp-less'),
  optional = require('optional'),
  rename = require('gulp-rename');

var cache = optional('gulp-cached'),
 del = optional('del'),
 runSequence = optional('run-sequence'),
 gulpif = optional('gulp-if'),
 cleanCSS = optional('gulp-clean-css'),
 sourcemaps = optional('gulp-sourcemaps'),
 uglify = optional('gulp-uglify'),
 os = optional('os'),
 prettify = optional('gulp-jsbeautifier'),
 jsbeautifyconfig = optional('.jsbeautifyconfig');


var config = optional(os.homedir() + '/tssa-gulp-config.json');
var styles = './src/assets/styles/app.less',
images = ['./src/assets/images/**/*.*'],
locales = ['./src/assets/i18n/*.json'],
noCompileFiles =['./src/index.html'],
libraries=['./node_modules/**/*.*'],
dist="./dist",
watch=['./src/**/*.*','index.html','dependencies.json'],
express_base_dir='./server/app';

gulp.task('clean-dist',function(){
  return del(dist+'/**/*',{force:true});
});

gulp.task('less',function(){
  return gulp.src(styles)
  .pipe(less())
  .on('error',error)
  .pipe(rename({
    basename: 'app',
    extname:'.css'
  }))
  .pipe(autoprefixer())
  .on('error',error)
  .pipe(gulp.dest(dist+'/public'));
});

gulp.task('js',function(){
  return gulp.src(dependencies)
  .pipe(build({GA_ID:'expats'}))
  .pipe(concat('expats.js'))
  .pipe(gulp.dest(dist+'/public'))
});

gulp.task('copy-files',function(){
  return gulp.src(noCompileFiles)
  .pipe(gulp.dest(dist+'/public'));
});

gulp.task('copy-locales',function(){
  return gulp.src(locales)
  .pipe(gulp.dest(dist+'/public/locales'));
});

gulp.task('copy-images',function(){
  return gulp.src(images)
  .pipe(gulp.dest(dist+'/public/images'));
});

gulp.task('copy-libraries',function(cb){
  return gulp.src(libraries)
  .pipe(gulp.dest(dist+'/public/bower_components'));
});

gulp.task('compile',['less','js','copy-files','copy-locales','copy-images','copy-libraries'],function(){});

gulp.task('clean-compile',function(cb){
  runSequence('clean-dist','compile',cb);
});

gulp.task('default',['compile'],function(){});

gulp.task('build-deploy-express',function(cb){
  runSequence(['clean-compile','clean-express'],'copy-express',cb);
});

gulp.task('deploy-express',function(cb){
  runSequence('clean-express','copy-express',cb);
});

gulp.task('copy-express',function(){
  return gulp.src(dist+'/**/*')
  .pipe(gulp.dest(express_base_dir));
});

gulp.task('clean-express',function(){
  return del(express_base_dir+'/public/**/**',{force:true});
});
gulp.task('watch',["build-deploy-express"],function(){
  gulp.watch(watch,function(){
    runSequence('compile','copy-express')
  });
})

function error(err){
  this.emit("end");
}
