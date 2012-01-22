require 'rbconfig'
HOST_OS = RbConfig::CONFIG['host_os']
source 'http://rubygems.org'
gem 'rails', '3.1.3'
group :assets do
  gem 'sass-rails',   '~> 3.1.5'
  gem 'coffee-rails', '~> 3.1.1'
  gem 'uglifier', '>= 1.0.3'
end
gem 'jquery-rails'
=begin
if HOST_OS =~ /linux/i
  gem 'therubyracer', '>= 0.9.8'
end
=end
gem "rspec-rails", ">= 2.8.0.rc1", :group => [:development, :test]
gem "database_cleaner", ">= 0.7.0", :group => :test
gem "mongoid-rspec", ">= 1.4.4", :group => :test
gem "factory_girl_rails", ">= 1.4.0", :group => :test

=begin
gem "guard", ">= 0.6.2", :group => :development
case HOST_OS
  when /darwin/i
    gem 'rb-fsevent', :group => :development
    gem 'growl', :group => :development
  when /linux/i
    gem 'libnotify', :group => :development
    gem 'rb-inotify', :group => :development
  when /mswin|windows/i
    gem 'rb-fchange', :group => :development
    gem 'win32console', :group => :development
    gem 'rb-notifu', :group => :development
end
gem "guard-bundler", ">= 0.1.3", :group => :development
gem "guard-rails", ">= 0.0.3", :group => :development
gem "guard-livereload", ">= 0.3.0", :group => :development
gem "guard-rspec", ">= 0.4.3", :group => :development
=end

gem "bson_ext", ">= 1.3.1"
gem "mongoid", ">= 2.3.3"
gem "devise", ">= 1.5.0"

gem 'requirejs-rails'

gem "thin"
gem "heroku"

=begin
group :production do
  gem 'therubyracer-heroku' ">= 0.9.8"
end
=end
