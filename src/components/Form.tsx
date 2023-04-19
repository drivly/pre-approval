'use client'

import { states, suffixes } from '@lib/categories'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { RequestInput } from '../../typings'
import { emailReg, zipReg } from '../lib/regex'
import AgreementText from './AgreementText'
import Checkbox from './Checkbox'
import InputField from './InputField'
import RequiredPhone from './RequiredPhone'
import SelectMenu from './SelectMenu'
import ToggleInput from './ToggleInput'

export default function Form({ searchParams }: { searchParams?: any }) {
  const methods = useForm<RequestInput>({ mode: 'all' })
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = methods
  
  const watchAgree = watch('agree', false)

  async function handlePreApproval(post: RequestInput) {
    const request = { ...post, message: searchParams }
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
    try {
      await handlePreApproval(data)
      reset()
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong. Please try again later.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${searchParams ? 'shadow__left' : ''} max-w-[640px] select-none py-8 px-4 sm:p-8`}>
      <h1 className='mb-5 text-xl font-bold text-skin-base'>Get Pre-approved</h1>
      <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <InputField
          {...register('firstName', {
            required: 'Required',
            maxLength: { value: 30, message: 'Max 30 chars' },
          })}
          label='First Name *'
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
          label='Last Name *'
          type='text'
          name='lastName'
          variant='w-full sm:col-span-2'
          errormsg={errors.lastName?.message!}
          placeholder='Jones'
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
          label='Email *'
          type='text'
          name='email'
          errormsg={errors.email?.message!}
          variant='sm:col-span-3'
          placeholder='jonjones@gmail.com'
        />
        <RequiredPhone
          name='phone'
          label='Phone *'
          placeholder='575-555-1212'
          variant='sm:col-span-3 col-span-6'
          control={control}
          errormsg={errors.phone?.message!}
        />
        <InputField
          {...register('streetAddress', {
            required: 'Required',
            maxLength: { value: 200, message: 'Max 200 chars' },
          })}
          label='Street address *'
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
          label='City *'
          type='text'
          name='city'
          variant='sm:col-span-3'
          errormsg={errors.city?.message!}
          placeholder='Sante Fe'
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
            pattern: { value: zipReg, message: 'Invalid' },
          })}
          label='Zipcode *'
          type='text'
          name='zipcode'
          errormsg={errors.zipcode?.message!}
          variant='sm:col-span-2'
          placeholder='55874'
        />
      </div>

      <hr className='border-px mx-1 my-8 border-baseAlt2Color' />
      <AgreementText dealer='Cloud Motors' />
      <div className='flex w-full items-center justify-between'>
        <Checkbox control={control} name='agree' label='I Agree *' isValid={isValid} />
        <button
          disabled={!watchAgree}
          className='h-[50px] w-36 rounded-[4px]  border bg-skin-button-inverted text-skin-inverted hover:border-DRIVLY'
          type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}
