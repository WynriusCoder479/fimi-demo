export type Info = {
	id: string
	campaignName: string
	productCode: string
	cvr: string
	publisher: string
	category: 'credit' | 'loan' | 'account'
	categoryDescription: string
	condition: string
	suportArea: string
	requiredCreditHistory: string
	workingTime: string
	income: string
	creditLimit: string[]
	interestRates: string
	expires: string
	payments: string
	registration: {
		requied: string
		optional: string
	}
	commision: string
	commissionPolicy: {
		status: string
		description: string
		commission: string[]
		tax: string
	}
	image: string
	createdAt: Date
}
