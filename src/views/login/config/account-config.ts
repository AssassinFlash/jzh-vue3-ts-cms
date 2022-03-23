// 校验规则
const rules = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '用户名应为5到10位数字或字母',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{6,}$/,
      message: '密码应为6位以上数字或字母',
      trigger: 'blur'
    }
  ]
}

export default rules
