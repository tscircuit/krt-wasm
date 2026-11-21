import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { createRequire } from "node:module"
import { resolve } from "node:path"
import { pathToFileURL } from "node:url"

const packageDir = resolve(process.argv[2])
const require = createRequire(import.meta.url)
const { getKiCadRoutingToolsVersion, KiCadRoutingToolsAutorouter } =
  await import(pathToFileURL(require.resolve(packageDir)))
const version = await readFile(new URL("../VERSION", import.meta.url), "utf8")
assert.equal(getKiCadRoutingToolsVersion(), version.trim())

const traces = new KiCadRoutingToolsAutorouter({
  layerCount: 2,
  minTraceWidth: 0.15,
  bounds: { minX: -5, maxX: 5, minY: -5, maxY: 5 },
  obstacles: [],
  connections: [{
    name: "signal",
    pointsToConnect: [
      { x: -2, y: 0, layer: "top" },
      { x: 2, y: 0, layer: "top" },
    ],
  }],
}).solveSync()
assert.equal(traces.length, 1)
assert.equal(traces[0].connection_name, "signal")
assert.ok(traces[0].route.length >= 2)
