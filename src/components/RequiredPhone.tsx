import { isPossiblePhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input/react-hook-form-input'

type RequiredPhoneProps = {
  label: string
  name: string
  placeholder: string
  control: any
  errors: any
}

export default function RequiredPhone({
  label,
  name,
  placeholder,
  control,
  errors,
}: RequiredPhoneProps) {
  return (
    <div className='relative mb-6 flex flex-col sm:w-full'>
      <label
        className='block font-lato text-sm font-semibold tracking-tight text-skin-label'
        htmlFor={label}>
        {label}
      </label>
      <PhoneInput
        className='focus:border-drivly mt-0.5 h-[50px] w-full rounded-[5px] border border-BORDER_DARK px-4 text-skin-base outline-none placeholder:text-skin-placeholder/60 focus:ring-1 focus:ring-DRIVLY'
        name={name}
        placeholder={placeholder}
        control={control}
        rules={{
          required: 'Required',
          validate: (value: any) => isPossiblePhoneNumber(value) || `Invalid ${label}`,
        }}
        country='US'
      />
      {errors && (
        <span className='absolute -bottom-5 right-0 font-lato text-xs font-black tracking-wider text-skin-warning'>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  )
}
