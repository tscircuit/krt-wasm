use super::*;

#[test]
fn own_path_radius_reserves_at_least_the_declared_drill_separation() {
    let mut input = test_fixtures::board();
    for grid_step in [0.05, 0.1, 0.15, 0.25] {
        for clearance in [0.1, 0.2, 0.35] {
            input.min_via_hole_edge_to_via_hole_edge_clearance =
                Some(NumberOrString::Number(clearance));
            let radius = get_own_path_via_exclusion_radius(&input, grid_step);
            assert!(radius > 0);
            assert!((2 * radius + 1) as f64 * grid_step + 1e-12 >= 0.15 + clearance);
        }
    }
}
