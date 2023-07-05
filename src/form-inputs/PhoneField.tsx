import { cn } from '@utils'
import { Control, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input/react-hook-form-input'
import { RequestInput } from '../../typings'

type PhoneFieldProps = {
  label: string
  name: string
  placeholder: string
  control: Control<RequestInput, any>
  errormsg?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  variant: string
  message?: string
}

export default function PhoneField({
  label,
  name,
  placeholder,
  control,
  errormsg,
  variant,
  message,
}: PhoneFieldProps) {
  return (
    <div className={`${variant} relative flex w-full flex-col`}>
      <label
        className={cn('block text-sm font-medium leading-6 text-gray-900', {
          'text-red-400': errormsg,
        })}
        htmlFor={label}>
        {label}
      </label>
      <PhoneInput
        className={cn(
          'mt-2 block w-full rounded-md border-[2px] px-3 py-1.5 h-[40px] text-gray-900 outline-none placeholder:text-[#8E8EA3]/50 focus:border-[2px] focus:border-DRIVLY sm:text-sm sm:leading-6',
          {
            'border-red-400 text-red-400 focus:border-red-400': errormsg,
          }
        )}
        name={name}
        placeholder={placeholder}
        control={control}
        rules={{
          required: `Required`,
          validate: (value: any) => isPossiblePhoneNumber(value) || `Invalid`,
        }}
        country='US'
      />
      {errormsg && (
        <span className='absolute right-0 top-[1px] text-xs font-medium leading-6 text-red-400'>
          {errormsg.toString()}
        </span>
      )}
      {message && (
        <span className='absolute -bottom-4 left-0.5 text-[9px] font-medium text-gray-800'>
          <span className='whitespace-nowrap'>{message}</span>
        </span>
      )}
    </div>
  )
}
