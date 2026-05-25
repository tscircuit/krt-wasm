import React from "react"
import { createKiCadRoutingToolsAutorouter } from "../../../../src/index"
import { A_3296W_1_103 } from "./imports/A_3296W_1_103"
import { ATMEGA328P_AU } from "./imports/ATMEGA328P_AU"
import { DRV8833PWPR } from "./imports/DRV8833PWPR"
import { YA13_FL7_4_B5Ka_45_10__R_Y06 } from "./imports/YA13_FL7_4_B5Ka_45_10__R_Y06"

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
