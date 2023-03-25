import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useController } from 'react-hook-form'

interface SelectMenuProps {
  label: string
  name: string
}

export default function SelectMenu(props: any) {
  const method = useController(props)
  const { name, label, states } = props

  return (
    <div className='flex flex-col -mt-[23px] relative'>
      <label
        className='font-lato tracking-tight text-skin-label block text-sm font-semibold'
        htmlFor={name}>
        {label}
      </label>
      <Listbox {...method.field} value={method.field.value ? method.field.value : states[0].optionName} as='div' className='relative mt-0.5'>
        {({ open }) => (
          <div className="h-full">
            <Listbox.Button className='relative min-w-[100px] bg-white border border-BORDER_DARK rounded-[4px] px-4 h-[50px]'>
              <div className='flex items-center justify-between w-full cursor-pointer h-full'>
                <p className={`${method.field.value ? 'text-skin-base' : 'text-skin-placeholder'}  font-normal text-sm flex-1 w-full`}>
                  {method.field.value ? method.field.value : states[0].optionName}
                </p>
                <ChevronDownIcon className='w-5 h-5 text-skin-base' />
              </div>
            </Listbox.Button>
            {open && (
              <Listbox.Options className='absolute top-full right-0 w-full sm:w-[100px] mt-1 h-60 overflow-auto scrollbar-hide z-10 bg-white border border-BORDER_DARK py-1 rounded-md'>
                {states.map((state: any, i: number) => (
                  <Listbox.Option key={i} value={state.value}>
                    {({ active }) => (
                      <button className={`block px-4 py-2 text-sm w-full text-baseAlt4Color ${active || state.value === method.field.value ? 'bg-BG_LIGHT text-skin-label' : ''}`}>
                        {state.value ? state.value : state.optionName}
                      </button>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </div>
        )}
      </Listbox>
      {method.formState.errors && (
        <span className="absolute -bottom-5 right-0 font-lato text-xs font-black tracking-wider text-skin-warning">
          {method.formState.errors.state?.message.toString()}
        </span>
      )}
    </div>
  )
}
