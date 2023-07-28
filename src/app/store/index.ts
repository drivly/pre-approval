import { create } from 'zustand'

type Customer = {
  name: string
  email: string
  vin: string
  applicationId: string
}

type AppStore = {
  customer: Customer | null
  setCustomer: (state: {
    name?: string
    email?: string
    applicationId?: string
    vin?: string
  }) => void
}

const useCustomer = create<AppStore>((set) => ({
  customer: null,
  setCustomer: (state: any) => set({ customer: state }),
  resetCustomer: () => set({ customer: null }),
}))

export default useCustomer
