# This file is used by Rack-based servers to start the application.

#config.serve_static_assets = true

require ::File.expand_path('../config/environment',  __FILE__)
run Liveiterations::Application


