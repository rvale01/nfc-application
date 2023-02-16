"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var backend_exports = {};
__export(backend_exports, {
  app: () => app
});
module.exports = __toCommonJS(backend_exports);
var express = require("express");
var app = express();
var PORT = 4e3;
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});
app.use(express.json());
app.use(express.urlencoded());
module.exports = app;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
