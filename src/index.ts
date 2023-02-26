import * as Core from '@actions/core'
import Turndown from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const htmlText = Core.getInput('text')

Core.info('Input text: ' + htmlText)

const markdownText = new Turndown().use(gfm).turndown(htmlText)

Core.setOutput('text', markdownText)

Core.info('Output text: ' + htmlText)
