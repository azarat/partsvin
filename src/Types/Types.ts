export type CarPageProps = {
  carResponse: ILot
}

export interface ILot {
  auction: string
  lotNumber: string
  auctionDate: string
  lotInfo: {
    vehicleType: string
    vin: string
    make: string
    model: string
    trim: string
    year: number
  }
  specifications: {
    bodyStyle: {
      name: string
      type: string
    }
    engine: {
      capacity: string
      cylinders: number
    }
    fuelType: string
    transmissionType: string
    drivelineType: string
    color: string
  }
  conditionInfo: {
    condition: string
    odometer: {
      value: number
      unit: string
      status: string
    }
    primaryDamage: string
    secondaryDamage: string
    lossType: string
    keys: false
  }
  saleInfo: {
    sold: false
    currentBid: {
      value: number
      unit: string
    }
    finalBid: {
      value: number
      unit: string
    }
    branch: {
      id: number
      country: string
      state: string
      city: string
      zip: string
      locationName: string
      name: string
    }
    retailPrice: {
      value: number
      unit: string
    }
    sellerReserve: {
      value: number
      unit: string
    }
    sellerReserveMet: false
    saleDocument: {
      group: string
      state: string
      type: string
    }
    seller: {
      group: string
      displayName: string
    }
  }
  images: {
    full: string
    thumb: string
  }[]
}
