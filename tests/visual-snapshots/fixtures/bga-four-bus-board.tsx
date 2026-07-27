import React from "react"
import type { SimpleRouteJson } from "tscircuit"
import { KiCadRoutingToolsAutorouter } from "../../../src/index"

const GRID_SIZE = 10
const BUS_WIDTH = 6
const PITCH = 0.8
const PAD_SIZE = 0.35

const busPinNumbers = {
  NORTH: [23, 24, 25, 26, 27, 28],
  EAST: [29, 39, 49, 59, 69, 79],
  SOUTH: [73, 74, 75, 76, 77, 78],
  WEST: [22, 32, 42, 52, 62, 72],
} as const

const busEntries = Object.entries(busPinNumbers)

const bgaPinLabels = Object.fromEntries(
  Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
    const pinNumber = index + 1
    const row = String.fromCharCode(
      "A".charCodeAt(0) + Math.floor(index / GRID_SIZE),
    )
    const column = (index % GRID_SIZE) + 1
    return [`pin${pinNumber}`, [`pin${pinNumber}`, `${row}${column}`]]
  }),
)

const krtOptions = {
  gridStep: 0.05,
  clearance: 0.1,
  maxIterations: 1_000_000,
  viaCost: 20_000,
  hWeight: 1.15,
  turnCost: 500,
  busAttractionRadius: 0.8,
  busAttractionBonus: 5_000,
  layerDirectionPreferences: [1, 2, 1, 2],
  directionPreferenceCost: 100,
}

const createBgaAutorouter = (withBusMetadata: boolean) => {
  return async (simpleRouteJson: SimpleRouteJson) => {
    const connections = simpleRouteJson.connections
    const buses = busEntries.map(([name], busIndex) => ({
      name,
      connectionNames: connections
        .slice(busIndex * BUS_WIDTH, busIndex * BUS_WIDTH + BUS_WIDTH)
        .map((connection) => connection.name),
    }))

    return new KiCadRoutingToolsAutorouter(
      (withBusMetadata
        ? {
            ...simpleRouteJson,
            buses,
          }
        : simpleRouteJson) as SimpleRouteJson,
      krtOptions,
    )
  }
}

export function BgaFourBusBoard({
  withBusMetadata,
}: {
  withBusMetadata: boolean
}) {
  return (
    <board
      width="44mm"
      height="36mm"
      layers={4}
      minTraceWidth={0.1}
      nominalTraceWidth={0.1}
      minViaHoleDiameter={0.2}
      minViaPadDiameter={0.45}
      autorouter={{
        algorithmFn: createBgaAutorouter(withBusMetadata),
      }}
    >
      <chip
        name="U1"
        pinLabels={bgaPinLabels}
        footprint={
          <footprint>
            {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
              const row = Math.floor(index / GRID_SIZE)
              const column = index % GRID_SIZE
              return (
                <smtpad
                  key={index}
                  portHints={[`pin${index + 1}`]}
                  pcbX={(column - (GRID_SIZE - 1) / 2) * PITCH}
                  pcbY={((GRID_SIZE - 1) / 2 - row) * PITCH}
                  width={PAD_SIZE}
                  height={PAD_SIZE}
                  shape="rect"
                />
              )
            })}
          </footprint>
        }
      />

      <pinheader
        name="J_N"
        pinCount={BUS_WIDTH}
        pitch="2mm"
        pcbX={0}
        pcbY={14}
        pcbOrientation="horizontal"
      />
      <pinheader
        name="J_E"
        pinCount={BUS_WIDTH}
        pitch="2mm"
        pcbX={18}
        pcbY={0}
        pcbOrientation="vertical"
      />
      <pinheader
        name="J_S"
        pinCount={BUS_WIDTH}
        pitch="2mm"
        pcbX={0}
        pcbY={-14}
        pcbOrientation="horizontal"
      />
      <pinheader
        name="J_W"
        pinCount={BUS_WIDTH}
        pitch="2mm"
        pcbX={-18}
        pcbY={0}
        pcbOrientation="vertical"
      />

      {busEntries.flatMap(([busName, pinNumbers]) =>
        pinNumbers.map((pinNumber, index) => (
          <trace
            key={`${busName}${index}`}
            name={`${busName}${index}`}
            from={`.U1 > .pin${pinNumber}`}
            to={`.J_${busName[0]} > .pin${index + 1}`}
          />
        )),
      )}
    </board>
  )
}
