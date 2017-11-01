'use strict'

import fs from 'fs'
import XsjCompiler from './src/compiler'

function showUsage () {
  console.error('Useage: xsj FILENAME')
  process.exit(1)
}

const srcname = process.argv[2] || showUsage()
const srcbuf = fs.readFileSync(srcname)
const compiler = new XsjCompiler(srcbuf)

compiler.run()
