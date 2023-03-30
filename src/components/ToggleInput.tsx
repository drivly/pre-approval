import { Switch } from '@headlessui/react'
import { useController } from 'react-hook-form'

export default function ToggleField(props: any) {
  const { name, label, variant, control, value } = props
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  })

  console.log('props', value)

  return (
    <div className={`${variant} flex items-center gap-x-4`}>
      <Switch.Group>
        <Switch
          {...field}
          name={name}
          onChange={field.onChange}
          checked={value}
          className={`${
            field.value ? 'bg-black' : 'bg-gray-400'
          } relative my-3 inline-flex h-5 w-10 min-w-[40px] items-center rounded-full transition-colors focus:outline-none`}>
          <span className='sr-only'>Agree to Credit App</span>
          <span
            className={`${
              field.value ? 'translate-x-[22px]' : 'translate-x-1'
            } inline-block h-3.5 w-3.5 transform rounded-full bg-white backdrop-blur-lg transition`}
          />
        </Switch>
        <Switch.Label
          className={`${field.value ? 'text-gray-900' : 'text-gray-600'} cursor-pointer text-sm`}>
          {label}
        </Switch.Label>
      </Switch.Group>
    </div>
  )
}
