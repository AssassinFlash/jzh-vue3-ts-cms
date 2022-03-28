// 用户页传给form表单的配置
import { IForm } from '@/base-ui/form'

const formConfig: IForm = {
  formItems: [
    {
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      label: '密码',
      type: 'password',
      placeholder: '请输入密码'
    },
    {
      label: '喜欢的运动',
      type: 'select',
      placeholder: '请选择喜欢的运动',
      options: [
        { label: '篮球', value: 'basketball' },
        { label: '足球', value: 'football' }
      ]
    },
    {
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' }
}

export default formConfig
