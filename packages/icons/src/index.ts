import CloseCircle from './CloseCircle.js'
import Delete from './Delete.js'
import Edit from './Edit.js'
import EyeInvisible from './EyeInvisible.js'
import Eye from './Eye.js'
import Loading from './Loading.js'

export { CloseCircle, Delete, Edit, EyeInvisible, Eye, Loading }

const components = [CloseCircle, Delete, Edit, EyeInvisible, Eye, Loading]

export function install(app: any) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
