const configurationData = {
    flow: "cart_campaign",
    dataPoints: ["Last 2 commits scanned", "5 entry points identified"],
    apiPoints: ["POST /carts/{carts_id}"],
    entities_to_mock: ["parse_cache_control", "ProxyLogging.during_call_hook"],
    dependencies: [
      "ProxyConfig.load_team_config",
      "parse_cache_control",
      "select_data_generator",
      "ProxyLogging.during_call_hook",
      "ProxyLogging.post_call_failure_hook",
      "ProxyLogging.post_call_success_hook",
      "ProxyLogging.pre_call_hook",
      "_is_valid_team_configs",
      "_read_request_body",
      "ProxyConfig.get_config",
      "async_data_generator",
      "ProxyLogging.alerting_handler",
      "print_verbose",
      "update_spend",
    ],
    is_db_mocked: true,
    db_config: { username: "", password: "", hostname: "" },
  };
  
  export default configurationData;