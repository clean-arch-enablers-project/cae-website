export default {
  '*.{js,ts,tsx,css}': (staged) => [
    'npm run lint',
    `npm run format ${staged.join(' ')}`
  ]
}
