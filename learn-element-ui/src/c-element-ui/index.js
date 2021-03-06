import CButton from './packages/c-button/index.js'
import CButtonGroup from './packages/c-button-group/index.js'
import CTag from './packages/c-tag/index.js'
import CLink from './packages/c-link/index.js'
import CCol from './packages/c-col/index.js'
import CRow from './packages/c-row/index.js'
import {
  CContainer,
  CHeader,
  CAside,
  CMain,
  CFooter
} from './packages/c-container/index'
import CAvatar from './packages/c-avatar/index.js'
import CBadge from './packages/c-badge/index'
import CAlert from './packages/c-alert/index'
import CDivider from './packages/c-divider/index'
import {
  CBreadcrumb,
  CBreadcrumbItem
} from './packages/c-breadcrumb/index'
import CBacktop from './packages/c-backtop/index.js'
import {
  CForm,
  CFormItem
} from './packages/c-form/index'
import {
  Page,
  PageHeader,
  PageContent,
  PageContentItem
} from './packages/page/index'
import CSpace from './packages/c-space/index.js'
import {
  CCollapse,
  CCollapseItem
} from './packages/c-collapse/index'
import Previewer from './packages/previewer'

const components = [
  CButton,
  CButtonGroup,
  CTag,
  CLink,
  CCol,
  CRow,
  CContainer,
  CHeader,
  CAside,
  CMain,
  CFooter,
  CAvatar,
  CBadge,
  CAlert,
  CDivider,
  CBreadcrumb,
  CBreadcrumbItem,
  CBacktop,
  CForm,
  CFormItem,
  Page,
  PageHeader,
  PageContent,
  PageContentItem,
  CSpace,
  CCollapse,
  CCollapseItem,
  Previewer
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
