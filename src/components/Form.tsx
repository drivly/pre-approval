'use client'

import useCustomer from '@app/store'
import { states, suffixes } from '@lib/categories'
import { cn } from '@utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import InputField from '../form-inputs/InputField'
import RequiredPhone from '../form-inputs/PhoneField'
import RadioInput from '../form-inputs/RadioInput'
import SelectMenu from '../form-inputs/SelectField'
import { emailReg, zipReg } from '../lib/regex'
import Agreement from './Agreement'
import Footer from './Footer'

type FormProps = {
  search?: any
  hasVin?: boolean
  brand?: string
}

// TODO: add utm_source = rocket for submit button

export default function Form({ search, hasVin, brand }: FormProps) {
  const setCustomer = useCustomer((s) => s.setCustomer)
  const [isError, setError] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const source = searchParams.get('utm_source')
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

  async function handlePreApproval(post: RequestInput, toastId: string) {
    const request = { ...post, message: search }
    const res = await fetch('/api/pre-approval', {
      method: 'POST',
      body: JSON.stringify(request),
    })
    const approval = await res.json()

    if (approval.status === 200) {
      toast.success('Success! We will be in touch shortly.', { id: toastId })
      setCustomer({ name: post.firstName, applicationId: approval.data.preAppId })
      router.push('/success')
    }
  }

  const onSubmit: SubmitHandler<RequestInput> = async (data: any) => {
    if (!data?.agree) {
      toast.error('Please agree to the terms and conditions')
      setError(true)
      return
    }
    const toastId = toast.loading('Processing your Pre-Approval Request...')
    try {
      await handlePreApproval(data, toastId)
      reset()
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong. Please try again later.', {
        id: toastId,
      })
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
        <div
          className={cn('primary mb-[48px] pt-[2px] text-center text-2xl font-bold', {
            'opacity-50': isSubmitting,
          })}>
          <h1>Get Pre-approved</h1>
          <p className='pt-2 text-lg font-normal sm:text-base'>
            No SSN required, no impact to your credit score!
          </p>
        </div>
        <fieldset
          disabled={isSubmitting}
          className='group grid max-w-2xl grid-cols-1 gap-x-4 gap-y-10 disabled:opacity-50 peer-disabled:cursor-not-allowed sm:grid-cols-6'>
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
        </fieldset>
        <hr className={cn('border-px mx-1 my-10 border-border')} />
        <Agreement
          dealer={brand}
          className={cn({
            'disabled:opacity-50': isSubmitting,
          })}
        />
        <fieldset
          disabled={isSubmitting}
          className={cn(
            'mt-10 flex w-full flex-col items-start space-y-10 disabled:opacity-50 peer-disabled:cursor-not-allowed sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:mt-auto'
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
                // Add branding for Button
                'bg-[#910D22] hover:bg-[#7D0C1E]': source || brand === 'rocket',
                //  === 'cloudmotors'
              }
            )}
            type='submit'>
            Submit
          </button>
        </fieldset>
        {hasVin && <Footer hasVin={hasVin} className='pb-8 pt-16 lg:hidden' />}
      </form>
      {!hasVin && <Footer hasVin={hasVin} className='pt-16' />}
    </>
  )
}
