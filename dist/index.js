"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Core = __importStar(require("@actions/core"));
const turndown_1 = __importDefault(require("turndown"));
const turndown_plugin_gfm_1 = require("turndown-plugin-gfm");
// const htmlText = Core.getInput('html-text')
const htmlText = `<h2>WHY</h2>


* ページ表示速度を改善したい
* Core Web Vitalsを改善したい。
* システムの保守性を恒久的に高めたい。
* [デザインシステムの実装](https://app.asana.com/0/1203626492432925/1203675611979309/f)をしたい。


<h2>WHERE</h2>
フロントエンド全体


<h2>WHAT</h2>

- [ ] ディレクトリ構成にNext.jsを組み込む


┆Issue is synchronized with this [Asana task](https://app.asana.com/0/1203646190859733/1204002052005137) by [Unito](https://www.unito.io)
┆Section / Column: Weekly Sprint
`;
Core.info('Input HTML Text: ' + htmlText);
const markdownText = new turndown_1.default({
    headingStyle: 'atx',
})
    .use(turndown_plugin_gfm_1.gfm)
    .turndown(htmlText);
Core.setOutput('markdown-text', markdownText);
Core.info('Output Markdown Text: ' + markdownText);
