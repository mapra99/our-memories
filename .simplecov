#!/usr/bin/env ruby
# https://github.com/simplecov-ruby/simplecov
# https://rubydoc.info/gems/simplecov/SimpleCov/Configuration

SimpleCov.start 'rails' do
  enable_coverage :branch
  primary_coverage :branch

  minimum_coverage 83
  maximum_coverage_drop 5

  add_filter 'app/channels' # deferring until we need ActionCable
  add_filter 'app/jobs' # deferring until we need ApplicationJob
  add_filter 'app/mailer' # deferring until we need ActionMailer
end
