import React from "react"
import { expect, test } from "bun:test"
import { Circuit } from "tscircuit"
import "./fixtures/svg-snapshot-matcher"
import { RoutedPinheadersBoard } from "./fixtures/routed-pinheaders-board"

test("KRT autorouter produces a PCB visual snapshot", async () => {
  const circuit = new Circuit()

  circuit.add(<RoutedPinheadersBoard />)
  await circuit.renderUntilSettled()

  const circuitJson = circuit.getCircuitJson()
  const traces = circuitJson.filter(
    (element: any) => element.type === "pcb_trace",
  )
  const pcbDrcErrors = circuitJson.filter(
    (element: any) =>
      typeof element.type === "string" &&
      element.type.startsWith("pcb_") &&
      element.type.endsWith("_error"),
  )

  expect(traces.length).toBeGreaterThan(0)
  expect(pcbDrcErrors).toHaveLength(0)
  await expect(circuit.getSvg({ view: "pcb" })).toMatchSvgSnapshot(
    import.meta.path,
  )
})
