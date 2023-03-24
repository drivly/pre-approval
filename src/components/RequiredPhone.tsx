import { isPossiblePhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input/react-hook-form-input'

type RequiredPhoneProps = {
  label: string
  name: string
  placeholder: string
  control: any
  errors: any
}

export default function RequiredPhone({ label, name, placeholder, control, errors }: RequiredPhoneProps) {
  return (
    <div className='flex flex-col relative mb-6 sm:w-full mx-1'>
      <label className='font-lato tracking-tight text-gray-700 block text-sm font-semibold' htmlFor={label}>{label}</label>
      <PhoneInput className='outline-none w-full placeholder:text-txtDisabledColor/50 focus:ring-1 focus:ring-DRIVLY mt-0.5 focus:border-drivly h-[50px] px-4 border border-BORDER_DARK rounded-[5px]' name={name} placeholder={placeholder} control={control} rules={{
        required: 'Required',
        validate: (value: any) => isPossiblePhoneNumber(value) || `Invalid ${label}`
      }}
        country='US'
      />
      {errors && (
        <span className='font-lato text-xs font-black absolute -bottom-5 right-0 text-red-600/80 tracking-wider'>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  )
}
