// import { App } from 'vue'

// export default function registerApp(app: App): void {
//   // app.use(...)
// }

import { App } from 'vue'
import registerProperties from './register-properties'

export default function globalRegister(app: App) {
  app.use(registerProperties)
}
