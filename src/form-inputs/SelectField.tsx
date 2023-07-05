import { CategoryType } from '@/lib/categories'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { cn } from '@utils'
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
  const { name, label, cats, variant, errormsg } = props as SelectFieldProps

  return (
    <div className={`${variant} relative`}>
      <Listbox
        {...method.field}
        value={method.field.value ? method.field.value : cats[0].optionName}
        name={name}
        as='div'
        className=''>
        {({ open }) => (
          <>
            <Listbox.Label
              className={cn('block text-sm font-medium leading-6 text-gray-900', {
                'text-red-400': errormsg,
              })}
              htmlFor={name}>
              {label}
            </Listbox.Label>

            <div className='relative mt-2 h-full w-full'>
              <Listbox.Button
                className={cn(
                  'block h-[40px] w-full rounded-md border-[2px] px-3 text-gray-900 outline-none placeholder:text-[#8E8EA3]/50 focus:border-[2px] focus:border-DRIVLY sm:text-sm sm:leading-6',
                  {
                    'border-red-400 text-red-400 focus:border-red-400': errormsg,
                  }
                )}>
                <div className='flex h-full w-full cursor-pointer items-center justify-between'>
                  <span
                    className={`${
                      method.field.value !== undefined ? 'text-gray-900' : 'text-[#8E8EA3]/50'
                    }  w-full flex-1 text-sm font-normal`}>
                    {method.field.value ? method.field.value : cats[0].optionName}
                  </span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                    <ChevronDownIcon className='h-5 w-5 text-skin-base/50' aria-hidden='true' />
                  </span>
                </div>
              </Listbox.Button>
              {open && (
                <Listbox.Options className='absolute left-0 z-10 mt-1 h-40 w-full overflow-auto rounded-md border border-BORDER_DARK bg-[#E2E2E3] py-1 shadow-sm outline-none scrollbar-hide'>
                  {cats.map((cat: any, i: number) => (
                    <Listbox.Option
                      key={i}
                      value={cat.value}
                      className={({ active }) =>
                        `relative mx-1 cursor-default select-none py-1 pl-6 pr-4 text-sm ${
                          active ? 'bg-blue-400 text-white' : 'text-gray-900'
                        }`
                      }>
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}>
                            {cat.value}
                          </span>
                          {selected ? (
                            <span className='absolute inset-y-0 left-0 flex items-center pl-1.5 text-white'>
                              <CheckIcon className='h-3 w-4' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              )}
            </div>
            {errormsg && (
              <span
                className={`${
                  !label ? '-top-6' : 'top-0'
                } absolute right-0  text-xs font-medium leading-6 text-red-400`}>
                {errormsg?.toString()}
              </span>
            )}
          </>
        )}
      </Listbox>
    </div>
  )
}
