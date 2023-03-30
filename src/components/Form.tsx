'use client'

import { states, suffixes } from '@lib/categories'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailReg, zipReg } from '../lib/regex'
import AgreementText from './AgreementText'
import InputField from './InputField'
import RequiredPhone from './RequiredPhone'
import SelectMenu from './SelectMenu'
import ToggleInput from './ToggleInput'

export interface RequestInput {
  firstName: string
  middleInitial?: string
  lastName: string
  suffix?: string
  email: string
  phoneNumber: string
  streetAddress: string
  city: string
  state: string
  zipcode: string
  agree: boolean
}

export default function Form() {
  const methods = useForm<RequestInput>({ mode: 'all' })
  const [state, setState] = useState(null)
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitSuccessful },
  } = methods

  console.log('isValid', isValid)
  async function handlePreApproval(post: RequestInput) {
    const res = await fetch('/api/pre-approval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
    const data = await res.json()
    return data
  }

  const onSubmit: SubmitHandler<RequestInput> = async (data: any) => {
    try {
      const request = await handlePreApproval(data)
      reset()
     console.log(isSubmitSuccessful && request.success)
    } catch (error) {
      console.error(error)
    }
  }

  const watchAgree = watch('agree')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='rounded-[4px] bg-skin-card py-8 px-4 sm:p-8'>
      <h1 className='mb-5 text-xl font-bold text-skin-base'>Get Pre-approved</h1>
      <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <InputField
          {...register('firstName', { required: 'Required' })}
          label='First Name *'
          type='text'
          name='firstName'
          variant='w-full sm:col-span-2'
          errormsg={errors.firstName?.message!}
          placeholder='First Name*'
        />
        <InputField
          {...register('middleInitial', {
            maxLength: { value: 3, message: 'Must be less than 3' },
            onChange: (e) => {
              e.target.value = e.target.value.toUpperCase()
            },
          })}
          label='MI'
          type='text'
          name='middleInitial'
          errormsg={errors.middleInitial?.message!}
          variant='sm:col-span-1'
          placeholder='MI'
        />

        <InputField
          {...register('lastName', { required: 'Required' })}
          label='Last Name *'
          type='text'
          name='lastName'
          variant='w-full sm:col-span-2'
          errormsg={errors.lastName?.message!}
          placeholder='Last Name*'
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
            pattern: { value: emailReg, message: 'Invalid Email' },
          })}
          label='Email *'
          type='text'
          name='email'
          errormsg={errors.email?.message!}
          variant='sm:col-span-3'
          placeholder='Email*'
        />
        <RequiredPhone
          name='phoneNumber'
          label='Phone *'
          placeholder='Phone number*'
          variant='sm:col-span-3 col-span-6'
          control={control}
          errormsg={errors.phoneNumber?.message!}
        />
        <InputField
          {...register('streetAddress', { required: 'Required' })}
          label='Street address *'
          type='text'
          name='streetAddress'
          variant=''
          errormsg={errors.streetAddress?.message!}
          placeholder='Street address*'
        />
        <InputField
          {...register('city', { required: 'Required' })}
          label='City *'
          type='text'
          name='city'
          variant='sm:col-span-3'
          errormsg={errors.city?.message!}
          placeholder='City*'
        />
        <SelectMenu
          label='State *'
          name='state'
          control={control}
          cats={states}
          variant='col-span-6 sm:col-span-1'
          rules={{ required: 'Required' }}
        />

        <InputField
          {...register('zipcode', {
            required: 'Required',
            pattern: { value: zipReg, message: 'Invalid Zip' },
          })}
          label='Zipcode *'
          type='text'
          name='zipcode'
          errormsg={errors.zipcode?.message!}
          variant='sm:col-span-2'
          placeholder='Zipcode*'
        />
      </div>

      <hr className='border-px mx-1 my-8 border-baseAlt2Color' />
      <AgreementText dealer='Cloud Motors' />
      <div className='flex w-full items-center justify-between'>
        <ToggleInput
          rules={{ required: 'Agree to continue' }}
          name='agree'
          control={control}
          label='I agree'
          disabled={isValid}
          errormsg={errors?.agree?.message!}
        />
        <button
          className='h-[50px] w-36 rounded-[4px] border bg-skin-button-inverted text-skin-inverted hover:border-DRIVLY'
          type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}
