class ExampleJob < ApplicationJob
  queue_as :default

  def perform(*args)
    puts "HOLI"
  end
end
