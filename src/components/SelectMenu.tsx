import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useController } from 'react-hook-form'

interface SelectMenuProps {
  label: string
  name: string
}

export default function SelectMenu(props: any) {
  const method = useController(props)
  const { name, label, cats } = props

  return (
    <div className='relative -mt-6 flex flex-col justify-center'>
      <label
        className='block font-lato text-sm font-semibold tracking-tight text-skin-label'
        htmlFor={name}>
        {label}
      </label>
      <Listbox
        {...method.field}
        value={method.field.value ? method.field.value : cats[0].optionName}
        as='div'
        className='relative mt-0.5'>
        {({ open }) => (
          <div className='h-full'>
            <Listbox.Button className='relative h-[50px] min-w-[100px] rounded-[4px] border border-BORDER_DARK bg-white px-4'>
              <div className='flex h-full w-full cursor-pointer items-center justify-between'>
                <p
                  className={`${
                    method.field.value ? 'text-skin-base' : 'text-skin-placeholder/60'
                  }  w-full flex-1 text-sm font-normal`}>
                  {method.field.value ? method.field.value : cats[0].optionName}
                </p>
                <ChevronDownIcon className='h-5 w-5 text-skin-base/50' />
              </div>
            </Listbox.Button>
            {open && (
              <Listbox.Options className='absolute top-full right-0 z-10 mt-1 h-56 w-full overflow-auto rounded-md border border-BORDER_DARK bg-skin-base py-1 scrollbar-hide sm:w-[100px]'>
                {cats.map((cat: any, i: number) => (
                  <Listbox.Option key={i} value={cat.value}>
                    {({ active }) => (
                      <button
                        className={`block w-full px-4 py-2 text-sm text-skin-label hover:text-skin-base ${
                          active || cat.value === method.field.value
                            ? 'bg-skin-card text-skin-base'
                            : ''
                        }`}>
                        {cat.value ? cat.value : cat.optionName}
                      </button>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </div>
        )}
      </Listbox>
      {name === 'state' && method.formState.errors && (
        <span className='absolute -bottom-5 right-0 font-lato text-xs font-black tracking-wider text-skin-warning'>
          {method.formState?.errors?.state?.message?.toString()}
        </span>
      )}
    </div>
  )
}
