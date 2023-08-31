import { cn } from '@drivly/ui'
import React from 'react'

interface RadioProps {
  label: string
  errormsg?: string
}

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const RadioButton = React.forwardRef<HTMLInputElement, InputProps & RadioProps>((props, ref) => {
  const { label, id, errormsg } = props
  return (
    <div className='relative flex items-center justify-start'>
      <label
        htmlFor={id}
        className={cn(
          'block cursor-pointer text-base font-medium leading-6 text-gray-900 sm:text-sm'
        )}>
        <input
          ref={ref}
          type='radio'
          className='mr-4 h-5 w-5 border-gray-300 text-gray-600 focus:ring-primary sm:h-4 sm:w-4'
          id={id}
          {...props}
        />
        {label}
      </label>
      {errormsg && (
        <p
          className='absolute left-0 mt-[52px] text-sm text-red-600'
          id={errormsg ? `${id}-error` : id}>
          {errormsg.toString()}
        </p>
      )}
    </div>
  )
})

export default RadioButton
RadioButton.displayName = 'RadioButton'
