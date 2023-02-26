import * as Core from '@actions/core'
import Turndown from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const htmlText = Core.getInput('html-text')

Core.info('Input HTML Text: ' + htmlText)

const markdownText = new Turndown().use(gfm).turndown(htmlText)

Core.setOutput('markdown-text', markdownText)

Core.info('Output Markdown Text: ' + htmlText)
