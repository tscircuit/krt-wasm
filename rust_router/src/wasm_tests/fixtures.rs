use super::*;

pub(super) fn board() -> SimpleRouteJson {
    SimpleRouteJson {
        layer_count: Some(2),
        obstacles: Vec::new(),
        connections: Vec::new(),
        buses: Vec::new(),
        bounds: Bounds { min_x: -3.0, max_x: 3.0, min_y: -3.0, max_y: 3.0 },
        min_trace_width: Some(NumberOrString::Number(0.1)),
        nominal_trace_width: None,
        min_via_pad_diameter: Some(NumberOrString::Number(0.3)),
        legacy_min_via_pad_diameter: None,
        min_via_hole_diameter: Some(NumberOrString::Number(0.15)),
        legacy_min_via_hole_diameter: None,
        min_via_hole_edge_to_via_hole_edge_clearance: Some(NumberOrString::Number(0.1)),
        allow_via_in_pad: false,
    }
}
