'use client'

import { useForm } from 'react-hook-form'
import AgreementText from './AgreementText'
import InputField from './InputField'
import RequiredPhone from './RequiredPhone'
import ToggleInput from './ToggleInput'
import { useState } from 'react'

let emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/
let zipReg = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/

export default function Form() {
  const methods = useForm({ mode: 'onBlur' })
  const [state, setState] = useState({})
  const { register, control, handleSubmit, watch, formState: { errors, isValid } } = methods

  const onSubmit = (data: any) => {
    setState(data)
  }

  const watchAgree = watch('agree')
  console.log('watchAgree', watchAgree)

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className='my-8 bg-[#e4e8e9] p-6 rounded-[4px]'>
      <h1 className='text-xl font-bold text-txtPrimaryColor mb-5'>Get Pre-approved</h1>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center w-full'>
          <div className='flex items-center w-full'>
            <InputField
              {...register('firstName', { required: 'Required' })}
              label='First Name'
              type='text'
              name='firstName'
              variant='w-full'
              errormsg={errors.firstName?.message!}
              placeholder='John'
            />
            <InputField
              {...register('middleInitial', { maxLength: { value: 3, message: 'Must be less than 3' }, validate: (value) => { return value === '' || value.match(/^[A-Z]+$/) ? true : 'Invalid' } })}
              label='MI'
              type='text'
              name='middleInitial'
              errormsg={errors.middleInitial?.message!}
              variant='w-20'
              placeholder='W'
            />
          </div>

          <div className='flex items-center w-full'>
            <InputField
              {...register('lastName', { required: 'Required' })}
              label='Last Name'
              type='text'
              name='lastName'
              variant='w-full'
              errormsg={errors.lastName?.message!}
              placeholder='Smith'
            />
            <InputField
              {...register('suffix')}
              label='Suffix'
              type='text'
              name='suffix'
              errormsg={errors.suffix?.message!}
              variant='w-20'
            />
          </div>
        </div>
        <div className='sm:flex items-center'>
          <InputField
            {...register('email', { required: 'Required', pattern: { value: emailReg, message: 'Invalid Email' } })}
            label='Email'
            type='text'
            name='email'
            errormsg={errors.email?.message!}
            variant='sm:w-full'
            placeholder='johnwsmith@gmail.com'
          />
          <RequiredPhone name="phone" label='Phone' placeholder='561-255-1345' control={control} errors={errors} />

        </div>

        {/* Address fields */}
        <div>
          <InputField
            {...register('streetAddress', { required: 'Required' })}
            label='Street address'
            type='text'
            name='streetAddress'
            variant=' mx-1'
            errormsg={errors.streetAddress?.message!}
            placeholder='526 E 8th St'
          />
          <div className='flex flex-col xl:flex-row xl:items-center w-full'>
            <InputField
              {...register('city', { required: 'Required' })}
              label='City'
              type='text'
              name='city'
              variant='xl:w-full'
              errormsg={errors.city?.message!}
              placeholder='West Palm Beach'
            />
            <div className='flex items-center'>

              <InputField
                {...register('state', { required: 'Required' })}
                label='State'
                type='text'
                name='state'
                errormsg={errors.state?.message!}
                variant='md:flex-shrink-0 w-20'
                placeholder='FL'
              />
              <InputField
                {...register('zipcode', { required: 'Required', pattern: { value: zipReg, message: 'Invalid Zip' } })}
                label='Zip code'
                type='text'
                name='zipcode'
                errormsg={errors.zipcode?.message!}
                variant='flex-1 md:w-36'
                placeholder='33401'
              />
            </div>
          </div>
        </div>
      </div>
      <AgreementText />
      <div className='flex justify-between items-center mx-1'>

        <ToggleInput name='agree' control={control} label='I agree' />
        {watchAgree && <button className='hover:bg-black bg-white text-DRIVLY hover:border-DRIVLY border hover:text-white py-3 px-5 rounded-[4px]' disabled={!watchAgree} type='submit'>Submit</button>}
        
      </div>
    </form>
    {/* {JSON.stringify(state, undefined, 2)} */}
    </>
    
  )
}


