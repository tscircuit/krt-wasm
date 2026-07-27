import { expect, test } from "bun:test"
import { KiCadRoutingToolsAutorouter } from "../src/index"

test("routes SRJ bus members center-out in physical order", () => {
  const connectionNames = Array.from({ length: 8 }, (_, index) => `D${index}`)
  const input = {
    layerCount: 2,
    minTraceWidth: 0.1,
    bounds: { minX: -10, maxX: 10, minY: -5, maxY: 5 },
    obstacles: [],
    connections: connectionNames.map((name, index) => ({
      name,
      pointsToConnect: [
        { x: -8, y: -2.8 + index * 0.8, layer: "top" },
        { x: 8, y: -2.8 + index * 0.8, layer: "top" },
      ],
    })),
    buses: [{ name: "DATA", connectionNames }],
  }

  const traces = new KiCadRoutingToolsAutorouter(input as any, {
    gridStep: 0.1,
    clearance: 0.1,
    busAttractionRadius: 1,
    busAttractionBonus: 5_000,
  }).solveSync()

  expect(traces.map((trace) => trace.connection_name)).toEqual([
    "D4",
    "D3",
    "D5",
    "D2",
    "D6",
    "D1",
    "D7",
    "D0",
  ])
})
