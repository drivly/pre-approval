import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { cn } from '@utils'
import { Control, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input/react-hook-form-input'

type PhoneFieldProps = {
  label: string
  name: string
  control: Control<RequestInput, any>
  errormsg?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  className: string
  placeholder?: string
}

export default function PhoneField({
  label,
  name,
  control,
  errormsg,
  className,
  placeholder,
}: PhoneFieldProps) {
  return (
    <div className={cn('relative col-span-6 h-fit w-full', className)}>
      <label
        htmlFor={name}
        className={cn('block text-base font-medium leading-6 text-gray-900 sm:text-sm')}>
        {label}
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <PhoneInput
          className={cn(
            'block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-placeholder/50 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm',
            {
              'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500':
                errormsg,
            }
          )}
          name={name}
          aria-describedby={errormsg ? `${name}-error` : name}
          control={control}
          placeholder={placeholder}
          rules={{
            required: `Required`,
            validate: (value: any) => isPossiblePhoneNumber(value) || `Invalid`,
          }}
          country='US'
        />
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
