import React from "react"
import { expect, test } from "bun:test"
import { Circuit } from "tscircuit"
import "./fixtures/svg-snapshot-matcher"
import { Rp2040DecouplingBreakoutBoard } from "./fixtures/rp2040-decoupling-breakout-board"

test(
  "KRT breaks out an RP2040 with eight surrounding 0603 decoupling capacitors",
  async () => {
    const circuit = new Circuit()
    circuit.add(<Rp2040DecouplingBreakoutBoard />)

    await circuit.renderUntilSettled()

    const circuitJson = circuit.getCircuitJson()
    const traces = circuitJson.filter(
      (element: any) => element.type === "pcb_trace",
    )
    const autoroutingErrors = circuitJson.filter(
      (element: any) => element.type === "pcb_autorouting_error",
    )
    const capacitors = circuitJson.filter(
      (element: any) =>
        element.type === "source_component" &&
        element.ftype === "simple_capacitor",
    )
    const rp2040SourceComponent = circuitJson.find(
      (element: any) =>
        element.type === "source_component" && element.name === "U_RP2040",
    )
    const rp2040PcbComponent = circuitJson.find(
      (element: any) =>
        element.type === "pcb_component" &&
        element.source_component_id ===
          rp2040SourceComponent?.source_component_id,
    )
    const rp2040Pads = circuitJson.filter(
      (element: any) =>
        element.type === "pcb_smtpad" &&
        element.pcb_component_id === rp2040PcbComponent?.pcb_component_id,
    )

    expect(autoroutingErrors).toHaveLength(0)
    expect(traces).toHaveLength(40)
    expect(traces.every((trace: any) => trace.route.length >= 2)).toBe(true)
    expect(capacitors).toHaveLength(8)
    expect(rp2040Pads).toHaveLength(57)
    await expect(circuit.getSvg({ view: "pcb" })).toMatchSvgSnapshot(
      import.meta.path,
    )
  },
  60_000,
)
