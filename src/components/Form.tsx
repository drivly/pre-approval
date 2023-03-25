"use client"

import { states, suffixes } from "@lib/categories"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { emailReg, zipReg } from "../lib/regex"
import AgreementText from "./AgreementText"
import InputField from "./InputField"
import RequiredPhone from "./RequiredPhone"
import SelectMenu from "./SelectMenu"
import ToggleInput from "./ToggleInput"

interface RequestInput {
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
  const methods = useForm<RequestInput>({ mode: "onBlur" })
  const [state, setState] = useState(null)
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitSuccessful },
  } = methods

  async function handlePreApproval(post: RequestInput) {
    const res = await fetch("/api/pre-approval", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
    const data = await res.json()
    return data
  }

  const onSubmit: SubmitHandler<RequestInput> = async (data: any) => {
    try {
      const request = await handlePreApproval(data)
      if (isSubmitSuccessful && request.success) {
        reset()
        // send toast message & success message or page
      }
    } catch (error) {
      console.error(error)
    }
  }

  const watchAgree = watch("agree")

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-8 rounded-[4px] bg-skin-card p-8"
      >
        <h1 className="mb-5 text-xl font-bold text-txtPrimaryColor">
          Get Pre-approved
        </h1>
        <div className="flex flex-col">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center">
              <InputField
                {...register("firstName", { required: "Required" })}
                label="First Name"
                type="text"
                name="firstName"
                variant="w-full"
                errormsg={errors.firstName?.message!}
                placeholder="John"
              />
              <InputField
                {...register("middleInitial", {
                  maxLength: { value: 3, message: "Must be less than 3" },
                  validate: (value) => {
                    return value === "" || value?.match(/^[A-Z]+$/)
                      ? true
                      : "Invalid"
                  },
                })}
                label="MI"
                type="text"
                name="middleInitial"
                errormsg={errors.middleInitial?.message!}
                variant="w-20"
                placeholder="W"
              />
            </div>

            <div className="flex w-full items-center">
              <InputField
                {...register("lastName", { required: "Required" })}
                label="Last Name"
                type="text"
                name="lastName"
                variant="w-full"
                errormsg={errors.lastName?.message!}
                placeholder="Smith"
              />
              <SelectMenu
                label="Suffix"
                name="suffix"
                control={control}
                states={suffixes}
              />
            </div>
          </div>
          <div className="items-center sm:flex">
            <InputField
              {...register("email", {
                required: "Required",
                pattern: { value: emailReg, message: "Invalid Email" },
              })}
              label="Email"
              type="text"
              name="email"
              errormsg={errors.email?.message!}
              variant="sm:w-full"
              placeholder="johnwsmith@gmail.com"
            />
            <RequiredPhone
              name="phone"
              label="Phone"
              placeholder="561-255-1345"
              control={control}
              errors={errors}
            />
          </div>

          <div>
            <InputField
              {...register("streetAddress", { required: "Required" })}
              label="Street address"
              type="text"
              name="streetAddress"
              variant=" mx-1"
              errormsg={errors.streetAddress?.message!}
              placeholder="526 E 8th St"
            />
            <div className="flex w-full flex-col xl:flex-row xl:items-center">
              <InputField
                {...register("city", { required: "Required" })}
                label="City"
                type="text"
                name="city"
                variant="xl:w-full"
                errormsg={errors.city?.message!}
                placeholder="West Palm Beach"
              />
              <div className="flex items-center">
                <SelectMenu
                  label="State"
                  name="state"
                  control={control}
                  states={states}
                  rules={{ required: "Required" }}
                />

                <InputField
                  {...register("zipcode", {
                    required: "Required",
                    pattern: { value: zipReg, message: "Invalid Zip" },
                  })}
                  label="State"
                  type="text"
                  name="zipcode"
                  errormsg={errors.zipcode?.message!}
                  variant="flex-1 md:w-36"
                  placeholder="33401"
                />
              </div>
            </div>
          </div>
        </div>
        <AgreementText />
        <div className="mx-1 flex items-center justify-between">
          <ToggleInput
            name="agree"
            control={control}
            label="I agree"
            disabled={!isValid}
          />
          {watchAgree && (
            <button
              className="h-[50px] rounded-[4px] border bg-white px-5 text-skin-base hover:border-DRIVLY hover:bg-DRIVLY hover:text-skin-inverted disabled:hover:border-gray-200 disabled:hover:bg-gray-50 disabled:hover:text-skin-label"
              disabled={!watchAgree || !isValid}
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      {state && (
        <div className="px-4 text-sm font-medium">
          {JSON.stringify(state, null, 2)}
        </div>
      )}
    </>
  )
}
