// 该传的值的类型
type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  label: string
  rules?: any[]
  placeholder?: any
  type: IFormType
  // 针对 select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth: string
  itemStyle: any
  colWidth: any
}
