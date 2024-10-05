export default {
  '*.*': (staged) => ['npm run lint', `npm run format ${staged.join(' ')}`]
}