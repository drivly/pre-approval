'use client'

import { states, suffixes } from '@lib/categories'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { RequestInput } from '../../typings'
import InputField from '../form-inputs/InputField'
import RadioInput from '../form-inputs/RadioInput'
import RequiredPhone from '../form-inputs/PhoneField'
import SelectMenu from '../form-inputs/SelectField'
import { emailReg, zipReg } from '../lib/regex'
import AgreementText from './AgreementText'
import Footer from './Footer'
import { usePathname } from 'next/navigation'
import { cn } from '@utils'

type FormProps = {
  search?: any
  hasVin?: boolean
  brand?: string
}

export default function Form({ search, hasVin, brand }: FormProps) {
  const methods = useForm<RequestInput>({ mode: 'all' })
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = methods
  const pathname = usePathname()
  const isHome = pathname === '/'

  const watchAgree = watch('agree', false)

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
        className={`${
          isHome ? 'flex min-h-[700px]' : 'lg:mt-0 lg:flex lg:min-h-[750px] lg:pl-[72px] lg:pr-8'
        }  h-full max-w-[640px] select-none flex-col justify-between px-4 py-8 sm:px-8 `}>
        <div className={`${isHome ? 'mb-[32px]' : 'mb-[32px] lg:mb-[8px]'}  w-fit`}>
          <h1 className='pt-[2px] text-xl font-bold text-skin-base'>Get Pre-approved</h1>
        </div>
        <div className='grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6'>
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
            placeholder='Jones'
          />
          <SelectMenu
            variant='col-span-6 sm:col-span-1 h-full'
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
            placeholder='jonjones@gmail.com'
          />
          <RequiredPhone
            name='phone'
            label='Phone*'
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
            placeholder='Sante Fe'
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
            placeholder='55874'
          />
        </div>

        <hr
          className={cn('border-px mx-1 my-8 border-baseAlt2Color', {
            'lg:my-4': hasVin,
          })}
        />
        <AgreementText dealer={brand} />
        {/* <div className='mt-8 flex flex-col space-y-10 sm:space-y-0 sm:flex-row w-full items-center sm:justify-between'></div> */}
        <div
          className={cn('mt-8 flex flex-col space-y-10 sm:space-y-0 sm:flex-row w-full items-center sm:justify-between', {
            'lg:mt-2': hasVin,
          })}>
          <RadioInput label='I Agree*' name='agree' control={control} isValid={isValid} />
          <button
            disabled={!watchAgree}
            className='inline-flex w-full min-w-[174px] justify-center rounded-md border border-transparent bg-skin-button-inverted py-4 text-[16px] font-medium text-skin-inverted shadow-sm hover:border-DRIVLY focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:w-48 sm:px-4 sm:py-2 sm:text-sm'
            type='submit'>
            Submit
          </button>
        </div>
        {hasVin && (
          <div className={`${hasVin ? 'pb-8 pt-16 lg:hidden' : 'pt-16'}  block `}>
            <Footer hasVin={hasVin} />
          </div>
        )}
      </form>
      {!hasVin && (
        <div className={`${hasVin ? 'pb-8 pt-16 lg:hidden' : 'pt-16'}  block `}>
          <Footer hasVin={hasVin} />
        </div>
      )}
    </>
  )
}
