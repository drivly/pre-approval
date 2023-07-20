'use client'

import { states, suffixes } from '@lib/categories'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import InputField from '../form-inputs/InputField'
import RadioInput from '../form-inputs/RadioInput'
import RequiredPhone from '../form-inputs/PhoneField'
import SelectMenu from '../form-inputs/SelectField'
import { emailReg, zipReg } from '../lib/regex'
import AgreementText from './AgreementText'
import Footer from './Footer'
import { usePathname, useSearchParams } from 'next/navigation'
import { cn } from '@utils'
import { useState } from 'react'

type FormProps = {
  search?: any
  hasVin?: boolean
  brand?: string
}

export default function Form({ search, hasVin, brand }: FormProps) {
  const searchParams = useSearchParams()
  const source = searchParams.get('utm_source')
  const [isError, setError] = useState(false)
  const methods = useForm<RequestInput>({ mode: 'onBlur' })
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = methods
  const pathname = usePathname()
  const isHome = pathname === '/'

  async function handlePreApproval(post: RequestInput) {
    const request = { ...post, message: search }
    const res = await fetch('/api/pre-approval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    }).then((res) => res.json())
    if (res.status === 200) {
      toast.success('Success! We will be in touch shortly.')
    }
  }

  const onSubmit: SubmitHandler<RequestInput> = async (data: any) => {
    if (!data?.agree) {
      toast.error('Please agree to the terms and conditions')
      setError(true)
      return
    }
    try {
      await handlePreApproval(data)
      reset()
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong. Please try again later.')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          'flex h-fit min-h-[800px] max-w-[640px] select-none flex-col justify-between px-4 py-8 sm:px-8',
          {
            'lg:mt-0 lg:flex lg:max-h-[800px] lg:pl-[72px] lg:pr-8': !isHome,
          }
        )}>
        <div className={cn('primary mb-[48px] pt-[2px] text-center text-2xl font-bold')}>
          <h1>Get Pre-approved</h1>
          <p className='pt-2 text-lg font-normal sm:text-base'>
            No SSN required, no impact to your credit score!
          </p>
        </div>
        <div className='grid max-w-2xl grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-6'>
          <InputField
            {...register('firstName', {
              required: 'Required',
              maxLength: { value: 30, message: 'Max 30 chars' },
            })}
            label='First Name*'
            type='text'
            name='firstName'
            variant='w-full sm:col-span-2'
            errormsg={errors.firstName?.message!}
            placeholder='Jon'
          />
          <InputField
            {...register('middleInitial', {
              maxLength: { value: 3, message: '< 3' },
              onChange: (e) => {
                e.target.value = e.target.value.toUpperCase()
              },
            })}
            label='MI'
            type='text'
            name='middleInitial'
            errormsg={errors.middleInitial?.message!}
            variant='sm:col-span-1'
            placeholder='B'
          />

          <InputField
            {...register('lastName', {
              required: 'Required',
              maxLength: { value: 30, message: 'Max 30 chars' },
            })}
            label='Last Name*'
            type='text'
            name='lastName'
            variant='w-full sm:col-span-2'
            errormsg={errors.lastName?.message!}
            placeholder='Smith'
          />
          <SelectMenu
            variant='col-span-6 sm:col-span-1'
            label='Suffix'
            name='suffix'
            control={control}
            cats={suffixes}
          />
          <InputField
            {...register('email', {
              required: 'Required',
              pattern: { value: emailReg, message: 'Invalid' },
            })}
            label='Email*'
            type='text'
            name='email'
            errormsg={errors.email?.message!}
            variant='sm:col-span-3'
            placeholder='jonsmith@gmail.com'
          />
          <RequiredPhone
            name='phone'
            label='Phone*'
            placeholder='561-555-1212'
            className='col-span-6 sm:col-span-3'
            control={control}
            errormsg={errors.phone?.message!}
          />
          <InputField
            {...register('streetAddress', {
              required: 'Required',
              maxLength: { value: 200, message: 'Max 200 chars' },
            })}
            label='Street address*'
            type='text'
            name='streetAddress'
            variant=''
            errormsg={errors.streetAddress?.message!}
            placeholder='512 E. Main St.'
          />
          <InputField
            {...register('city', {
              required: 'Required',
              maxLength: { value: 30, message: 'Max 30 chars' },
            })}
            label='City*'
            type='text'
            name='city'
            variant='sm:col-span-3'
            errormsg={errors.city?.message!}
            placeholder='Juno Beach'
          />
          <SelectMenu
            label='State*'
            name='state'
            control={control}
            cats={states}
            variant='col-span-6 sm:col-span-1'
            rules={{ required: 'Required' }}
          />

          <InputField
            {...register('zipcode', {
              required: 'Required',
              pattern: { value: zipReg, message: 'Invalid' },
            })}
            label='Zipcode*'
            type='text'
            name='zipcode'
            errormsg={errors.zipcode?.message!}
            variant='sm:col-span-2'
            placeholder='33408'
          />
        </div>

        <hr className={cn('border-px mx-1 my-10 border-border')} />
        <AgreementText dealer={brand} />

        <div
          className={cn(
            'mt-10 flex w-full flex-col items-start space-y-10 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:mt-auto'
          )}>
          <RadioInput
            {...methods.register('agree')}
            label='I Agree*'
            id='agree'
            value='YES'
            errormsg={isError ? 'Required' : ''}
            onClick={() => setError(false)}
          />
          <button
            disabled={!isValid || !isDirty || isSubmitting}
            className={cn(
              'inline-flex w-full min-w-[174px] justify-center rounded-md border border-transparent bg-primary py-4 text-[16px] font-medium text-white shadow-sm hover:border-primary focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:w-48 sm:px-4 sm:py-2 sm:text-sm',
              {
                'bg-[#910D22] hover:bg-[#7D0C1E]': source === 'cloudmotors',
              }
            )}
            type='submit'>
            Submit
          </button>
        </div>
        {/* `${hasVin ? 'pb-8 pt-16 lg:hidden' : 'pt-16'}  block ` */}
        {hasVin && <Footer hasVin={hasVin} className='pb-8 pt-16 lg:hidden' />}
      </form>
      {!hasVin && <Footer hasVin={hasVin} className='pt-16' />}
    </>
  )
}
