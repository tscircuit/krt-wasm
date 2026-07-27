import { expect, test } from "bun:test"
import { Circuit } from "tscircuit"
import "./fixtures/svg-snapshot-matcher"
import ChargePumpReproBoard from "./fixtures/microscope-stage-controller/charge-pump-repro.circuit"

test("same-net routed traces obstacle repro", async () => {
  const circuit = new Circuit()

  circuit.add(ChargePumpReproBoard())
  await circuit.renderUntilSettled()

  const circuitJson = circuit.getCircuitJson()
  const autoroutingErrors = circuitJson.filter(
    (element: any) => element.type === "pcb_autorouting_error",
  )
  const pcbDrcErrors = circuitJson.filter(
    (element: any) =>
      typeof element.type === "string" &&
      element.type.startsWith("pcb_") &&
      element.type.endsWith("_error"),
  )
  expect(autoroutingErrors).toHaveLength(0)
  expect(pcbDrcErrors).toHaveLength(0)
  await expect(circuit.getSvg({ view: "pcb" })).toMatchSvgSnapshot(
    import.meta.path,
  )
})
