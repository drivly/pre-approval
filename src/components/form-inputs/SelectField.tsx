import { CategoryType } from '@/lib/categories'
import { cn } from '@drivly/ui'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { FieldError, FieldErrorsImpl, Merge, useController } from 'react-hook-form'

interface SelectFieldProps {
  label: string
  name: string
  variant: string
  errormsg?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  cats: CategoryType[]
}

export default function SelectField(props: any) {
  const method = useController(props)
  const { name, label, cats, variant } = props as SelectFieldProps
  const errormsg = method.fieldState.error?.message

  return (
    <div className={cn('relative h-fit', variant)}>
      <label
        htmlFor={name}
        className={cn('block text-base font-medium leading-6 text-gray-900 sm:text-sm')}>
        {label}
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <select
          {...method.field}
          name={name}
          className={cn(
            'relative mt-2 block w-full rounded-md border-0 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-placeholder/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm',
            {
              'text-red-400 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
                errormsg,
            }
          )}
          value={method.field.value ? method.field.value : cats[0].optionName}>
          {cats.map((cat: any, i: number) => (
            <option key={i}>{cat.value}</option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          {errormsg && (
            <ExclamationCircleIcon className='h-5 w-5 text-red-500' aria-hidden='true' />
          )}
        </div>
      </div>
      {errormsg && (
        <p className='absolute mt-2 text-sm text-red-600' id={errormsg ? `${name}-error` : name}>
          {errormsg.toString()}
        </p>
      )}
    </div>
  )
}
