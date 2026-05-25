import React from "react"
import type { ChipProps } from "@tscircuit/props"
import { createKiCadRoutingToolsAutorouter } from "../../../../src/index"

const a3296PinLabels = {
  pin1: ["pin1", "VCC"],
  pin2: ["pin2", "WIPER"],
  pin3: ["pin3", "GND"]
} as const

const a3296PinAttributes = {
  VCC: { requiresPower: true },
  WIPER: {},
  GND: { requiresGround: true },
} as const

const A_3296W_1_103 = (props: ChipProps<typeof a3296PinLabels>) => {
  return (
    <chip
      pinLabels={a3296PinLabels}
      pinAttributes={a3296PinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C118954"
  ]
}}
      manufacturerPartNumber="A_3296W_1_103"
      footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="0.000127mm" pcbY="0mm" outerDiameter="1.524mm" holeDiameter="0.762mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-2.499995mm" pcbY="0mm" outerDiameter="1.524mm" holeDiameter="0.762mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.499995mm" pcbY="0mm" outerDiameter="1.524mm" holeDiameter="0.762mm" shape="circle" />
<silkscreenpath route={[{"x":-4.7500031999999806,"y":2.450033200000007},{"x":4.7500031999999806,"y":2.450033200000007}]} />
<silkscreenpath route={[{"x":-2.804033000000004,"y":1.2700000000000102},{"x":-2.804033000000004,"y":1.6510000000000105},{"x":-2.804033000000004,"y":2.0320000000000107},{"x":-2.804033000000004,"y":1.6510000000000105}]} />
<silkscreenpath route={[{"x":-4.7500031999999806,"y":2.450033200000007},{"x":-4.7500031999999806,"y":-2.450033200000007},{"x":-4.7500031999999806,"y":-2.499994999999984},{"x":-4.255008000000032,"y":-2.499994999999984},{"x":-4.255008000000032,"y":-1.99999600000001},{"x":4.255008000000032,"y":-1.99999600000001},{"x":4.255008000000032,"y":-2.499994999999984},{"x":4.755337199999985,"y":-2.499994999999984},{"x":4.755337199999985,"y":-2.450033200000007},{"x":4.755337199999985,"y":2.450033200000007}]} />
<silkscreenpath route={[{"x":-2.804033000000004,"y":2.189480000000003},{"x":-3.0366516457467583,"y":2.244720652483238},{"x":-3.222468590143478,"y":2.395170069932817},{"x":-3.3248973852105337,"y":2.6112054975296815},{"x":-3.323770301925663,"y":2.8502906156761583},{"x":-3.219309257477846,"y":3.065350733384463},{"x":-3.0320821208577513,"y":3.2140415648061946},{"x":-2.798952999999983,"y":3.2670866121142694},{"x":-2.565823879142215,"y":3.2140415648061946},{"x":-2.37859674252212,"y":3.065350733384463},{"x":-2.2741356980743035,"y":2.8502906156761583},{"x":-2.2730086147894895,"y":2.6112054975296815},{"x":-2.375437409856488,"y":2.395170069932817},{"x":-2.561254354253265,"y":2.244720652483238},{"x":-2.793873000000019,"y":2.189480000000003}]} />
<silkscreentext text="{NAME}" pcbX="-0.010033mm" pcbY="3.4384mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.009833000000015,"y":2.6884000000000015},{"x":4.989767000000029,"y":2.6884000000000015},{"x":4.989767000000029,"y":-2.764599999999973},{"x":-5.009833000000015,"y":-2.764599999999973},{"x":-5.009833000000015,"y":2.6884000000000015}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C118954.obj?uuid=de5e3253f11a43faab4baf80f94b73a3",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C118954.step?uuid=de5e3253f11a43faab4baf80f94b73a3",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.000012700000013410317, y: 0, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}

const atmega328PinLabels = {
  pin1: ["pin1", "PD3"],
  pin2: ["pin2", "PD4"],
  pin3: ["GND3", "GND"],
  pin4: ["VCC2", "VCC"],
  pin5: ["GND2", "GND"],
  pin6: ["VCC1", "VCC"],
  pin7: ["pin7", "PB6"],
  pin8: ["pin8", "PB7"],
  pin9: ["pin9", "PD5"],
  pin10: ["pin10", "PD6"],
  pin11: ["pin11", "PD7"],
  pin12: ["pin12", "PB0"],
  pin13: ["pin13", "PB1"],
  pin14: ["pin14", "PB2"],
  pin15: ["pin15", "PB3", "MOSI"],
  pin16: ["pin16", "PB4", "MISO"],
  pin17: ["pin17", "PB5", "SCK"],
  pin18: ["AVCC"],
  pin19: ["ADC6"],
  pin20: ["AREF"],
  pin21: ["GND1", "GND"],
  pin22: ["ADC7"],
  pin23: ["pin23", "PC0", "ADC0"],
  pin24: ["pin24", "PC1", "ADC1"],
  pin25: ["pin25", "PC2", "ADC2"],
  pin26: ["pin26", "PC3", "ADC3"],
  pin27: ["pin27", "PC4", "ADC4"],
  pin28: ["pin28", "PC5", "ADC5"],
  pin29: ["pin29", "PC6", "RESET"],
  pin30: ["pin30", "PD0", "RXD"],
  pin31: ["pin31", "PD1", "TXD"],
  pin32: ["pin32", "PD2", "INT0"]
} as const

const atmega328PinAttributes = {
  GND3: { requiresGround: true },
  VCC2: { requiresPower: true, requiresVoltage: "3.3V" },
  GND2: { requiresGround: true },
  VCC1: { requiresPower: true, requiresVoltage: "3.3V" },
  AVCC: { requiresPower: true, requiresVoltage: "3.3V" },
  AREF: {},
  GND1: { requiresGround: true },
  MOSI: { isGpio: true },
  MISO: { isGpio: true },
  SCK: { isGpio: true },
  RESET: { canUseInternalPullup: true },
  RXD: { isGpio: true },
  TXD: { isGpio: true },
} as const

const ATMEGA328P_AU = (props: ChipProps<typeof atmega328PinLabels>) => {
  return (
    <chip
      pinLabels={atmega328PinLabels}
      pinAttributes={atmega328PinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C14877"
  ]
}}
      manufacturerPartNumber="ATMEGA328P_AU"
      footprint={<footprint>
        <smtpad portHints={["pin32"]} pcbX="-4.3815mm" pcbY="-2.7999944mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-4.3815mm" pcbY="-1.999996mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-4.3815mm" pcbY="-1.1999976mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-4.3815mm" pcbY="-0.3999992mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-4.3815mm" pcbY="0.3999992mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-4.3815mm" pcbY="1.1999976mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-4.3815mm" pcbY="1.999996mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-4.3815mm" pcbY="2.7999944mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-2.7999944mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.999996mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.1999976mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.3999992mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.3999992mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.1999976mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.999996mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.7999944mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="4.3815mm" pcbY="2.7999944mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.3815mm" pcbY="1.999996mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.3815mm" pcbY="1.1999976mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="4.3815mm" pcbY="0.3999992mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="4.3815mm" pcbY="-0.3999992mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="4.3815mm" pcbY="-1.1999976mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="4.3815mm" pcbY="-1.999996mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.3815mm" pcbY="-2.7999944mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.7999944mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.999996mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.1999976mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.3999992mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.3999992mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.1999976mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.999996mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.7999944mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<silkscreenpath route={[{"x":-2.967482000000004,"y":-4.825999999999993},{"x":-2.819400000000016,"y":-4.9740820107053025},{"x":-2.6713180000000136,"y":-4.825999999999993}]} />
<silkscreenpath route={[{"x":-2.6713180000000136,"y":-4.825999999999993},{"x":-2.819400000000016,"y":-4.677917989294684},{"x":-2.967482000000004,"y":-4.825999999999993}]} />
<silkscreenpath route={[{"x":-2.9626559999999813,"y":2.9499560000000145},{"x":-2.9626559999999813,"y":-2.949955999999986},{"x":2.937256000000019,"y":-2.949955999999986},{"x":2.937256000000019,"y":2.9499560000000145},{"x":-2.9626559999999813,"y":2.9499560000000145}]} />
<silkscreenpath route={[{"x":-3.7591999999999928,"y":-4.063999999999993},{"x":-3.907941055997668,"y":-3.9133579702960617},{"x":-3.7579300000000018,"y":-3.763980575985258},{"x":-3.6079189440023356,"y":-3.9133579702960617},{"x":-3.7566599999999966,"y":-4.063999999999993}]} />
<silkscreenpath route={[{"x":-2.2123399999999975,"y":-1.998980000000003},{"x":-2.4015150142161303,"y":-1.86006255080585},{"x":-2.3284212288967012,"y":-1.6370321891015465},{"x":-2.0937187711032834,"y":-1.6370321891015465},{"x":-2.0206249857838543,"y":-1.86006255080585},{"x":-2.209799999999987,"y":-1.998980000000003}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="5.9657mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.228400000000008,"y":5.215700000000012},{"x":5.2283999999999935,"y":5.215700000000012},{"x":5.2283999999999935,"y":-5.215699999999998},{"x":-5.228400000000008,"y":-5.215699999999998},{"x":-5.228400000000008,"y":5.215700000000012}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C14877.obj?uuid=4d9f6c3430024506b87ce44b53201fc5",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C14877.step?uuid=4d9f6c3430024506b87ce44b53201fc5",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.0012984000000164642, y: -0.0030292999999934622, z: 0.000917 },
      }}
      {...props}
    />
  )
}

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
  pin17: ["GND2"]
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

const DRV8833PWPR = (props: ChipProps<typeof drv8833PinLabels>) => {
  return (
    <chip
      pinLabels={drv8833PinLabels}
      pinAttributes={drv8833PinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C50506"
  ]
}}
      manufacturerPartNumber="DRV8833PWPR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.275078mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.625092mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.975106mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.324866mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.32512mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.975106mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.625092mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.275078mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-2.275078mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.625092mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.975106mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-0.324866mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.32512mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.975106mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.625092mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.275078mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0mm" pcbY="0mm" width="2.7399996mm" height="2.7399996mm" shape="rect" />
<via pcbX="0.500126mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" fromLayer="top" toLayer="bottom" />
<via pcbX="-0.499872mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" fromLayer="top" toLayer="bottom" />
<via pcbX="-0.499872mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" fromLayer="top" toLayer="bottom" />
<via pcbX="0.500126mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" fromLayer="top" toLayer="bottom" />
<silkscreenpath route={[{"x":2.499994999999899,"y":2.100910200000044},{"x":2.499994999999899,"y":-2.1009101999999302}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":-2.1397722000000385},{"x":-2.5400000000000773,"y":-0.3810000000000855}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":2.1397722000000385},{"x":-2.5400000000000773,"y":0.3809999999999718}]} />
<silkscreenpath route={[{"x":1.9337273999999525,"y":-2.1999955999999656},{"x":1.9664425999999366,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":1.2837413999998262,"y":-2.1999955999999656},{"x":1.3164565999998104,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":0.6337554000000409,"y":-2.1999955999999656},{"x":0.6664706000000251,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":-0.01623060000008536,"y":-2.1999955999999656},{"x":0.01648459999989882,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":-0.6664706000000251,"y":-2.1999955999999656},{"x":-0.6335014000000001,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":-1.316456599999924,"y":-2.1999955999999656},{"x":-1.2837413999999399,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":-1.9664426000000503,"y":-2.1999955999999656},{"x":-1.9337274000000662,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":1.9337273999999525,"y":2.1999955999999656},{"x":1.9664425999999366,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":1.2837413999998262,"y":2.1999955999999656},{"x":1.3164565999998104,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":0.6337554000000409,"y":2.1999955999999656},{"x":0.6664706000000251,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-0.01623060000008536,"y":2.1999955999999656},{"x":0.01648459999989882,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-0.6664706000000251,"y":2.1999955999999656},{"x":-0.6335014000000001,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-1.316456599999924,"y":2.1999955999999656},{"x":-1.2837413999999399,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-1.9664426000000503,"y":2.1999955999999656},{"x":-1.9337274000000662,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":-0.3810000000000855},{"x":-2.7639461811234014,"y":-0.308235474856815},{"x":-2.902352532708619,"y":-0.11773547485677227},{"x":-2.902352532708619,"y":0.11773547485688596},{"x":-2.7639461811234014,"y":0.3082354748569287},{"x":-2.5400000000000773,"y":0.3809999999999718}]} />
<silkscreentext text="{NAME}" pcbX="-0.2794mm" pcbY="4.3274mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.298000000000002,"y":3.5774000000000115},{"x":2.7392000000000962,"y":3.5774000000000115},{"x":2.7392000000000962,"y":-3.983799999999974},{"x":-3.298000000000002,"y":-3.983799999999974},{"x":-3.298000000000002,"y":3.5774000000000115}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C50506.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C50506.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  )
}

const joystickPinLabels = {
  pin1: ["pin1", "X_HI"],
  pin2: ["pin2", "JOY_X"],
  pin3: ["pin3", "X_LO"],
  pin4: ["pin4", "Y_HI"],
  pin5: ["pin5", "JOY_Y"],
  pin6: ["pin6", "Y_LO"],
  pin7: ["pin7", "SW_A1"],
  pin8: ["pin8", "SW_B1"],
  pin9: ["pin8_alt1", "SW_B2"],
  pin10: ["pin7_alt1", "SW_A2"]
} as const

const joystickPinAttributes = {
  X_HI: { requiresPower: true },
  JOY_X: {},
  X_LO: { requiresGround: true },
  Y_HI: { requiresPower: true },
  JOY_Y: {},
  Y_LO: { requiresGround: true },
  SW_A1: { requiresGround: true },
  SW_B1: {},
  SW_B2: {},
  SW_A2: { requiresGround: true },
} as const

const YA13_FL7_4_B5Ka_45_10__R_Y06 = (props: ChipProps<typeof joystickPinLabels>) => {
  return (
    <chip
      pinLabels={joystickPinLabels}
      pinAttributes={joystickPinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C37323742"
  ]
}}
      manufacturerPartNumber="YA13_FL7_4_B5Ka_45_10__R_Y06"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="3.8749859mm" pcbY="7.1999221mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-6.7249421mm" pcbY="7.1999221mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-6.7249421mm" pcbY="-5.2999259mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="3.8749859mm" pcbY="-5.2999259mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-3.9251001mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-1.4249781mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.0748899mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="6.8249419mm" pcbY="-1.5498699mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="6.8249419mm" pcbY="0.9499981mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="6.8249419mm" pcbY="3.4501201mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<silkscreenpath route={[{"x":3.527996499999972,"y":-6.376454099999933},{"x":3.527996499999972,"y":-8.574976500000048},{"x":-6.378003499999977,"y":-8.574976500000048},{"x":-6.378003499999977,"y":-6.376454099999933}]} />
<silkscreenpath route={[{"x":7.851990899999919,"y":-4.086313899999936},{"x":8.099996500000088,"y":-4.086313899999936}]} />
<silkscreenpath route={[{"x":7.851990899999919,"y":5.932157300000085},{"x":8.099996500000088,"y":5.932157300000085},{"x":8.099996500000088,"y":-4.002976500000045}]} />
<silkscreenpath route={[{"x":5.051996500000087,"y":5.932157300000085},{"x":7.851990899999919,"y":5.932157300000085}]} />
<silkscreenpath route={[{"x":5.051996500000087,"y":-4.086313899999936},{"x":7.851990899999919,"y":-4.086313899999936}]} />
<silkscreenpath route={[{"x":-6.378003499999977,"y":-6.796976499999914},{"x":-6.378003499999977,"y":-7.685976499999924}]} />
<silkscreenpath route={[{"x":3.527996499999972,"y":-6.669976499999962},{"x":3.527996499999972,"y":-7.558976499999972}]} />
<silkscreenpath route={[{"x":-7.833067899999946,"y":7.427023500000018},{"x":-7.902003499999978,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":2.7669109000000844,"y":7.427023500000018},{"x":-5.6169179000000895,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":4.983060899999828,"y":-5.526976500000046},{"x":5.051996500000087,"y":-5.526976500000046},{"x":5.051996500000087,"y":7.427023500000018},{"x":4.983060899999828,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":-5.6169179000000895,"y":-5.526976500000046},{"x":2.7669109000000844,"y":-5.526976500000046}]} />
<silkscreenpath route={[{"x":-7.902003499999978,"y":7.427023500000018},{"x":-7.902003499999978,"y":-5.526976500000046},{"x":-7.833067899999946,"y":-5.526976500000046}]} />
<silkscreentext text="{NAME}" pcbX="0.1388999mm" pcbY="9.1542001mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-8.150200100000006,"y":8.40420010000014},{"x":8.427999900000032,"y":8.40420010000014},{"x":8.427999900000032,"y":-8.935999899999956},{"x":-8.150200100000006,"y":-8.935999899999956},{"x":-8.150200100000006,"y":8.40420010000014}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C37323742.obj?uuid=3d8711724bd94e00ae1621852217ca17",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C37323742.step?uuid=3d8711724bd94e00ae1621852217ca17",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 1.4249950000000027, y: -0.9500022999999729, z: -11.000007 },
      }}
      {...props}
    />
  )
}

const inputSignalReproKrtAutorouter = {
  algorithmFn: createKiCadRoutingToolsAutorouter({
    gridStep: 0.1,
    clearance: 0.2,
    maxIterations: 300_000,
  }),
}

export default () => (
  <board
    width="100mm"
    height="70mm"
    layers={4}
    defaultTraceWidth="0.15mm"
    nominalTraceWidth="0.2mm"
    minTraceWidth="0.1mm"
    autorouter={inputSignalReproKrtAutorouter}
  >
    <DRV8833PWPR
      name="U_DRV"
      pcbX={-33}
      pcbY={0}
      pcbRotation={-90}
      schX={-8}
      schY={0}
    />
    <YA13_FL7_4_B5Ka_45_10__R_Y06
      name="U_JOY"
      pcbX={2}
      pcbY={-21}
      schX={10}
      schY={0}
      pinLabels={{
        pin1: "X_HI",
        pin2: "JOY_X",
        pin3: "X_LO",
        pin4: "Y_HI",
        pin5: "JOY_Y",
        pin6: "Y_LO",
        pin7: "SW_A1",
        pin8: "SW_B1",
        pin9: "SW_B2",
        pin10: "SW_A2",
      }}
    />
    <ATMEGA328P_AU name="U_MCU" pcbX={17} pcbY={-4} schX={10} schY={14} />
    <A_3296W_1_103
      name="RV_X"
      pcbX={32}
      pcbY={0}
      schX={20}
      schY={-2}
      pinLabels={{ pin1: "VCC", pin2: "WIPER", pin3: "GND" }}
    />
    <capacitor name="C_MCU_DEC" capacitance="100nF" footprint="0603" pcbX={25} pcbY={-3} schX={14} schY={16} />
    <capacitor name="C_AREF" capacitance="100nF" footprint="0603" pcbX={25} pcbY={-7} schX={14} schY={14} />
    <resistor name="R_JOY_SW_PULLUP" resistance="10k" footprint="0603" pcbX={12} pcbY={-28} schX={14} schY={8} />
    <resistor name="R_FAULT_PULLUP" resistance="10k" footprint="0603" pcbX={-29} pcbY={-6} schX={14} schY={10} />
    <resistor name="R_NSLEEP_PULLUP" resistance="10k" footprint="0603" pcbX={-22} pcbY={10} schX={14} schY={6} />


    <trace from="C_MCU_DEC.pin1" to="U_MCU.VCC1" />
    <trace from="C_MCU_DEC.pin2" to="U_MCU.GND3" />
    <trace from="C_AREF.pin1" to="U_MCU.AREF" />
    <trace from="C_AREF.pin2" to="net.GND" />
    <trace from="U_MCU.pin4" to="net.VCC_3V3" />
    <trace from="U_MCU.pin6" to="net.VCC_3V3" />
    <trace from="U_MCU.AVCC" to="net.VCC_3V3" />
    <trace from="U_MCU.pin3" to="net.GND" />
    <trace from="U_MCU.pin5" to="net.GND" />
    <trace from="U_MCU.pin21" to="net.GND" />
    <trace from="R_JOY_SW_PULLUP.pin1" to="net.VCC_3V3" />
    <trace from="R_JOY_SW_PULLUP.pin2" to="net.JOY_SW" />
    <trace from="R_FAULT_PULLUP.pin1" to="net.VCC_3V3" />
    <trace from="R_FAULT_PULLUP.pin2" to="net.FAULT" />
    <trace from="R_NSLEEP_PULLUP.pin1" to="net.VCC_3V3" />
    <trace from="R_NSLEEP_PULLUP.pin2" to="U_DRV.nSleep" />
    <trace from="U_JOY.X_HI" to="net.VCC_3V3" />
    <trace from="U_JOY.X_LO" to="net.GND" />
    <trace from="U_JOY.JOY_X" to="net.JOY_X" />
    <trace from="U_JOY.Y_HI" to="net.VCC_3V3" />
    <trace from="U_JOY.Y_LO" to="net.GND" />
    <trace from="U_JOY.JOY_Y" to="net.JOY_Y" />
    <trace from="U_JOY.SW_A1" to="net.GND" />
    <trace from="U_JOY.SW_A2" to="net.GND" />
    <trace from="U_JOY.SW_B1" to="net.JOY_SW" />
    <trace from="U_JOY.SW_B2" to="net.JOY_SW" />
    <trace from="RV_X.VCC" to="net.VCC_3V3" />
    <trace from="RV_X.GND" to="net.GND" />
    <trace from="RV_X.WIPER" to="net.X_SPEED_WIPER" />
    <trace from="U_MCU.ADC0" to="net.JOY_X" />
    <trace from="U_MCU.ADC1" to="net.JOY_Y" />
    <trace from="U_MCU.ADC2" to="net.X_SPEED_WIPER" />
    <trace from="U_DRV.nFault" to="net.FAULT" />
    <trace from="U_MCU.INT0" to="net.FAULT" />
    <trace from="U_MCU.ADC4" to="net.JOY_SW" />
    <trace from="U_DRV.AIN1" to="net.X_IN1" />
    <trace from="U_MCU.PD5" to="net.X_IN1" />
    <trace from="U_DRV.AIN2" to="net.X_IN2" />
    <trace from="U_DRV.BIN1" to="net.Y_IN1" />
    <trace from="U_DRV.BIN2" to="net.Y_IN2" />
    <trace from="U_MCU.PD6" to="net.X_IN2" />
    <trace from="U_MCU.PD7" to="net.Y_IN1" />
    <trace from="U_MCU.PB0" to="net.Y_IN2" />
  </board>
)
