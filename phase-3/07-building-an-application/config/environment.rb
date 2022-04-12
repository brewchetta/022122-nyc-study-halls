ENV['RACK_ENV'] ||= 'development'

require 'bundler/setup'
Bundler.require

require_all 'app'
