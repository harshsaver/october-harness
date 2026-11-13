import type { InlineExtension } from "../core/extensions/types.ts";
import llamaExtension from "./llama/index.ts";
import octoberExtension from "./october/index.ts";
import penharnessExtension from "./penharness/index.ts";

export const builtInExtensions: InlineExtension[] = [
	{ name: "llama.cpp", factory: llamaExtension, hidden: true },
	{ name: "october", factory: octoberExtension, hidden: true },
	{ name: "penharness", factory: penharnessExtension },
];
