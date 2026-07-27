import React from "react"
import type { SimpleRouteJson } from "tscircuit"
import { KiCadRoutingToolsAutorouter } from "../../../src/index"

const QFN_PIN_COUNT = 56
const QFN_PINS_PER_SIDE = 14
const QFN_PITCH = 0.4
const QFN_PAD_CENTER = 3.25
const QFN_PAD_LENGTH = 0.8
const QFN_PAD_WIDTH = 0.22
const BUS_WIDTH = 8

const rp2040PinNames: Record<number, string> = {
  1: "IOVDD",
  2: "GPIO0",
  3: "GPIO1",
  4: "GPIO2",
  5: "GPIO3",
  6: "GPIO4",
  7: "GPIO5",
  8: "IOVDD",
  9: "GPIO6",
  10: "GPIO7",
  11: "GPIO8",
  12: "GPIO9",
  13: "GPIO10",
  14: "GPIO11",
  15: "IOVDD",
  16: "GPIO12",
  17: "GPIO13",
  18: "GPIO14",
  19: "GPIO15",
  23: "IOVDD",
  28: "GPIO16",
  29: "GPIO17",
  30: "GPIO18",
  31: "GPIO19",
  32: "GPIO20",
  33: "GPIO21",
  34: "IOVDD",
  35: "GPIO22",
  36: "GPIO23",
  43: "ADC_AVDD",
  49: "USB_VDD",
  50: "IOVDD",
  57: "GND",
}

const gpioBuses = [
  {
    name: "GPIO0_7",
    chipPins: [2, 3, 4, 5, 6, 7, 9, 10],
    connector: "J_WEST",
  },
  {
    name: "GPIO8_15",
    chipPins: [11, 12, 13, 14, 16, 17, 18, 19],
    connector: "J_SOUTH",
  },
  {
    name: "GPIO16_23",
    chipPins: [28, 29, 30, 31, 32, 33, 35, 36],
    connector: "J_EAST",
  },
] as const

const decouplingCapacitors = [
  {
    name: "C_IOVDD_1",
    chipPin: 1,
    x: -5,
    y: 2.6,
    rotation: 0,
    chipFacingCapPin: 2,
    groundX: -7,
    groundY: 2.6,
  },
  {
    name: "C_IOVDD_2",
    chipPin: 8,
    x: -5,
    y: -0.2,
    rotation: 0,
    chipFacingCapPin: 2,
    groundX: -7,
    groundY: -0.2,
  },
  {
    name: "C_IOVDD_3",
    chipPin: 15,
    x: -2.6,
    y: -5,
    rotation: 90,
    chipFacingCapPin: 2,
    groundX: -2.6,
    groundY: -7,
  },
  {
    name: "C_IOVDD_4",
    chipPin: 23,
    x: 0.6,
    y: -5,
    rotation: 90,
    chipFacingCapPin: 2,
    groundX: 0.6,
    groundY: -7,
  },
  {
    name: "C_IOVDD_5",
    chipPin: 34,
    x: 5,
    y: -0.6,
    rotation: 0,
    chipFacingCapPin: 1,
    groundX: 7,
    groundY: -0.6,
  },
  {
    name: "C_ADC_AVDD",
    chipPin: 43,
    x: 2.7,
    y: 5,
    rotation: 90,
    chipFacingCapPin: 1,
    groundX: 2.7,
    groundY: 7,
  },
  {
    name: "C_USB_VDD",
    chipPin: 49,
    x: 0.9,
    y: 5.3,
    rotation: 90,
    chipFacingCapPin: 1,
    groundX: 0.9,
    groundY: 7.3,
  },
  {
    name: "C_IOVDD_6",
    chipPin: 50,
    x: -1.1,
    y: 5.3,
    rotation: 90,
    chipFacingCapPin: 1,
    groundX: -1.1,
    groundY: 7.3,
  },
] as const

const rp2040PinLabels = Object.fromEntries(
  Array.from({ length: QFN_PIN_COUNT + 1 }, (_, index) => {
    const pinNumber = index + 1
    return [
      `pin${pinNumber}`,
      [
        `pin${pinNumber}`,
        rp2040PinNames[pinNumber] ?? `RP2040_${pinNumber}`,
      ],
    ]
  }),
)

const krtOptions = {
  gridStep: 0.05,
  clearance: 0.1,
  maxIterations: 1_000_000,
  viaCost: 20_000,
  hWeight: 1.15,
  turnCost: 500,
  trackMargin: 10,
  busAttractionRadius: 0.8,
  busAttractionBonus: 5_000,
  layerDirectionPreferences: [1, 2, 1, 2],
  directionPreferenceCost: 100,
}

const rp2040BreakoutAutorouter = async (simpleRouteJson: SimpleRouteJson) => {
  const buses = gpioBuses.map((bus, busIndex) => ({
    name: bus.name,
    connectionNames: simpleRouteJson.connections
      .slice(busIndex * BUS_WIDTH, (busIndex + 1) * BUS_WIDTH)
      .map((connection) => connection.name),
  }))

  return new KiCadRoutingToolsAutorouter(
    {
      ...simpleRouteJson,
      buses,
    } as SimpleRouteJson,
    krtOptions,
  )
}

function Rp2040Footprint() {
  return (
    <footprint>
      {Array.from({ length: QFN_PIN_COUNT }, (_, index) => {
        const pinNumber = index + 1
        const side = Math.floor(index / QFN_PINS_PER_SIDE)
        const sideIndex = index % QFN_PINS_PER_SIDE
        const offset =
          (QFN_PINS_PER_SIDE / 2 - 0.5 - sideIndex) * QFN_PITCH

        if (side === 0) {
          return (
            <smtpad
              key={pinNumber}
              portHints={[`pin${pinNumber}`]}
              pcbX={-QFN_PAD_CENTER}
              pcbY={offset}
              width={QFN_PAD_LENGTH}
              height={QFN_PAD_WIDTH}
              shape="rect"
            />
          )
        }
        if (side === 1) {
          return (
            <smtpad
              key={pinNumber}
              portHints={[`pin${pinNumber}`]}
              pcbX={-offset}
              pcbY={-QFN_PAD_CENTER}
              width={QFN_PAD_WIDTH}
              height={QFN_PAD_LENGTH}
              shape="rect"
            />
          )
        }
        if (side === 2) {
          return (
            <smtpad
              key={pinNumber}
              portHints={[`pin${pinNumber}`]}
              pcbX={QFN_PAD_CENTER}
              pcbY={-offset}
              width={QFN_PAD_LENGTH}
              height={QFN_PAD_WIDTH}
              shape="rect"
            />
          )
        }
        return (
          <smtpad
            key={pinNumber}
            portHints={[`pin${pinNumber}`]}
            pcbX={offset}
            pcbY={QFN_PAD_CENTER}
            width={QFN_PAD_WIDTH}
            height={QFN_PAD_LENGTH}
            shape="rect"
          />
        )
      })}
      <smtpad
        portHints={["pin57", "GND"]}
        pcbX={0}
        pcbY={0}
        width={3.2}
        height={3.2}
        shape="rect"
      />
    </footprint>
  )
}

function GroundVia({
  name,
  pcbX,
  pcbY,
}: {
  name: string
  pcbX: number
  pcbY: number
}) {
  return (
    <chip
      name={name}
      pinLabels={{ pin1: ["pin1", "GND"] }}
      pcbX={pcbX}
      pcbY={pcbY}
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1", "GND"]}
            pcbX={0}
            pcbY={0}
            holeDiameter={0.3}
            outerDiameter={0.6}
            shape="circle"
          />
        </footprint>
      }
    />
  )
}

export function Rp2040DecouplingBreakoutBoard() {
  return (
    <board
      width="32mm"
      height="32mm"
      layers={4}
      minTraceWidth={0.1}
      nominalTraceWidth={0.1}
      minViaHoleDiameter={0.2}
      minViaPadDiameter={0.45}
      autorouter={{ algorithmFn: rp2040BreakoutAutorouter }}
    >
      <chip
        name="U_RP2040"
        pinLabels={rp2040PinLabels}
        footprint={<Rp2040Footprint />}
      />

      <pinheader
        name="J_WEST"
        pinCount={BUS_WIDTH}
        pitch="2mm"
        pcbX={-13}
        pcbY={0}
        pcbOrientation="vertical"
      />
      <pinheader
        name="J_SOUTH"
        pinCount={BUS_WIDTH}
        pitch="2mm"
        pcbX={0}
        pcbY={-13}
        pcbOrientation="horizontal"
      />
      <pinheader
        name="J_EAST"
        pinCount={BUS_WIDTH}
        pitch="2mm"
        pcbX={13}
        pcbY={0}
        pcbOrientation="vertical"
      />

      {decouplingCapacitors.map((capacitor) => (
        <React.Fragment key={capacitor.name}>
          <capacitor
            name={capacitor.name}
            capacitance="100nF"
            footprint="0603"
            pcbX={capacitor.x}
            pcbY={capacitor.y}
            pcbRotation={capacitor.rotation}
          />
          <GroundVia
            name={`GND_${capacitor.name}`}
            pcbX={capacitor.groundX}
            pcbY={capacitor.groundY}
          />
        </React.Fragment>
      ))}

      {gpioBuses.flatMap((bus) =>
        bus.chipPins.map((chipPin, index) => (
          <trace
            key={`${bus.name}_${index}`}
            name={`${bus.name}_${index}`}
            from={`.U_RP2040 > .pin${chipPin}`}
            to={`.${bus.connector} > .pin${index + 1}`}
          />
        )),
      )}

      {decouplingCapacitors.flatMap((capacitor) => {
        const groundCapPin = capacitor.chipFacingCapPin === 1 ? 2 : 1
        return [
          <trace
            key={`${capacitor.name}_power`}
            name={`${capacitor.name}_power`}
            from={`.U_RP2040 > .pin${capacitor.chipPin}`}
            to={`.${capacitor.name} > .pin${capacitor.chipFacingCapPin}`}
          />,
          <trace
            key={`${capacitor.name}_ground`}
            name={`${capacitor.name}_ground`}
            from={`.${capacitor.name} > .pin${groundCapPin}`}
            to={`.GND_${capacitor.name} > .pin1`}
          />,
        ]
      })}
    </board>
  )
}
