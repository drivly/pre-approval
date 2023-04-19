import React from 'react'
import { useController } from 'react-hook-form'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface CheckboxProps {
  label: string
  name: string
  control: any
  isValid: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, InputProps & CheckboxProps>((props, ref) => {
  const { control, isValid, label, name } = props
  const { field } = useController({
    name,
    control,
  })

  console.log('isValid', isValid)

  return (
    <label htmlFor={name} className='relative flex h-8 cursor-pointer items-center'>
      <div className='mr-4 flex items-center'>
        <input
          {...field}
          disabled={isValid === false ? true : false}
          name={name}
          onChange={field.onChange}
          checked={field.value ? true : false}
          id={name}
          type='checkbox'
          className={`${isValid ? 'outline-DRIVLY focus:ring-DRIVLY border-gray-300 ring-DRIVLY ring-offset-2' : ''} h-4 w-4 rounded border-gray-300 text-skin-base accent-DRIVLY `}
        />
      </div>
      <div className='text-sm leading-6'>
        <span className={`${field.value ? 'text-skin-base' : 'text-[#8E8EA3]'} font-medium`}>
          {label}
        </span>
      </div>
    </label>
  )
})

export default Checkbox
Checkbox.displayName = 'TWCheckbox'
