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
        className={`${
          errormsg ? 'text-red-400' : 'text-gray-900'
        } block text-sm font-medium leading-6 `}
        htmlFor={label}>
        {label}
      </label>
      <PhoneInput
        className={`${
          errormsg
            ? 'text-red-400 outline-none ring-1 ring-inset ring-red-400 focus:ring-2 focus:ring-inset focus:ring-red-400'
            : 'text-gray-900 outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-DRIVLY'
        } mt-2 block w-full rounded-md border-0 py-1.5 px-3 shadow-sm placeholder:text-[#8E8EA3]/50  sm:text-sm sm:leading-6`}
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
        <span className='absolute top-[1px] right-0 text-xs font-medium leading-6 text-red-400'>
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
