use super::*;

#[test]
fn routed_chain_reserves_distinct_drills_between_its_segments() {
    let mut input = test_fixtures::board();
    input.connections.push(SimpleRouteConnection {
        name: "chain".to_string(),
        source_trace_id: None,
        points_to_connect: vec![
            RoutePoint { x: 0.0, y: 0.0, layer: Some("top".to_string()), point_id: None, pcb_port_id: None },
            RoutePoint { x: 2.0, y: 0.0, layer: Some("bottom".to_string()), point_id: None, pcb_port_id: None },
            RoutePoint { x: 0.0, y: 0.1, layer: Some("top".to_string()), point_id: None, pcb_port_id: None },
        ],
        width: None,
        nominal_trace_width: None,
    });
    let traces = route_connections_with_order(
        &input,
        &WasmRouterOptions::default(),
        RoutePlanStrategy { bus_order: BusRouteOrder::CenterOut, ungrouped_order: UngroupedRouteOrder::Original },
    ).expect("unobstructed multilayer chain must route");
    let vias: Vec<_> = traces[0].route.iter().filter_map(|segment| {
        if let RouteSegment::Via { x, y, .. } = segment { Some((*x, *y)) } else { None }
    }).collect();
    assert!(vias.len() >= 2);
    for (index, &(x, y)) in vias.iter().enumerate() {
        for &(other_x, other_y) in &vias[index + 1..] {
            assert!((x - other_x).hypot(y - other_y) + 1e-9 >= get_via_hole_spacing(&input));
        }
    }
}
