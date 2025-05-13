const fs = require('fs')
const path = require('path')

const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
`

fs.writeFileSync(path.join('.husky', 'pre-commit'), hookContent, {
  encoding: 'utf8',
  mode: 0o755 // This sets the file as executable
})

console.log('Hook file created successfully!')
