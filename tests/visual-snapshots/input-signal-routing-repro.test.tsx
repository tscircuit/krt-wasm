import { expect, test } from "bun:test"
import { Circuit } from "tscircuit"
import "./fixtures/svg-snapshot-matcher"
import InputSignalReproBoard from "./fixtures/microscope-stage-controller/input-signal-repro.circuit"

test("KRT input signal routing failure repro", async () => {
  const circuit = new Circuit()

  circuit.add(InputSignalReproBoard())
  await circuit.renderUntilSettled()

  const autoroutingErrors = circuit
    .getCircuitJson()
    .filter((element: any) => element.type === "pcb_autorouting_error")

  expect(autoroutingErrors).toHaveLength(1)
  expect((autoroutingErrors[0] as any).message).toContain(
    "KRT GridRouter found no route",
  )
  await expect(circuit.getSvg({ view: "pcb" })).toMatchSvgSnapshot(
    import.meta.path,
  )
}, 60_000)
