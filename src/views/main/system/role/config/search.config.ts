// 角色管理页传给form组件的配置
import type { IForm } from '@/base-ui/form'

const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名称',
      type: 'input',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      label: '权限介绍',
      type: 'input',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}

export default searchFormConfig
