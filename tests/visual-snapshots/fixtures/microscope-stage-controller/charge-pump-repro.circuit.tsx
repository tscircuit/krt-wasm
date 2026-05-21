import React from "react"
import type { ChipProps } from "@tscircuit/props"
import { createKiCadRoutingToolsAutorouter } from "../../../../src/index"

const chargePumpReproKrtAutorouter = {
  algorithmFn: createKiCadRoutingToolsAutorouter({
    gridStep: 0.1,
    clearance: 0.2,
    maxIterations: 300_000,
  }),
}

const powerConnectorPinLabels = {
  pin1: ["pin1", "VBAT"],
  pin2: ["pin2", "GND"],
} as const

const powerConnectorPinAttributes = {
  pin1: { includeInBoardPinout: true, requiresPower: true },
  pin2: { includeInBoardPinout: true, requiresGround: true },
  VBAT: { requiresPower: true },
  GND: { requiresGround: true },
} as const

const WJ500V_5_08_2P = (
  props: ChipProps<typeof powerConnectorPinLabels>,
) => (
  <chip
    pinLabels={powerConnectorPinLabels}
    pinAttributes={powerConnectorPinAttributes}
    manufacturerPartNumber="WJ500V_5_08_2P"
    footprint={
      <footprint>
        <platedhole
          portHints={["pin2"]}
          pcbX="2.54mm"
          pcbY="0mm"
          outerDiameter="1.999996mm"
          holeDiameter="1.3000228mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin1"]}
          pcbX="-2.54mm"
          pcbY="0mm"
          outerDiameter="1.999996mm"
          holeDiameter="1.3000228mm"
          shape="circle"
        />
        <courtyardoutline
          outline={[
            { x: -5.939599999999999, y: 5.888800000000003 },
            { x: 5.456999999999994, y: 5.888800000000003 },
            { x: 5.456999999999994, y: -4.771199999999993 },
            { x: -5.939599999999999, y: -4.771199999999993 },
            { x: -5.939599999999999, y: 5.888800000000003 },
          ]}
        />
      </footprint>
    }
    {...props}
  />
)

const drv8833PinLabels = {
  pin1: ["nSleep"],
  pin2: ["AOUT1"],
  pin3: ["AISEN"],
  pin4: ["AOUT2"],
  pin5: ["BOUT2"],
  pin6: ["BISEN"],
  pin7: ["BOUT1"],
  pin8: ["nFault"],
  pin9: ["BIN1"],
  pin10: ["BIN2"],
  pin11: ["VCP"],
  pin12: ["VM"],
  pin13: ["GND1"],
  pin14: ["VINT"],
  pin15: ["AIN2"],
  pin16: ["AIN1"],
  pin17: ["GND2"],
} as const

const drv8833PinAttributes = {
  nSleep: { isGpio: true },
  AOUT1: {},
  AISEN: { requiresGround: true },
  AOUT2: {},
  BOUT2: {},
  BISEN: { requiresGround: true },
  BOUT1: {},
  nFault: { canUseOpenDrain: true },
  BIN1: { isGpio: true },
  BIN2: { isGpio: true },
  VCP: {},
  VM: { requiresPower: true },
  GND1: { requiresGround: true },
  VINT: {},
  AIN2: { isGpio: true },
  AIN1: { isGpio: true },
  GND2: { requiresGround: true },
} as const

const DRV8833PWPR = (props: ChipProps<typeof drv8833PinLabels>) => (
  <chip
    pinLabels={drv8833PinLabels}
    pinAttributes={drv8833PinAttributes}
    manufacturerPartNumber="DRV8833PWPR"
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-2.275078mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-1.625092mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.975106mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="-0.324866mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0.32512mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.975106mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin7"]}
          pcbX="1.625092mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin8"]}
          pcbX="2.275078mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin16"]}
          pcbX="-2.275078mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin15"]}
          pcbX="-1.625092mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin11"]}
          pcbX="0.975106mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin12"]}
          pcbX="0.32512mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin13"]}
          pcbX="-0.324866mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin14"]}
          pcbX="-0.975106mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin10"]}
          pcbX="1.625092mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin9"]}
          pcbX="2.275078mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin17"]}
          pcbX="0mm"
          pcbY="0mm"
          width="2.7399996mm"
          height="2.7399996mm"
          shape="rect"
        />
        <via
          pcbX="0.500126mm"
          pcbY="0.499872mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          fromLayer="top"
          toLayer="bottom"
        />
        <via
          pcbX="-0.499872mm"
          pcbY="0.499872mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          fromLayer="top"
          toLayer="bottom"
        />
        <via
          pcbX="-0.499872mm"
          pcbY="-0.500126mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          fromLayer="top"
          toLayer="bottom"
        />
        <via
          pcbX="0.500126mm"
          pcbY="-0.500126mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          fromLayer="top"
          toLayer="bottom"
        />
      </footprint>
    }
    {...props}
  />
)

const ams1117PinLabels = {
  pin1: ["GND"],
  pin2: ["VOUT1"],
  pin3: ["VIN"],
  pin4: ["VOUT2"],
} as const

const ams1117PinAttributes = {
  GND: { requiresGround: true },
  VIN: { requiresPower: true },
  VOUT1: { providesPower: true, providesVoltage: "3.3V" },
  VOUT2: { providesPower: true, providesVoltage: "3.3V" },
} as const

const AMS1117_3_3 = (props: ChipProps<typeof ams1117PinLabels>) => (
  <chip
    pinLabels={ams1117PinLabels}
    pinAttributes={ams1117PinAttributes}
    manufacturerPartNumber="AMS1117_3_3"
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="2.92995985mm"
          pcbY="-2.29997mm"
          width="2.499995mm"
          height="1.2999978mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="2.92995985mm"
          pcbY="0mm"
          width="2.499995mm"
          height="1.2999978mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="2.92995985mm"
          pcbY="2.29997mm"
          width="2.499995mm"
          height="1.4999978mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="-3.00995715mm"
          pcbY="0mm"
          width="2.3400004mm"
          height="3.5999928mm"
          shape="rect"
        />
      </footprint>
    }
    {...props}
  />
)

export default () => (
  <board
    width="100mm"
    height="70mm"
    layers={4}
    nominalTraceWidth="0.2mm"
    minTraceWidth="0.1mm"
    autorouter={chargePumpReproKrtAutorouter}
  >
    <WJ500V_5_08_2P
      name="J_PWR"
      pcbX={-44}
      pcbY={26}
      pcbRotation={90}
      schX={-24}
      schY={20}
      pinLabels={{
        pin1: "VBAT",
        pin2: "GND",
      }}
    />
    <AMS1117_3_3
      name="U_REG"
      pcbX={-25}
      pcbY={24}
      schX={-8}
      schY={20}
    />
    <DRV8833PWPR
      name="U_DRV"
      pcbX={-33}
      pcbY={0}
      pcbRotation={-90}
      schX={-8}
      schY={0}
    />

    <capacitor
      name="C_VM_BULK"
      capacitance="22uF"
      footprint="1206"
      pcbX={-25}
      pcbY={5}
      schX={-17}
      schY={8}
    />
    <capacitor
      name="C_VM_DEC"
      capacitance="100nF"
      footprint="0603"
      pcbX={-26}
      pcbY={3}
      schX={-17}
      schY={4}
    />
    <capacitor
      name="C_VINT"
      capacitance="2.2uF"
      footprint="0603"
      pcbX={-27.8}
      pcbY={1.2}
      schX={-4}
      schY={4}
    />
    <capacitor
      name="C_VCP"
      capacitance="10nF"
      footprint="0603"
      pcbX={-27.6}
      pcbY={-1.6}
      schX={-4}
      schY={0}
    />

    <trace
      from="J_PWR.VBAT"
      to="U_REG.VIN"
      thickness="0.6mm"
      routingPhaseIndex={0}
    />
    <trace
      from="J_PWR.GND"
      to="net.GND"
      thickness="0.6mm"
      routingPhaseIndex={0}
    />

    <trace
      from="U_DRV.VM"
      to="U_REG.VIN"
      thickness="0.45mm"
      routingPhaseIndex={0}
    />
    <trace
      from="U_DRV.GND1"
      to="U_DRV.GND2"
      thickness="0.2mm"
      routingPhaseIndex={0}
    />
    <trace
      from="U_DRV.GND2"
      to="net.GND"
      thickness="0.25mm"
      routingPhaseIndex={0}
    />

    <trace
      from="C_VM_BULK.pin1"
      to="U_DRV.VM"
      thickness="0.6mm"
      routingPhaseIndex={0}
    />
    <trace
      from="C_VM_BULK.pin2"
      to="U_DRV.GND2"
      thickness="0.6mm"
      routingPhaseIndex={0}
    />
    <trace
      from="C_VM_DEC.pin1"
      to="U_DRV.VM"
      thickness="0.4mm"
      routingPhaseIndex={0}
    />
    <trace
      from="C_VM_DEC.pin2"
      to="U_DRV.GND2"
      thickness="0.4mm"
      routingPhaseIndex={0}
    />

    <trace from="C_VINT.pin1" to="U_DRV.VINT" />
    <trace from="C_VINT.pin2" to="C_VM_BULK.pin2" />
    <trace from="C_VCP.pin1" to="U_DRV.VCP" />
    <trace from="C_VCP.pin2" to="U_DRV.VM" thickness="0.1mm" />

  </board>
)
