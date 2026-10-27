use super::*;

#[test]
fn same_net_copper_remains_available_while_distinct_drills_are_reserved() {
    let input = test_fixtures::board();
    let options = WasmRouterOptions::default();
    let routes = vec![RoutedTraceGeometry {
        cells: vec![(0, 0, 0), (1, 0, 0), (2, 0, 0)],
        via_positions: vec![(0, 0)],
        trace_width: 0.1,
        via_pad_diameter: 0.3,
        connection_ids: vec!["net".to_string()],
    }];
    let obstacles = build_obstacle_map(
        &input, &options, 2, &["net".to_string()], &routes, 0.1, 0.3,
    );
    assert!(!obstacles.is_blocked(1, 0, 0));
    assert!(obstacles.is_via_blocked(1, 0));
    assert!(obstacles.is_via_blocked(2, 0));
    assert!(!obstacles.is_via_blocked(4, 0));
}
