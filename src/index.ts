import * as Core from '@actions/core'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const htmlText = Core.getInput('html-text')

Core.info('Input HTML Text: ' + htmlText)

const markdownText = new TurndownService({
  headingStyle: 'atx',
})
  .use(gfm)
  .turndown(htmlText)

Core.setOutput('markdown-text', markdownText)

Core.info('Output Markdown Text: ' + markdownText)
