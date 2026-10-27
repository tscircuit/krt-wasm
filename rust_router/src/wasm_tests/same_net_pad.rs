use super::*;

#[test]
fn same_net_pad_exemption_does_not_enable_via_in_pad() {
    let mut input = test_fixtures::board();
    input.obstacles.push(Obstacle {
        center: Point2 { x: 0.0, y: 0.0 },
        width: 0.4,
        height: 0.4,
        layers: vec!["top".to_string()],
        layer: None,
        connected_to: vec!["net".to_string()],
    });
    let options = WasmRouterOptions::default();
    let obstacles = build_obstacle_map(
        &input, &options, 2, &["net".to_string()], &[], 0.1, 0.3,
    );
    assert!(!obstacles.is_blocked(0, 0, 0));
    assert!(obstacles.is_via_blocked(0, 0));
    assert!(!obstacles.is_via_blocked(4, 0));
    input.allow_via_in_pad = true;
    let allowed = build_obstacle_map(
        &input, &options, 2, &["net".to_string()], &[], 0.1, 0.3,
    );
    assert!(!allowed.is_via_blocked(0, 0));
}
