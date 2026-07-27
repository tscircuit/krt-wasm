import React from "react"
import { expect, test } from "bun:test"
import { Circuit } from "tscircuit"
import "./fixtures/svg-snapshot-matcher"
import { BgaFourBusBoard } from "./fixtures/bga-four-bus-board"

test("KRT routes four buses out of a dense BGA", async () => {
  const circuit = new Circuit()
  circuit.add(<BgaFourBusBoard withBusMetadata />)

  await circuit.renderUntilSettled()

  const circuitJson = circuit.getCircuitJson()
  const traces = circuitJson.filter(
    (element: any) => element.type === "pcb_trace",
  )
  const autoroutingErrors = circuitJson.filter(
    (element: any) => element.type === "pcb_autorouting_error",
  )

  expect(autoroutingErrors).toHaveLength(0)
  expect(traces).toHaveLength(24)
  await expect(circuit.getSvg({ view: "pcb" })).toMatchSvgSnapshot(
    import.meta.path,
  )
})
