import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

const source = join(process.cwd(), 'public', '.nojekyll')
const dest = join(process.cwd(), 'build', '.nojekyll')

if (existsSync(source)) {
  copyFileSync(source, dest)
  console.log('✓ Copied .nojekyll to build directory')
} else {
  console.warn('⚠ .nojekyll file not found in public directory')
}

